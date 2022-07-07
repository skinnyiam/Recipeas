import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/heading.module.css";
import { LightningBoltIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import SearchField from "../components/searchField";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <SunIcon
          className="w-8 sm:w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    } else {
      return (
        <MoonIcon
          className=" w-8 sm:w-10 h-10 text-white "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    }
  };

  return (
    <>
      <Head>
        <title>Home | Recipeas</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/hamburger.png" />
      </Head>

      <div className="z-10 backdrop-filter backdrop-blur-lg bg-opacity-0 h-14  w-screen mx-auto bg-white  shadow-xl fixed flex justify-around  border-gray-200">
        <div className={styles.heading}>
          <img
            className="w-10 h-9 m-1 mt-2 hidden sm:flex"
            src="/hamburger.png"
            alt=""
          />
          <Link href="/">Recipeas</Link>
        </div>
        <div>
          {user ? (
            <>
              {/* desktop view starts */}

              {/* when user get log in  */}
              <ul className="hidden sm:flex mt-2">
                <SearchField />
                <button className="text-base dark:text-white text-gray-800 font-medium mr-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                </button>
                <button className="text-base dark:text-white text-gray-800 font-medium mr-4">
                  <li>
                    <Link href="/favourites">Favourites</Link>
                  </li>
                </button>
                

                <button
                  className="w-[65px] h-[38px] border border-blue-700 dark:text-white font-medium rounded text-base text-blue-700"
                  onClick={() => {
                    logout();
                    router.push("/login");
                  }}
                >
                  Logout
                </button>
                <li className="ml-2">{renderThemeChanger()}</li>
              </ul>

              {/* desktop view ends  */}

              {/* mobile view starts  */}
              <div className="flex ml-4">
                <li className="flex sm:hidden mr-2 mt-2">
                  {renderThemeChanger()}
                </li>
                <li className="flex sm:hidden w-[50px] mt-2">
                  <SearchField />
                </li>
                <button
                  onClick={handleClick}
                  className="flex sm:hidden justify-end mt-[20px] ml-2 z-10 "
                >
                  {!nav ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      // stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      // stroke-width="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                    </svg>
                  )}
                </button>
              </div>

                 {/* when menu button gets clicked  */}

                 <div
                className={
                  !nav
                    ? "hidden"
                    : "absolute dark:bg-black dark:text-white mt-2 sm:hidden bg-slate-200 w-full h-screen top-0 left-0 flex justify-center items-center flex-col"
                }
              >
                <button onClick={handleClick} className=" dark:text-white text-gray-800 font-medium mr-4 py-6 text-2xl">
                  <Link href="/">Home</Link>
                </button>
                <button onClick={handleClick} className=" dark:text-white text-gray-800 font-medium mr-4 py-6 text-2xl">
                  <Link href="/favourites">Favourites</Link>
                </button>
                

                <button 
                  className="w-[65px] h-[38px] mr-8 mt-4  dark:text-white font-medium rounded text-2xl text-blue-700"
                  onClick={() => {
                    handleClick();
                    logout();
                    router.push("/login");
                  }}
                >
                  Logout
                </button>
              </div>

              {/* {when menu button gets clicked ends here} */}

              {/* mobile view ends  */}
            </>
          ) : (
            <>
              {/* //when the user is not log in   */}

              {/* desktop view  */}
              <ul className="hidden mt-2 sm:flex">
                <SearchField />

                <button className="text-base dark:text-white text-gray-800 font-medium mr-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                </button>
                <button className="text-base dark:text-white text-gray-800 font-medium mr-4">
                  <li>
                    <Link href="/favourites">Favourites</Link>
                  </li>
                </button>
                

                <li>
                  <button className="w-[65px] dark:text-white h-[38px] border border-blue-700 font-medium rounded text-base text-blue-700">
                    <Link href="/login">Login</Link>
                  </button>
                </li>
                <li className="ml-2">{renderThemeChanger()}</li>
              </ul>
              {/* desktop view ends  */}

              {/* mobile view starts  */}
              <div className="flex ml-4">
                <li className="flex sm:hidden mr-2 mt-2">
                  {renderThemeChanger()}
                </li>
                <li className="flex sm:hidden w-[50px] mt-2">
                  <SearchField />
                </li>
                {/* menu button  */}
                <button
                  onClick={handleClick}
                  className="flex sm:hidden justify-end mt-[20px] ml-2 z-10 "
                >
                  {!nav ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      // stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      // stroke-width="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                    </svg>
                  )}
                </button>
                {/* menu button ends  */}
              </div>

              {/* when menu button gets clicked  */}

              <div
                className={
                  !nav
                    ? "hidden"
                    : "absolute dark:bg-black dark:text-white mt-2 sm:hidden bg-slate-200 w-full h-screen top-0 left-0 flex justify-center items-center flex-col"
                }
              >
                <button onClick={handleClick} className=" dark:text-white text-gray-800 font-medium mr-4 py-6 text-2xl">
                  <Link href="/">Home</Link>
                </button>
                <button onClick={handleClick} className=" dark:text-white text-gray-800 font-medium mr-4 py-6 text-2xl">
                  <Link href="/favourites">Favourites</Link>
                </button>
                

                <button onClick={handleClick} className="w-[65px] mr-4 py-6 text-2xl dark:text-white h-[38px]  font-medium rounded text-blue-700">
                  <Link href="/login">Login</Link>
                </button>
              </div>

              {/* {when menu button gets clicked ends here} */}
              {/* mobile view ends  */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
