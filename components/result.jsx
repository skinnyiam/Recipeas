import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useFirestore from "../hooks/useFirestore";
import { useAuth } from "../context/AuthContext";

const Result = ({ title, image, id }) => {
  const { addFavourite } = useFirestore();
  const { user } = useAuth();
  const handleFavClick = () => {
    if (user) {
      addFavourite(user.uid, { title, image, id });
    } else {
      console.log("maa chudao");
    }
  };

  const router = useRouter();
  const handleSubmit = async () => {
    router.push({
      pathname: "/fullDetails",
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
              <button onClick={handleFavClick}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0H24V24H0z"></path>
                    <path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243c2.16 2.166 2.329 5.557.507 7.91C19.926 12.24 18.99 12 18 12c-3.314 0-6 2.686-6 6 0 1.009.249 1.96.689 2.794l-.69.691-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <Image
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

export default Result;
