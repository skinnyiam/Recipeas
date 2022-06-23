import React, { useEffect, useState } from "react";
import { useRouter as Userouter } from "next/router";


const result = ({ title, image, id }) => {
  const router = Userouter();
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
      <div className="bg-white rounded-lg border-[1px] sm:mx-auto shadow-2xl h-[330px] w-64 flex flex-col m-4 justify-between">
        <div className="flex-col justify-center items-center  w-64 h-20">
          <div className="flex justify-between">
            <h1 className="ml-6 text-[13px] m-0 p-0 font-bold dark:text-black">{title}</h1>
            <button data-tooltip-target="tooltip-default">
              <div
                id="tooltip-default"
                role="tooltip"
                className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <svg
                className="text-red-300 hover:text-red-700"
                stroke="currentColor"
                fill="currentColor"
                // stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
              </svg>
            </button>
          </div>
          <img
            className="mt-[10px] rounded-2xl w-[250px] h-54"
            src={image}
            alt=""
          />

            
        </div>
        <div className="mt-[200px] h-10  flex justify-center place-items-end ">
          <button
            onClick={handleSubmit}
            className="flex justify-center items-center w-64 text-[15px] text-gray-400 rounded-lg font-bold bg-blue-500 hover:text-gray-800"
          >
            See full recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default result;
