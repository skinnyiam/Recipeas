import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const APP_KEY = "294e46d22b5e47a68cd0fe98eb601ea5";

const fullDetails = () => {
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
      <div className="h-full w-full pt-[100px] flex-col">
        <div className="flex justify-center items-center flex-col w-[350px] rounded-lg shadow-gray-900 shadow-2xl bg-slate-300 h-[350px] mx-auto">
          <h1 className="text-xl font-bold text-indigo-800">{details.title}</h1>
          <img
            className=" mt-2 rounded-full w-[300px] h-[300px]"
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
                    className="text-gray-600 text-sm font-thin"
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
            <h3
              className="text-gray-800 font-semibold text-sm mx-4 sm:mx-0"
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></h3>
            <h1 className="text-indigo-800 text-xl font-bold pt-12 flex justify-center sm:justify-start">
              Instructions:
            </h1>
            <h3
              className="text-gray-800 font-semibold text-sm mx-4 sm:mx-0"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h3>
            <h3 className="text-indigo-800 text-xl font-bold pt-12 flex justify-center sm:justify-start">Ingredients:</h3>
            
              {details.extendedIngredients?.map((ingredient)=>{
                return(
                <li className="text-gray-800 text-sm font-medium mx-4 sm:mx-0" key={ingredient.id}>{ingredient.original}</li>
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

export default fullDetails;
