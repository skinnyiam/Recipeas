import React from "react";
import Popular from "../components/Popular";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const gotodashboard = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <div className=" max-w-[1180px]  mx-auto  h-[600px]  m-0 p-16 text-2xl  flex  justify-center ">
        
        <div className="mt-12 mr-10 ">
          <p className="text-xl sm:text-3xl font-normal">
            {" "}
            Let 's Start <br />
            Cooking With <br />
            Popular Recipes!!
          </p>{" "}
          <p className="mt-2 text-xl text-gray-600">
            {" "}
            Want to learn cook but confused how to start ?{" "}
          </p>{" "}
          <p className="text-xl text-gray-600">
            {" "}
            No need to worry again!{" "}
          </p>{" "}
          <div className="mt-14">
            <p className="mt-2 text-xl text-gray-600">
              Search your favourite recipeas here....{" "}
            </p>{" "}
            <button
              type="button"
              className=" mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={gotodashboard}
            >
              Get Started{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}


        <div className="mt-8 ml-4 hidden sm:block">
          <img src="/food2.png" alt="" width="350px" />
        </div>{" "}
      </div>{" "}
      <Popular />
    </>
  );
};

export default index;
