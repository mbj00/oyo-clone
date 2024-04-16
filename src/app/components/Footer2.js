import Image from 'next/image';
import React from 'react'
import { FaBuilding } from "react-icons/fa";


function Footer2() {
    return (
        <div className='bg-gray-500'>
            <div className='flex items-center justify-between border-b border-white'>
                <div className='text-2xl font-extrabold p-2 text-white  m-3'>OYO</div>
                <div className='text-xl font-bold text-white p-1 m-3'>Worlds leading chain of hotels and homes</div>
                <div className='text-xl font-bold text-white p-1 m-3'>Join our network and grow your Business</div>
                <div ><button className='bg-white text-gray-600 m-2 p-2 rounded-md flex items-center justify-between'><FaBuilding />List your property</button></div>
            </div>
            <div className='grid grid-cols-3 text-white border-b border-white'>
                <div className='col-span-1'>
                    <p className='m-5 text-sm'>Download OYO app for exciting offers.</p>
                    <div className='flex items-center justify-center'>
                        <Image src={'/google.png'} width={150} height={150} alt="..."  className='m-1'/>
                        <Image src={'/appst.png'} width={150} height={150} alt="..."  className='m-1 rounded-md' />
                    </div>
                </div>
                <div className='col-span-1 border-l border-r border-white'>
                    <div className='grid grid-cols-2 grid-rows-4 mx-3 text-sm'>
                        <p className='p-2'>About Us</p>
                        <p className='p-2'>Careers</p>
                        <p className='p-2'>Blogs</p>
                        <p className='p-2'>Support</p>
                        <p className='p-2'>Official Blog</p>
                        <p className='p-2'>Investor Relations</p>
                        <p className='p-2'>OYO Circle</p>
                        <p className='p-2'>OYO Frames</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='grid grid-cols-2 grid-rows-4 mx-3 text-sm'>
                        <p className='p-2'>Terms and Conditions</p>
                        <p className='p-2'>Guest Policies</p>
                        <p className='p-2'>Privacy Policy</p>
                        <p className='p-2'>Trust Policy</p>
                        <p className='p-2'>Cyber Security</p>
                        <p className='p-2'>Security Awareness</p>
                        <p className='p-2'>Responsible Disclosure</p>
                        <p className='p-2'>Advertise Homes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2
