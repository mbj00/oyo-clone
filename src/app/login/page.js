'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import {useRouter}  from 'next/navigation';

function page() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState(""); 

    const router = useRouter();

    const[login, setLogin] = useState(false);

    const handleSignup = async ()=>{
        // console.log(name, email, password)
        const res = await axios.post('/api/users/register', {name, email, password});
        if (res?.data){
            console.log(res);
            Cookies.set('user', res.data.token) 
            alert(res.data.msg);
            router.push('/');
        }
    }

    const handleLogin = async ()=>{
        const res = await axios.post("/api/users/login", {email, password});
        if (res?.data){
            console.log(res);
            Cookies.set('user', res.data.token);
            alert(res.data.msg);
            router.push('/');
        }
    }

    const handleToggle = ()=>{
        setLogin(!login);
    }

    return (
        <div>
            <head>
                <title>OYO - Login / Signup</title>
            </head>
            <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-100">
                <div className="w-full absolute top-10 px-20 flex items-center text-white">
                    <h2 className='text-4xl font-extrabold mr-5'>OYO</h2>
                    <p className=' text-xl'>Hotels and Homes across 800+ cities, 24+ countries</p>

                </div>
                <div className='flex justify-center w-9/12 items-center'>
                    <div className='mr-14 text-white'>
                        <p className='font-extrabold text-4xl text-justify'>There's a smarter way to OYO around.</p>
                        <p className='text-mdl mt-5 text-justify'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners. </p>
                    </div>
                    <div className='ml-10 w-10/12 bg-white pb-2 '>
                        <p className='h-8 bg-gradient-to-r from-pink-600 to bg-orange-600 font-semibold text-white flex items-center px-8 p-2'>Sign up and get $500 OYO Money.</p>
                        <div className="px-10">
                            <h3 className='text-3xl font-extrabold my-6'>{ login ? "Log in" : "Sign up"} </h3>
                            <p className='font-semibold m-1'>Please enter your details to continue.</p>

                            {
                                login ? "" : <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} placeholder='Enter your name...' className='outline-none border border-gray-300 px-2 py-1 w-96 h-10 my-3 font-2xl rounded-md'/>
                            }

                            <input type="email" name="" id="" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email...' className='outline-none border border-gray-300 px-2 py-1 w-96 h-10 my-3 font-2xl rounded-md'/>
   
                            <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password...' className='outline-none border border-gray-300 px-2 py-1 w-96 h-10 my-3 font-2xl rounded-md'/>

                            {
                                login ? 
                                <button type="submit" onClick={handleLogin} className='w-96 h-10 text-md font-semibold bg-red-500 hover:bg-red-600 text-white hover:cursor-pointer rounded-md'> Log in </button> :
                                <button type="submit" onClick={handleSignup} className='w-96 h-10 text-md font-semibold bg-red-500 hover:bg-red-600 text-white hover:cursor-pointer rounded-md'> Sign up </button>
                            }
                            <p className='my-3 text-md '>
                            <span>{ login ? "Don't have an Account" : "Already have an account?"}</span>
                            <span onClick={handleToggle} className='ml-1 pb-1 hover:cursor-pointer  text-red-600'> {login ? "Sign up" : "Log in"} </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
