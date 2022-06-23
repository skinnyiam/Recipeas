import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Result from "../components/result";

const Dashboard = () => {
  const router = useRouter();

  const APP_KEY = "9f02ee0f0fe64934bfb55e6ebe6c32f4";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipeas();
    setSearch(router.query.q);
  }, [router.query.q]);
  const getRecipeas = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${APP_KEY}&number=40&query=${router.query.q}`
    );
    const data = await response.json();
    setRecipes(data.results);
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/dashboard",
      query: {
        q: search,
      },
    });
  };

  const [search, setSearch] = useState(router.query.q);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className=" h-full pt-[100px] flex justify-center ">
        <form onSubmit={handleSubmit} className="flex items-center">
          <label className="sr-only">Search</label>
          <div className="relative z-0 w-[200px] sm:w-[500px]">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className=" w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  // clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto sm:w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your recipeas..."
              required
              onChange={updateSearch}
              value={search || ""}
            />
            <button
              type="button"
              className="flex absolute inset-y-0 right-0 items-center pr-3"
            >
              {/* <svg
                className="sm:m-0 w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  // clip-rule="evenodd"
                ></path>
              </svg> */}
            </button>
          </div>
        </form>
      </div>
      <div className=" mx-[40px] sm:mx-auto mt-10  pt-4 max-w-[1180px]  h-auto text-2xl    justify-center ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
          {recipes.map((recipe) => {
            return (
              <Result
                id={recipe.id}
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
