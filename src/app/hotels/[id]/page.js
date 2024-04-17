'use client'
import Header1 from '@/app/components/Header1'
import Header2 from '@/app/components/Header2'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import Slider from './Slider'
import { IoFastFoodOutline, IoWifi } from "react-icons/io5";
import { TbAirConditioning, TbElevator } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { MdPark } from "react-icons/md";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";
import Footer2 from '../../components/Footer2';
import Footer from '../../components/Footer';


function Page({ params }) {
  const [hotel, setHotel] = useState('');
  let user = Cookies.get('user');
  useEffect(() => {

    let res = fetch("http://localhost:3000/api/hotels/" + params.id)
      .then((response) => {
        response.json().then((result) => {
          console.log(result);
          res = result.hotels;
          setHotel(res);
        })
      });

  }, [])


  return (
    <div>
      {/* <Head>
        {hotel.name}
      </Head> */}
      <Header1 />
      <Header2 />
      <Slider hotel={hotel}/>
      <div className='flex mx-3 my-5'>
        <div className='w-7/12 flex p-2' >
          <div className="w-5/6">
            <h3 className='text-3xl font-bold capitalize '>{hotel.name}</h3>
            <p className='text-gray-500 mb-6'>{hotel.address}, {hotel.location}</p>
            <span className='p-2 text-yellow-500 bg-yellow-100 rounded-md text-sm '>Managed by OYO</span>
            <h6 className='my-6 font-bold text-lg'>Amenities</h6>
            <span className=''>
              <ul className='grid grid-cols-3 '>
                {hotel ? hotel.facilities?.map((i) => {
                  return (
                    <li key={i._id} className='mr-8 mb-3 flex items-center'>
                      <span className=' pr-2 text-lg'>{(i.name == "Food") ? <IoFastFoodOutline /> : (i.name == "AC") ? <TbAirConditioning /> : (i.name == "Elevator") ? <TbElevator /> : (i.name == "Gym") ? <CgGym /> : (i.name == "Park")  ? <MdPark /> : (i.name == "RO")  ? <FaGlassWaterDroplet /> : (i.name == "TV")  ? <PiTelevisionSimple /> : <IoWifi /> }</span>
                      <span className=''>{i.name}</span>
                    </li>
                  )
                }) : ""}
              </ul>
            </span>
            <h6 className='my-6 font-bold text-lg'>About this OYO</h6>
            <p>{hotel.desc}</p>
          </div>
          <div className='w-1/5 flex flex-col items-center'>
            <p className='text-sm font-semibold bg-green-500 rounded-md px-2 py-1 text-white w-10'>{hotel.rating}</p>
            <p className='p-2 text-sm'>({hotel.rating > 4.5 ? "Excellent" : hotel.rating > 4 ? "Very Good" : hotel.rating > 3 ? "Good" : hotel.rating > 2 ? "Average" : "Poor"})</p>
          </div>
        </div>
        <div className='w-5/12 h-[600px] border border-gray-100 shadow-lg m-2'>
          <p className='h-8 bg-gradient-to-r from-pink-600 to bg-orange-600 font-semibold text-white flex items-center px-8 p-2'>Log in to get upto 15% off & other exciting offers.</p>
          <div className='mt-3 mb-1 p-2'>
            <span className='text-2xl font-bold p-2'>&#8377; {hotel?.priceCurrent}</span>
            <span className='text-sm text-gray-400 p-2'><s>&#8377; {hotel?.priceOld}</s></span>
            <span className='m-2 text-sm text-yellow-500 font-bold'>{Math.round((hotel?.priceCurrent * 100) / hotel?.priceOld)}% off</span>
            <p className='text-sm text-gray-400 p-2'>+ taxes and fees &#8377; {Math.round(hotel.priceCurrent * 0.18)}</p>
          </div>
          <div className="flex justify-between my-6 mx-10 border border-gray-100 shadow-md ">
            <input type="date" name="" id="" className='py-2 px-4 border-none outline-none' />
            <span className='py-2'>-</span>
            <input type="date" name="" id="" className='py-2 px-4 border-none outline-none' />
          </div>
          <div className="flex justify-between my-10 mx-10 border border-gray-100 shadow-md ">
            <span className='py-2 font-bold text-sm px-4'>Room Type</span>
            <span className='py-2'>|</span>
            <select name="" id="" className='py-2 px-4 border-none outline-none rounded-xl'>
              <option value="classic">Classic</option>
              <option value="premium">Premium</option>
              <option value="delux">Delux</option>
            </select>
          </div>
          <div className='flex justify-between'>
            <div className='p-5'>
              <p className=''>Total price</p>
              <p className='text-sm text-gray-400'>Including taxes and fees</p>
            </div>
            <div className='p-5'>
              <span className='font-bold '>&#8377; {Math.round((hotel?.priceCurrent) + (hotel?.priceCurrent * 0.18))}</span>
            </div>
          </div>
          <div className="flex justify-center my-8">
            {
              user ?
                <Link href={'/payment/' + hotel._id}>
                  <button className='py-1 px-20 rounded-md bg-green-600 text-white text-md font-semibold'>Continue to Book</button>
                </Link>
                : <button className='py-1 px-20 rounded-md bg-red-600 text-white text-md font-semibold'>
                  <Link href={'/login'}>
                    Log in to Book Now
                  </Link>
                </button>
            }
          </div>
          <div>
            <p className='text-red-600 m-2 text-sm'>Cancellation Policy</p>
            <p className='text-red-600 m-2 text-sm'>Follow safety measures advised by hotel</p>
            <p className='m-2 text-sm'>By proceeding, you agree to our <span className='text-red-600'>Guest policies</span></p>
          </div>



        </div>

      </div>
      {/* <div className=''>
          <h3 className='text-3xl font-bold '>{hotel.name}</h3>
          <p className='text-xl my-5 text-justify'><b>Location :</b> {hotel.location}</p>
          <p className='text-xl my-5 text-justify'>{hotel.desc}</p>
          <button className='w-52 m-2 p-1 rounded-lg bg-green-600 text-white text-lg'>Book Now &#8377;{hotel?.price}/-</button>
          <div className='text-lg my-4'>
            <span className='font-bold'>Facilities :</span>
            <span className=''>
              <ul className='flex '>
                {hotel ? hotel.facilities?.map((i) => {
                  return (
                    <li key={i._id} className='mr-8 mb-3'>
                      <span>{i.img}0</span>
                      <span className='ml-5'>{i.name}</span>
                    </li>
                  )
                }) : ""}
              </ul>
            </span>
            <p className='text-lg'><span className='font-semibold'>Ratings : </span><span>4.5 / 5</span></p>
          </div>
          {
            user ? 
            <Link href={'/payment/'+ hotel._id}>
            <button className='w-52 m-2 p-1 rounded-lg bg-red-600 text-white text-lg my-5'>Book Now</button>
            </Link>
            : <button className='w-52 m-2 p-1 rounded-lg bg-red-600 text-white text-lg my-5'>
              <Link href={'/login'}>
              Log in to Book Now
              </Link>
            </button>
          }
        </div> */}
      <Footer2 />
      <Footer />
    </div>
  )
}

export default Page
