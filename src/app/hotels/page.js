'use client'
import React, { useEffect, useState } from 'react'
import Hotel from '../components/Hotel'
import Header1 from '../components/Header1'
import Filters from '../components/Filters';
import axios from 'axios';
import Footer2 from '../components/Footer2';
import Footer from '../components/Footer';

function page(req) {
  const [hotels, setHotels] = useState('');
  const [price, setPrice] = useState(5000);
  const [checkedList, setCheckedList] = useState([]);

  const handlePrice = () => {
    try {
      let res = fetch("http://localhost:3000/api/facilities/range?val=" + price)
      .then((response) => {
        response.json().then((result) => {
          // console.log(result);
          res = result.hotels ? result.hotels : result.allHotels;
          setHotels(res);
        })
      });
    } catch (error) {
      alert("Server connection error")
    }
  }

  // const handleCheckList = () => {
  //   let newArr = [];
  //   let res = fetch("http://localhost:3000/api/facilities/search?val=" + checkedList)
  //     .then((response) => {
  //       response.json().then((result) => {
  //         // console.log(result);
  //         res = result;
  //         newArr = res.hotels;
  //         setHotels(newArr);

  //       })
  //     });
  // }

  useEffect(() => {
    let data = fetch("http://localhost:3000/api/hotels?location=" + req.searchParams.location)
      .then((response) => {
        response.json().then((result) => {
          // console.log(result);
          data = result.hotels ? result.hotels : result.allHotels;
          setHotels(data)
        })
      });

    // if (checkedList) {
    //   console.log(checkedList)
    // }

  }, [])


  return (
    <div>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Filters
            price={price} setPrice={setPrice} handlePrice={handlePrice}
            checkedList={checkedList} setCheckedList={setCheckedList}
          />
        </div>
        <div className='col-span-10'>
          {
            hotels && hotels.map((e) => {
              return (
                <div className=' m-5' key={e._id}>
                  <Hotel e={e} />
                </div>
              )
            })
          }
        </div>

      </div>
      <Footer2 />
      <Footer />
    </div>
  )
}



export default page
