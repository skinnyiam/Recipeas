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
    console.log(data.extendedIngredients)
  };
  return (
    <>
      <div className="h-full w-full pt-[200px] flex">
        <div>
          {details.title}
          <img src={details.image} alt="" />
          <p>{details.dishTypes}</p>
        </div>
        <div>
          <button>Ingredients</button>
          <button>Instructions</button>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
        {/* <h3>{deextendedIngredients}</h3> */}
        <ul>{data.extendedIngredients.map((ingredient)=>{
          <li>{ingredient.original}</li>
        })}</ul>
      </div>
    </>
  );
};

export default fullDetails;