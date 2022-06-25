import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image"

const Result = ({ title, image, id }) => {
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
            <h1 className=" text-[13px] text-black  w-auto font-bold dark:text-white">{title}</h1>
            
            <Image
          width="250px"
          height="224px"
            className="mt-[14px]  rounded-md "
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
