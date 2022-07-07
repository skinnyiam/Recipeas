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

  useEffect(() => {
    if (user) {
      getFavourites(user.uid).then((data) => {
        setFavouritesCardItems(data);
      });
    }
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
      <div className="h-screen">
        {favouritesCardItems.map((card)=>{
          return (
            <FavouritesCard
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}

            />
          )    
        })}
      </div>
    </>
  );
};

export default Favourites;
