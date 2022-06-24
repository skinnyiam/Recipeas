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
      <div className="p-[4px] mx-auto">
        <img
          width="216px"
          height="216px"
          className="mt-[20px] rounded  "
          src={url}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Recipe;
