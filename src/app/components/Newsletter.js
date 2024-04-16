'use-client'
import React from 'react'
import Image from 'next/image'

function Newsletter() {
  return (
    <div className='flex justify-between items-center my-10 border border-gray-300 px-5 py-2 rounded-md'>
        <div className="flex items-center"> 
            <Image src={"/fire.jpg"} alt='' height={20} width={20}
            className='w-14 h-14 rounded-full mr-5'/>
            <div>
                <p className='font-semibold'>Get access to exclusive Deals</p>
                <p className='font-sm'>Only the best deals reach your inbox</p>
            </div>
        </div> 
    <div className="flex">
        <input type="text" placeholder="e.g. john@email.com" className='px-3 py-1 mr-5 outline-none text-sm border border-gray-400 rounded-md'/>
        <button type="submit" className='w-32 p-2 bg-red-500 text-sm text-white rounded-md hover:bg-red-600 hover:cursor-pointer'>Notify Me</button>
    </div>     
    </div>
  )
}

export default Newsletter
