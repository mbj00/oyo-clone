import React from 'react'

function Header2() {
    const list = [
        {
            name : "Banglore"
        },
        {
            name : "Kolkata"
        },
        {
            name : "Mumbai"
        },
        {
            name : "Delhi"
        },
        {
            name : "Chennai"
        },
    ]
  return (
    <div className='flex px-10 py-1 bg-gray-200 justify-between'>
      {
        list.map((e)=>{
            return(
                <span key={e.name}>{e.name}</span>
            )
        })
      }
    </div>
  )
}

export default Header2
