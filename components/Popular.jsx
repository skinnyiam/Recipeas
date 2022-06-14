import React from "react";
import { useEffect, useState } from "react";
import Recipe from "../components/Recipe";

const Popular = () => {
  const APP_ID = "5ff41525";
  const APP_KEY = "593d42ff2a6d3bdd3ab46d9a6dde3de5";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipeas();
  }, []);

  const getRecipeas = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  return (
    <>
      <h1 className="h-4 justify-center flex text-2xl mb-6">Popular Foods</h1>
      <div className="mx-auto pt-4  h-[1200px] text-2xl flex  bg-cyan-900 justify-center ">
        <div className=" grid grid-cols-4 ">
          {recipes.map(recipe=>{
            return(
             <Recipe  
             key={recipe.recipe.label}
             title={recipe.recipe.label}
             cuisineType={recipe.recipe.cuisineType}
             image={recipe.recipe.image}
             mealType={recipe.recipe.mealType}
             />
            )
          })}
              
          
        </div>
        
      </div>
    </>
  );
};

export default Popular;
