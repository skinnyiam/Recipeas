import React ,{useState} from 'react'
import { useAuth } from '../context/AuthContext';
import Head from "next/head"
import Link from "next/link"
const Signup = () => {
    const { user,signup} = useAuth();
    console.log(user);
    const [data,setData] = useState({
        email:'',
        password:''
    });

    const handleSignup = async(e) =>{
        e.preventDefault();
         try{
             await signup(data.email,data.password)
         } catch(err){
             console.log(err);
         }
        console.log(data);
    }
  return (
      <>
      <Head>
         <title>SignUp | Reacipeas</title>
      </Head>
      <div className='max-w-[1180px] mx-auto h-screen pt-20 flex justify-center'>
    <div className='bg-gray-400 h-[400px] pt-10 mt-28 w-80 rounded shadow-2xl shadow-slate-800'>
        <h1 className='flex justify-center text-xl text-blue-800 font-medium'>Signup</h1>
        <form  onSubmit={handleSignup}>
            <p className='text-xl text-black-600 ml-12 mt-4'>Enter your email</p>
            <input className='ml-12 w-52 h-8 rounded-md mt-2 p-2 outline-none' type="email" placeholder='ex:JohnDoe@gmail.com' value={data.email} onChange={(e)=>{
                setData({
                    ...data,
                    email:e.target.value,
                })
            }}/>
            <p className='text-xl text-black-600 ml-12 mt-4'>Set Password</p>
            <input className='ml-12 w-52 h-8 rounded-md mt-2 p-2 outline-none' type="password" placeholder='password' value={data.password} onChange={(e)=>{
                setData({
                    ...data,
                    password:e.target.value,
                })
            }}/>
             <div className=' mt-6 flex justify-center '>
            <button type='submit' className='w-20 h-10 bg-cyan-600 rounded-md'>Sign Up</button>
            </div>
            <div className='flex justify-center mt-4'>
            <h1 className='mr-2'>Already have an account ?</h1>
            <div className='text-blue-600 underline'>
            <Link  href="/login">Login</Link>
            </div>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Signup