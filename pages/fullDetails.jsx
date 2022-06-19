import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const APP_KEY = "aee22559515b4e4d95d5afe9b86e0abc";

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
        <div className="flex justify-center items-center flex-col w-[400px] rounded-lg shadow-gray-900 shadow-2xl bg-slate-300 h-[400px] mx-auto">
          <h1 className="text-xl text-green-400">{details.title}</h1>
          <img className=" mt-2 rounded-full w-[350px] h-[350px]" src={details.image} alt="" />
          {/* <p>{details.dishTypes?.map((dishtype)=>{
            return(
              <li key={dishtype}>{dishtype}</li>
            )
          })}</p> */}
        </div>
        <div>
          <button>Ingredients</button>
          <button>Instructions</button>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
        {/* <h3>{deextendedIngredients}</h3> */}
        <ul>{details.extendedIngredients?.map((ingredient)=>{
          return(
          <li >
            {ingredient?.steps((step)=>{
              return(
                <li key={step.name}>
                     {step}
                </li>
              )
              })}
          </li>
          )
        })}</ul>
         
      </div>
    </>
  );
};

export default fullDetails;