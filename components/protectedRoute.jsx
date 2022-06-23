import React from 'react'
import { useAuth as Useauth } from '../context/AuthContext'
import {useRouter as Userouter} from 'next/router'
import { useEffect } from 'react';
const protectedRoute = ({children}) => {
    const {user} = Useauth();
    const router = Userouter();
  
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