import React from 'react'
import { useAuth } from '../context/AuthContext'
import Link from "next/link"

const history = () => {
    const {user} = useAuth();
    if(user==null){
      return(
        <div className='font-medium flex justify-center  items-center h-screen'>
          <h1>
          Please <button className='underline text-blue-600 ml-1 mr-1'>
          <Link  href="/login">Login</Link>
          </button>
          first,to view History
          </h1>
        </div>
      )
    }
    return(
         <div className='pt-40'>
favourites
         </div>
    )
}

export default history