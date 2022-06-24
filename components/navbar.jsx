import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/heading.module.css";
import { LightningBoltIcon } from "@heroicons/react/solid";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import SearchField from "../components/searchField";



const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const {systemTheme , theme, setTheme} = useTheme ();
  const renderThemeChanger = () => {

    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="light"){
      return (
        <SunIcon className="w-8 sm:w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('dark')} />
      )
    }

    else {
      return (
        <MoonIcon className=" w-8 sm:w-10 h-10 text-white " role="button" onClick={() => setTheme('light')} />
      )
    }
 };
  
  return (
    <>
      <Head>
        <title>Home | Recipeas</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/hamburger.png" />
        
      </Head>
   
      <div className="z-10 backdrop-filter backdrop-blur-lg bg-opacity-0 h-14  w-screen mx-auto bg-white  shadow-xl fixed flex justify-around  border-gray-200">
      
        <div className={styles.heading} >
            <img className="w-10 h-9 m-1 mt-2 hidden sm:flex"  src="/hamburger.png" alt=""/>
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
                <button className="text-base dark:text-white text-gray-800 font-medium mr-4">
                <li>
                  <Link href="/history">History</Link>
                </li>
                
                </button>
               
                <button className="w-[65px] h-[38px] border border-blue-700 dark:text-white font-medium rounded text-base text-blue-700"
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </button>
            <li>
              {renderThemeChanger()}
            </li>
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
            </div>

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
                <button className="text-base dark:text-white text-gray-800 font-medium mr-4">
                <li>
                  <Link href="/history">History</Link>
                </li>
                </button>
               
                <li>
                
                  <button className="w-[65px] dark:text-white h-[38px] border border-blue-700 font-medium rounded text-base text-blue-700">
                  <Link  href="/login">Login</Link>
                  </button>
                </li>
                <li className="ml-2">
              {renderThemeChanger()}
            </li>
          
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
            </div>
            {/* mobile view ends  */}
            </>
          )}
        </div>
        </div>
      
    </>
  );
};

export default Navbar;