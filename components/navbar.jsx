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



const navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  // const {systemTheme , theme, setTheme} = useTheme ();
//   const renderThemeChanger = () => {

//     const currentTheme = theme === "system" ? systemTheme : theme ;

//     if(currentTheme ==="light"){
//       return (
//         <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('dark')} />
//       )
//     }

//     else {
//       return (
//         <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('light')} />
//       )
//     }
//  };
  
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
   
      <div className="z-10 backdrop-filter backdrop-blur-lg bg-opacity-0 h-14  w-screen mx-auto bg-white  shadow-xl fixed flex justify-around  border-gray-200">
      
        <div className={styles.heading} >
            <img className="w-10 h-9 m-1 mt-2"  src="/hamburger.png" alt=""/>
          <Link href="/">Recipeas</Link>
        </div>
        <div className="hidden sm:flex">
          {user ? (
            <>
           
              <ul className="flex mt-2">
              <SearchField />
              <button className="text-base text-gray-800 font-medium mr-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                </button>
                <button className="text-base text-gray-800 font-medium mr-4">
                <li>
                  <Link href="/favourites">Favourites</Link>
                </li>
                </button>
                <button className="text-base text-gray-800 font-medium mr-4">
                <li>
                  <Link href="/history">History</Link>
                </li>
                
                </button>
                {/* <LightningBoltIcon  className="h-8 w-8 flex-shrink-0 mr-3"/> */}
                {/* {renderThemeChanger()} */}
                <button className="w-[65px] h-[38px] border border-blue-700 font-medium rounded text-base text-blue-700"
              onClick={() => {
                logout();
                router.push("/login");
              }}
            >
              Logout
            </button>
              </ul>
            
            </>
          ) : (
            <>
             
              <ul className="flex mt-2">
              <SearchField />
              {/* <input className="mt-[2px] h-[35px] mr-2 w-16 border border-blue-700 rounded-lg text-base p-[1px] outline-none " type="text" placeholder="search" /> */}
              <button className="text-base text-gray-800 font-medium mr-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                </button>
                <button className="text-base text-gray-800 font-medium mr-4">
                <li>
                  <Link href="/favourites">Favourites</Link>
                </li>
                </button>
                <button className="text-base text-gray-800 font-medium mr-4">
                <li>
                  <Link href="/history">History</Link>
                </li>
                </button>
                {/* <LightningBoltIcon  className="h-8 w-8 flex-shrink-0 mr-3"/> */}

                {/* {renderThemeChanger()} */}
                <li>
                
                  <button className="w-[65px] h-[38px] border border-blue-700 font-medium rounded text-base text-blue-700">
                  <Link  href="/login">Login</Link>
                  </button>
                </li>
                
          
              </ul>
            </>
          )}
        </div>
        </div>
      
    </>
  );
};

export default navbar;
