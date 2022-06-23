import React, { useState,useEffect } from "react";
import Link from "next/link";
import { useAuth  } from "../context/AuthContext";
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
  const [mounted,setMounted]=useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  useEffect(() =>{
    setMounted(true);
  },[])

  const {systemTheme , theme, setTheme} = useTheme ();

    const renderThemeChanger = () => {
      if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="light"){
        return (
          <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('dark')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-10 h-10 text-white " role="button" onClick={() => setTheme('light')} />
        )
      }
   };

  return (
    <>
      <Head>
        <title>Home | Recipeas</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/hamburger.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="z-10 backdrop-filter backdrop-blur-lg bg-opacity-0 h-14  w-screen mx-auto dark:bg-gray-800 bg-white  shadow-xl fixed flex justify-around  border-gray-200">
        <div className={styles.heading}>
          <img className="w-10 h-9 m-1 mt-2" src="/hamburger.png" alt="" />
          <Link href="/">Recipeas</Link>
        </div>
        <div className="">
          {user ? (
            <>
            {/* desktop view  */}
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
                <button className="text-base dark:text-white text-gray-800 font-medium mr-4">
                  <li>
                    <Link href="/history">History</Link>
                  </li>
                </button>

                <button
                  className="w-[65px] h-[38px] dark:text-white border border-blue-700 font-medium rounded text-base text-blue-700"
                  onClick={() => {
                    logout();
                    router.push("/login");
                  }}
                >
                  Logout
                </button>
                <li className="ml-2">
                {renderThemeChanger()}
                </li>
              </ul>

              <div onClick={handleClick} className="flex sm:hidden  mt-2 ml-4 ">
                {!nav ? (
                  <>
                  <div className="flex justify-center items-center ">
                  
                 {renderThemeChanger()}
                 
                   <svg
                     className="z-10 ml-4"
                     stroke="currentColor"
                     fill="currentColor"
                     stroke-width="0"
                     viewBox="0 0 1024 1024"
                     height="1em"
                     width="1em"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                   </svg>
                   </div>
                   </>
                ) : (
                  <svg
                    className="z-10"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                  </svg>
                )}
              </div>
              {/* mobile view  */}
              <div className="">
                <ul
                  className={
                    !nav
                      ? "hidden"
                      : " flex absolute top-0 left-0 flex-col justify-center items-center h-screen bg-gray-800 w-full z-0"
                  }
                >
                  <SearchField />
                  <button className="text-base  text-white font-medium mr-4 p-4">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                  </button>
                  <button className="text-base text-white font-medium mr-4 p-4">
                    <li>
                      <Link href="/favourites">Favourites</Link>
                    </li>
                  </button>
                  <button className="text-base text-white font-medium mr-4 p-4">
                    <li>
                      <Link href="/history">History</Link>
                    </li>
                  </button>
                  <li className="p-4 mr-2">
                    <button
                      className="w-[65px] h-[38px] border  font-medium rounded text-base text-blue-700 "
                      onClick={() => {
                        logout();
                        router.push("/login");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>

            {/* desktop view  */}
            
              <ul className=" mt-2 hidden sm:flex">
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
                <button className="text-base dark:text-white text-gray-800 font-medium mr-4">
                  <li>
                    <Link href="/history">History</Link>
                  </li>
                </button>

                <li>
                  <button className="w-[65px] h-[38px] border dark:text-white border-blue-700 font-medium rounded text-base text-blue-700">
                    <Link href="/login">Login</Link>
                  </button>
                </li>
             
                <li className="ml-2 ">
                {renderThemeChanger()}
                </li>
              </ul>

              <div onClick={handleClick} className="flex sm:hidden  mt-2 ml-4 ">
                {!nav ? (
                  <>
                 <div className="flex justify-center items-center ">
                 
                {renderThemeChanger()}
                
                  <svg
                    className="z-10 ml-4"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                  </div>
                  </>
                ) : (
                  <svg
                    className="z-10 mt-6"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                  </svg>
                )}
              </div>
   {/* phone view  */}
              <div className="">
                <ul
                  className={
                    !nav
                      ? "hidden"
                      : " flex absolute top-0 left-0 flex-col justify-center items-center h-screen bg-gray-800 w-full z-0"
                  }
                >
                  <button className="text-base text-white font-medium mr-4 p-4">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                  </button>
                  <button className="text-base text-white font-medium mr-4 p-4">
                    <li>
                      <Link href="/favourites">Favourites</Link>
                    </li>
                  </button>
                  <button className="text-base text-white font-medium mr-4 p-4">
                    <li>
                      <Link href="/history">History</Link>
                    </li>
                  </button>

                  <li className="p-4 mr-2">
                    <button className="w-[65px] h-[38px] border  font-medium rounded text-base text-blue-700 ">
                      <Link href="/login">Login</Link>
                    </button>

                  </li>
                 
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
