'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Header3() {
  const [location, setLocation] = useState('');
  return (
    <div className='bg-gradient-to-r from-red-600 to-red-300 h-48'>
        <div className='p-5'>
            <h2 className='text-3xl font-bold text-white text-center'>
                Over 150,000 hotels and homes across 57 countries
            </h2>
            <div className="flex justify-center my-4 mx-20">
                <input type="text" placeholder='Search...' onChange={(e)=>{setLocation(e.target.value)}} className='text-lg h-10 w-[80%] outline-none px-3 border-r border-gray-400'/>
                {/* <input type="date" placeholder='Search...' className='text-lg h-10 outline-none px-3 border-r border-gray-400 col-span-1'/>
                <input type="date" placeholder='Search...' className='text-lg h-10 outline-none px-3 border-r border-gray-400 col-span-1'/> */}
                <button type="submit" className='h-10 w-[20%] bg-green-500 px-3 py-2 text-white hover:cursor-pointer hover:bg-green-600'>
                  <Link href={'../hotels?location='+location}>Search</Link>
                </button>
            </div>
            <div className="flex mx-20 my-5 font-semibold">
              <button type="submit" className='h8 px-3 py-2 text-white hover:cursor-pointer mr-5'>
                Continue your Search
              </button>
              <button type="submit" className='h8 px-3 py-2 text-white hover:cursor-pointer mr-5 border border-white hover:bg-red-700 rounded-md'>
                Home stay in India hotels
              </button>
            </div>
        </div>      
    </div> 
  )
}

export default Header3
