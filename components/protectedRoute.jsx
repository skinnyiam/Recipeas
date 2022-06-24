import React from 'react'
import { useAuth  } from '../context/AuthContext'
import {useRouter } from 'next/router'
import { useEffect } from 'react';
const protectedRoute = ({children}) => {
    const {user} = useAuth();
    const router = useRouter();
  
    // useEffect(()=>{
    //     if(!user){
    //         router.push('/login')
    //     }
    // },[router,user])

  return <>
    { children }
    </>
}

export default protectedRoute