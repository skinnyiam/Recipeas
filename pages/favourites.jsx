import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import Head from "next/head";
import useFirestore from "../hooks/useFirestore";
import FavouritesCard from "../components/favouritesCard"

const Favourites = () => {
  const { user } = useAuth();
  const [favouritesCardItems, setFavouritesCardItems] = useState([]);
  const { getFavourites } = useFirestore();

const loadFavorites=()=>{
  if (user) {
    getFavourites(user.uid).then((data) => {
      setFavouritesCardItems(data);
    });
  }
}

  useEffect(() => {
    loadFavorites()
  }, []);

  useEffect(()=>{
    console.log('favourites: ',favouritesCardItems)
  },[favouritesCardItems])

  if (user == null) {
    return (
      <>
        <Head>
          <title>Favourites | Recipeas</title>
        </Head>
        <div className="font-medium flex justify-center  items-center h-screen">
          <h1>
            Please{" "}
            <button className="underline text-blue-600 ml-1 mr-1">
              <Link href="/login">Login</Link>
            </button>
            first,to view Favourites
          </h1>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Favourites | Recipeas</title>
      </Head>
      <div className="mx-auto pt-20 max-w-[1180px] h-screen text-2xl  justify-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {favouritesCardItems.map((card)=>{
          return (
            <FavouritesCard
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            favouritesCardItems={favouritesCardItems}
            setFavouritesCardItems={setFavouritesCardItems}

            />
          )    
        })}
      </div>
    </>
  );
};

export default Favourites;
