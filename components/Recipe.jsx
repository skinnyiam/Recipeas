import React from "react";
import Image from "next/image";

const Recipe = ({ title, image }) => {
  const url = image;
  return (
    <div className="bg-white rounded-lg h-[300px] w-auto sm:w-64 flex flex-col m-4 ">
      <div className="flex-col justify-center items-center">
        <h1 className="ml-2 dark:text-black text-[13px] font-semibold">
          {title}
        </h1>
      </div>
      <div className=" mx-auto">
        <img
          className="mt-[20px] rounded  w-auto sm:w-[215px] h-[215px]"
          src={url}
          alt=""
        />
      </div>
    </div>
  );
};

export default Recipe;
