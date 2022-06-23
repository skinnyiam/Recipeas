import React from 'react'
import { useAuth } from '../context/AuthContext'
import Link from "next/link"
import Head from 'next/head'

const favourites = () => {
const {user} = useAuth();
    if(user==null){
      return(
        <>
        <Head>
          <title>Favourites | Recipeas</title>
        </Head>
        <div className='font-medium flex justify-center  items-center h-screen'>
          <h1>
          Please <button className='underline text-blue-600 ml-1 mr-1'>
          <Link  href="/login">Login</Link>
          </button>
          first,to view Favourites
          </h1>
        </div>
        </>
      )
    }
    return(
      <>
      <Head>
          <title>Favourites | Recipeas</title>
        </Head>
         <div className='h-screen'>
favourites
         </div>
         </>
    )
  
}

export default favourites