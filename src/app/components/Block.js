import React from 'react'
import Image from 'next/image'

function Block({title, para}) {
  return (
    <div className='  h-full flex items-center px-5 border-r  border-gray-200 '>
      <div></div>
      <div>
        <h3 className='font-bold text-sm'>{ title }</h3>
        <p className='text-gray-400 text-xs line-clamp-1'>{ para }</p>
      </div>
    </div>
  )
}

export default Block
