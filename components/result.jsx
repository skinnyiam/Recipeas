import React,{useEffect, useState} from "react";
import { useRouter } from "next/router";




const result = ({ title,image,id}) => {

  

  const APP_KEY = "294e46d22b5e47a68cd0fe98eb601ea5";
  const router=useRouter();
  const handleSubmit = async() =>{
       router.push({
       pathname: "/fullDetails",
       query:{
        q:id,
       }
  });
}
  return (
    <>
    <div className="bg-white rounded-lg border-[1px]  shadow-2xl h-[300px] w-64 flex flex-col m-4 ">
      <div className="flex-col justify-center items-center  w-64 h-20">
        <h1 className="ml-6 text-[15px] m-0 p-0 font-bold">{title}</h1>
        <img className='mt-[20px] rounded w-54 h-54' src={image} alt="" />
        <p>{id}</p>
      </div>
      <div className="mt-[180px] h-10 w-64">
        <button  onClick={handleSubmit} className="w-64 text-[15px] text-gray-400 rounded-lg font-bold bg-blue-500 hover:text-gray-800">
         
          See full recipe</button>
      </div>
      
    </div>
  
     
    </>
  );
};

export default result;
