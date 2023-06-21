import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  const { user, login, googleSignin } = useAuth();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.push("./dashboard");
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };
  const handleGoogle = async (e) => {
    e.preventDefault();
    await googleSignin();
  };
  return (
    <>
      <Head>
        <title>Login | Recipeas</title>
      </Head>
      <div className="max-w-[1180px] mx-auto h-screen pt-20 flex justify-center ">
        <div className="bg-gray-400 h-[440px] pt-10 mt-28 w-80 rounded shadow-2xl shadow-slate-800">
          <h1 className="flex justify-center text-xl text-blue-800 font-medium">
            Login
          </h1>
          <form onSubmit={handleLogin} className="">
            <p className="text-xl text-black-600 ml-12 mt-4">Email</p>
            <input
              className="ml-12 w-52 h-8 rounded-md mt-2 p-2 outline-none"
              type="email"
              placeholder="JohnDoe@gmail.com"
              value={data.email}
              onChange={(e) => {
                setData({
                  ...data,
                  email: e.target.value,
                });
              }}
            />
            <p className="ml-12 mt-4">Password</p>
            <input
              className="ml-12 w-52 h-8 rounded-md mt-2 p-2 outline-none"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => {
                setData({
                  ...data,
                  password: e.target.value,
                });
              }}
            />
            <div className=" mt-6 flex justify-center ">
              <button
                type="submit"
                className="w-20 h-10 bg-cyan-600 rounded-md"
              >
                {" "}
                Login
              </button>
            </div>
            <div className=" mt-6 flex justify-center ">
              <button
                type="button"
                onClick={handleGoogle}
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <h1 className="mr-2">Dont have an account ?</h1>
              <div className="text-blue-600 underline">
                <Link href="/signup">Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
