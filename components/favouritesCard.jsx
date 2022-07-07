import React from "react";
import useFirestore from "../hooks/useFirestore";
import { useAuth } from "../context/AuthContext";


const favouritesCard = ({ title, image, id }) => {
    const { user } = useAuth();
  const {deleteFavourites} = useFirestore();
  
    const handleClick = () =>{
        if(user){
            deleteFavourites(user.uid, id);
          }
          else{
            console.log("maa chudao")
          }
    }

  return (
    <div className="pt-16">
      <h1>{title}</h1>
      <button onClick={handleClick}>
        <svg
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
  );
};

export default favouritesCard;
