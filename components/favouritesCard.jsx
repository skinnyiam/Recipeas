import React from "react";
import useFirestore from "../hooks/useFirestore";
import { useAuth } from "../context/AuthContext";
import { Image} from "next/image"
import {useRouter} from "next/router"

const FavouritesCard = ({
  title,
  image,
  id,
  favouritesCardItems,
  setFavouritesCardItems,
}) => {
  const { user } = useAuth();
  const { deleteFavourites } = useFirestore();

  const handleClick = async () => {
    if (user) {
      setFavouritesCardItems(
        favouritesCardItems.filter((cardItem) => {
          return cardItem.id != id;
        })
      );
      await deleteFavourites(user.uid, id);
    } else {
      console.log("maa chudao");
    }
  };
  const router = useRouter();
  const handleSubmit = async () => {
    router.push({
      pathname: "/favdetails",
      query: {
        q: id,
      },
    });
  };

  return (
    <>
     
      <div className="dark:bg-slate-700 bg-white rounded-lg border-blue-300 border-[2px] sm:border-[1px] shadow-2xl h-[330px] w-screen sm:w-64 flex flex-col mx-auto mb-6 justify-between">
        <div className="flex-col justify-center items-center w-auto sm:w-64 ">
          <div className="flex flex-col justify-center sm:justify-center ">
            <div className="flex justify-between">
              <h1 className=" text-[13px] text-black  w-auto font-bold dark:text-white">
                {title}
              </h1>
              <button className="w-auto mr-2" onClick={handleClick} >
              <svg
              className="w-auto border-0"
              stroke="currentColor"
              fill="currentColor"
              //   stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"></path>
              </g>
            </svg>
              </button>
            </div>
            <img
              width="250px"
              height="224px"
              className="mt-[14px] rounded-md "
              src={image}
              alt=""
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="flex mx-auto justify-center items-center w-auto sm:w-[200px] text-[15px] text-gray-400 rounded-md font-bold dark:bg-black bg-blue-500 hover:text-gray-800"
        >
          See full recipe
        </button>
      </div>
      
    </>
  );
};

export default FavouritesCard;
