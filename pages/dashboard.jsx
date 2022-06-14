import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Result from "../components/result";

const dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.q);
  }, []);

  const APP_ID = "5ff41525";
  const APP_KEY = "593d42ff2a6d3bdd3ab46d9a6dde3de5";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipeas();
  }, [query1]);

  const getRecipeas = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${router.query.q}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  
const [search,setSearch]=useState("");
const [query1,setQuery1] = useState("pizza");

const updateSearch = (e)=>{
  setSearch(e.target.value);
  console.log(search)
  }

  const getSearch = (e)=>{
    e.preventDefault();
    setQuery1(search);
    console.log(setQuery1)
 }

  return (
    <>
      <div className=" h-full pt-[100px] flex justify-center">
        <form onSubmit={getSearch} class="flex items-center">
          <label for="voice-search" class="sr-only">
            Search
          </label>
          <div class="relative z-0 w-[500px]">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class=" w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your recipeas..."
              required
              onChange={updateSearch}
              value={search}
              onKeyDown={(e)=>{
                if(e.key=="Enter"){
                  router.push({
                    pathname:"/dashboard",
                    query:{
                       q:search,
                    }
                  })
                }
              }}
            />
            <button
              type="button"
              class="flex absolute inset-y-0 right-0 items-center pr-3"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <button
            type="submit"
            class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="mr-2 -ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </form>
      </div>
      <div className="mt-10 mx-auto pt-4 max-w-[1180px]  h-[700px] text-2xl    justify-center ">
        <div className=" grid grid-cols-4">
          {recipes.map((recipe) => {
            return (
              <Result
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                cuisineType={recipe.recipe.cuisineType}
                image={recipe.recipe.image}
                mealType={recipe.recipe.mealType}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default dashboard;
