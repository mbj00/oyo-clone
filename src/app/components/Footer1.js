import React from 'react'
import Image from 'next/image'


function Footer1() {
  return (
    <div className='bg-gray-100 flex'>
        <div>
            <Image src={'/footer.avif'} width={600} height={600} alt='...' className='w-[50vw] h-[35vw] object-cover' />
        </div>
        <div className='flex flex-col justify-center items-center mx-28'>
            <h1 className='text-2xl font-bold p-5'>There's an OYO around. Always.</h1>
            <p className='p-4'>More Destinations. More Ease. More Affordable</p>
            <div className='flex p-4'>
                <div className='p-5'>
                    <h1 className='text-2xl font-bold'>35+</h1>
                    <p>Countries</p>
                </div >
                <div className='p-5'>
                    <h1 className='text-2xl font-bold'>174,000+</h1>
                    <p>Hotels and Homes</p>
                </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2'>            
                <ul className='list-disc marker:text-green-600 marker:text-xl p-3'><li>Indonesia</li></ul>
                <ul className='list-disc marker:text-orange-600 marker:text-xl p-3'><li>Malaysia</li></ul>
                <ul className='list-disc marker:text-yellow-600 marker:text-xl p-3'><li>Denmark</li></ul>
                <ul className='list-disc marker:text-sky-600 marker:text-xl p-3'><li>US</li></ul>
                <ul className='list-disc marker:text-pink-600 marker:text-xl p-3'><li>UK</li></ul>
                <ul className='list-disc marker:text-purple-600 marker:text-xl p-3'> <li>Netherlands</li></ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer1
