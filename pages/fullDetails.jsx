import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const APP_KEY = "9f02ee0f0fe64934bfb55e6ebe6c32f4";

const FullDetails = () => {
  const router = useRouter();
  const [details, setdetails] = useState({});

  useEffect(() => {
    console.log(router.query.q);
    getRecipeas();
  }, [router.query.q]);

  const getRecipeas = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${router.query.q}/information?apiKey=${APP_KEY}&includeNutrition=true`
    );
    const data = await response.json();
    setdetails(data);

    console.log(data);
  };
  return (
    <>
  <Head>
    <title>{details.title} | Recipeas</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
  </Head>

      <div className="h-full w-full pt-[100px] flex-col">
        <div className="flex justify-center items-center flex-col w-[350px] rounded-lg shadow-gray-900 shadow-2xl bg-gray-200 h-[370px] mx-auto">
          <h1 className="mx-0 text-xl p-[4px] font-bold text-indigo-800">{details.title}</h1>
          <img
            className=" mt-2 rounded-full w-[300px] h-[300px] border "
            src={details.image}
            alt=""
          />
        </div>
        <div>
          <div className="max-w-[1180px]  mx-auto flex flex-col pt-12">
            <h1 className="text-indigo-800 text-xl font-medium flex justify-center items-center">
              Dishtypes
            </h1>
            <p className="flex flex-col justify-center items-center">
              {details.dishTypes?.map((dishtype) => {
                return (
                  <li
                    className="text-gray-600 dark:text-white text-sm font-thin"
                    key={dishtype}
                  >
                    {dishtype}
                  </li>
                );
              })}
            </p>
            <h1 className="text-indigo-800 text-xl font-bold pt-12 flex justify-center sm:justify-start">
              Summary:
            </h1>
            <p
              className="text-gray-800 mt-2 p-4 font-semibold text-sm mx-4 sm:mx-0 bg-gray-100 rounded-lg border border-blue-600 drop-shadow-xl"
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></p>
            <h1 className="text-indigo-800 text-xl font-bold pt-12 flex justify-center sm:justify-start">
              Instructions:
            </h1>
            <h3
              className="text-gray-800 mt-2 p-4 font-semibold text-sm mx-4 sm:mx-0 bg-gray-100 rounded-lg border border-blue-600 drop-shadow-xl"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h3>
            <h3 className="text-indigo-800 text-xl font-bold pt-12 flex justify-center mb-2 sm:justify-start">Ingredients:</h3>
            
              {details.extendedIngredients?.map((ingredient)=>{
                return(
                <li className="text-black dark:text-white text-sm font-medium mx-4 sm:mx-0" key={ingredient.id}>{ingredient.original}</li>
                )
              })}
              
          {/* {details.analyzedInstructions ? (
            details.analyzedInstructions[0].steps.map((instruction) => {
              return <li className="text-gray-800 text-sm font-medium" key={instruction.number}>{instruction.step}</li>;
            })
          ) : (
            <></>
          )} */}
        
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FullDetails;
