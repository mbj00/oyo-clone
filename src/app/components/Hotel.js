import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoFastFoodOutline, IoWifi } from "react-icons/io5";
import { TbAirConditioning, TbElevator } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { MdPark } from "react-icons/md";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";

function Hotel({ e }) {
  console.log(e.gallary)
  return (
    <div className='border-b border-gray-400 w-full mb-5 p-3'>
      <div className="grid grid-cols-9">
        <div className='col-span-4'>
          <Image src={e.banner} alt='hotel' width={600} height={400} className='h-[278px] rounded-sm object-cover' />
        </div>
        {/* at 3.57 */}
        <div className="col-span-1">
          {
            e ? e.gallary?.map((ele)=>{
              return(
                <Image key={ele} src={ele} alt='hotel' width={300} height={200} className='w-20 m-[2px] rounded-sm object-cover' />
              )
            }) : ""
          }
        </div>
        <div className='col-span-4'>
          <h2 className='font-bold text-2xl line-clamp-1 '>{e.name}</h2>
          <p>{e.location}</p>
           <div className='my-3'>
           <span className='text-sm font-semibold bg-green-500 rounded-md px-2 py-1 text-white'>{e.rating}</span>
           <span className='p-2 text-sm'>({e.rating>4.5 ? "Excellent" : e.rating>4 ? "Very Good" : e.rating>3 ? "Good" : e.rating>2 ? "Average" : "Poor"})</span>
           </div>
          <div className='text-lg my-4'>
            {/* <span className='font-bold'>Facilities :</span> */}
            <span className=''>
              <ul className='flex '>
                {e ? e.facilities?.map((i) => {
                  return (
                    <li key={i._id} className='mr-4 mb-3 flex items-center'>
                      <span className=' text-md'>{(i.name == "Food") ? <IoFastFoodOutline /> : (i.name == "AC") ? <TbAirConditioning /> : (i.name == "Elevator") ? <TbElevator /> : (i.name == "Gym") ? <CgGym /> : (i.name == "Park")  ? <MdPark /> : (i.name == "RO")  ? <FaGlassWaterDroplet /> : (i.name == "TV")  ? <PiTelevisionSimple /> : <IoWifi /> }</span>
                      <span className='text-sm p-1'>{i.name}</span>
                    </li>
                  )
                }) : ""}
              </ul>
            </span>
          </div>
          <div className='mt-3 mb-1'>
            <span className='text-2xl font-bold '>&#8377; {e?.priceCurrent}</span>
            <span className='text-sm text-gray-400 p-2'><s>&#8377; {e?.priceOld}</s></span>
            <p className='m-2 text-sm text-yellow-500 font-bold'>{Math.round((e?.priceCurrent*100)/e?.priceOld)}% off</p>
          </div>
          <div className='flex items-center'>
            <button className='w-52 m-2 p-1 rounded-lg bg-green-600 text-white text-lg'>Book Now</button>
            <button className='w-52 m-2 p-1 rounded-lg bg-gray-300 text-lg'>
              <Link href={'/hotels/' + e._id} className='hover: cursor-pointer'>
                View Details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
