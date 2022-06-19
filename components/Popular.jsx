import React from "react";
import { useEffect, useState } from "react";
import Recipe from "../components/Recipe";


const Popular = () => {
  const APP_KEY = "aee22559515b4e4d95d5afe9b86e0abc";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipeas();
  }, []);

  const getRecipeas = async () => {
    
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${APP_KEY}&number=9`
    );
    const data = await response.json();
    localStorage.setItem('popular',JSON.stringify(data.recipes))
    console.log(data);
    setRecipes(data.recipes);
    
  };

  return (
    <>
      <h1 className="h-4 justify-center flex text-2xl mb-6">Popular Foods</h1>
      <div className="mx-auto pt-4  h-[1200px] text-2xl flex  bg-cyan-900 justify-center ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
          {recipes?.map((recipe) => {
            return (
              
                <Recipe
                  key={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  ocassions={recipe.ocassions}
                />
          
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
