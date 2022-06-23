import React from "react";
import { useEffect, useState } from "react";
import Recipe from "../components/Recipe";


const Popular = () => {
  
  const [recipes, setRecipes] = useState([]);

  const API_KEY="9f02ee0f0fe64934bfb55e6ebe6c32f4"

  useEffect(() => {
    getRecipeas();
  }, []);

  const getRecipeas = async () => {
    
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=40`
    );
    const data = await response.json();
    localStorage.setItem('popular',JSON.stringify(data.recipes))
    console.log(data);
    setRecipes(data.recipes);
    
  };

  return (
    <>
      <h1 className="h-4 justify-center flex text-2xl mb-6">Popular Foods</h1>
      <div className="mx-auto pt-4  h-full text-2xl flex dark:bg-black  bg-cyan-900 justify-center ">
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
