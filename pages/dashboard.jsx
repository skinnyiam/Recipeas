import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Result from "../components/result";

const Dashboard = () => {
  const router = useRouter();

  const APP_KEY = "294e46d22b5e47a68cd0fe98eb601ea5";
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
      <div className=" h-full pt-[100px] flex justify-center mx-0 sm:mx-auto">
        <form onSubmit={handleSubmit} className="flex items-center">
          <label className="sr-only">Search</label>
          <div className="relative z-0 w-auto sm:w-[500px] mr-auto sm:mr-0">
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
              className="mx-0 sm:mx-auto outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto sm:w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your recipeas..."
              required
              onChange={updateSearch}
              value={search || ""}
            />
           
          </div>
        </form>
      </div>
      <div className="mx-auto mt-10  pt-4 max-w-[1180px] h-auto text-2xl  justify-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4" >
    
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
    </>
  );
};

export default Dashboard;
