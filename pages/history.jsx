import React from 'react'
import { useAuth } from '../context/AuthContext'
import Link from "next/link"
import Head from 'next/head'

const history = () => {
    const {user} = useAuth();
    if(user==null){
      return(
        <>
        <Head>
          <title>History | Recipeas</title>
        </Head>
        <div className='font-medium flex justify-center  items-center h-screen'>
          <h1>
          Please <button className='underline text-blue-600 ml-1 mr-1'>
          <Link  href="/login">Login</Link>
          </button>
          first,to view History
          </h1>
        </div>
        </>
      )
    }
    return(
      <>
      <Head>
          <title>History | Recipeas</title>
        </Head>
         <div className='pt-40'>
favourites
         </div>
         </>
    )
}

export default history