'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Filters({price, setPrice, handlePrice, checkedList, setCheckedList}) {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const data = await axios.get('http://localhost:3000/api/facilities');
      console.log(data);
      if (data) {
        setList(data.data.facilities);
        return;
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCheckList = (e)=>{
    let newList = [];
    if(e.target.checked){
      newList.push(e.target.value)
      console.log(newList)
      setCheckedList(e.target.value)
      console.log(checkedList)
      return;
    }
    newList = newList.filter((i) => i !== e.target.value)
    setCheckedList(newList)
    console.log(newList)
  }

  useEffect(() => {
    fetchFacilities();
    return;
  }, [])

  return (
    <div className='bg-gray-100 '>
      <h1 className='text-2xl p-3 bg-gray-200 font-semibold'>Filters</h1>
      <div className='w-full m-2 h-auto py-5 px-2'>
        <label htmlFor="price" className='text-md mr-3 font-semibold'>Max. Price:</label><br />
        <input type="range" className=' h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 ' step={5} name="price" id="" min={400} max={3000} defaultValue={price ? price : 0} onChange={(e) => setPrice(e.target.value)} />
        <span className='p-2'>&#8377; {price} </span>
        <div className=''>
          <button onClick={handlePrice} className='w-32 h-8 cursor-pointer my-2 rounded-md border border-gray-300 '>Apply</button>
        </div>
        {/* <div className='my-10'>
          <h3 className='text-md font-semibold'>Filter by Facilities</h3>
          {
            list?.map((e) => {
              return (
                <p className=' my-2' key={e}>
                  <input type="checkbox" name="checkbox" id="checkbox" value={e} onChange={handleCheckList}  />
                  <label htmlFor="checkbox" className='w-5 h-5 ml-2'> {e} </label>
                </p>
              )
            })
          }
        </div> */}
      </div>

    </div>
  )
}

export default Filters
