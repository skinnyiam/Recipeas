import React,{useState} from 'react'
import { useAuth as Useauth} from '../context/AuthContext'
import {useRouter} from 'next/router'
import Head from "next/head"
import Link from "next/link"

const login = () => {
    const {user,login} = Useauth();
    const router = useRouter();
    const [data,setData] = useState({
        email:'',
        password:''
    })

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            await login(data.email,data.password)
            router.push('./dashboard')
        } catch(err){
            console.log(err);
        }
       console.log(data);
    }
  return (
      <>
      <Head>
          <title>Login | Recipeas</title>
      </Head>
    <div className='max-w-[1180px] mx-auto h-screen pt-20 flex justify-center '>
        <div className='bg-gray-400 h-[400px] pt-10 mt-28 w-80 rounded shadow-2xl shadow-slate-800'>
        <h1 className='flex justify-center text-xl text-blue-800 font-medium'>Login</h1>
        <form  onSubmit={handleLogin} className="">
            <p className='text-xl text-black-600 ml-12 mt-4'>Email</p>
            <input className='ml-12 w-52 h-8 rounded-md mt-2 p-2 outline-none' type="email" placeholder='JohnDoe@gmail.com' value={data.email} onChange={(e)=>{
                setData({
                    ...data,
                    email:e.target.value,
                })
            }}/>
            <p className='ml-12 mt-4'>Password</p>
            <input className='ml-12 w-52 h-8 rounded-md mt-2 p-2 outline-none' type="password" placeholder='Password' value={data.password} onChange={(e)=>{
                setData({
                    ...data,
                    password:e.target.value,
                })
            }}/>
            <div className=' mt-6 flex justify-center '>
            <button type='submit' className='w-20 h-10 bg-cyan-600 rounded-md'> Login</button>
            </div>
            <div className='flex justify-center mt-4'>
            <h1 className='mr-2'>Dont't have an account ?</h1>
            <div className='text-blue-600 underline'>
            <Link  href="/signup">Sign Up</Link>
            </div>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default login