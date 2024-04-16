import React, { useState } from 'react'
import Image from 'next/image';


function Slider({ hotel }) {
    return(
        <div className='w-[100vw] bg-gray-100'>
            <div className='flex overflow-hidden overflow-x-scroll scroll-smooth'>
            <div className='w-[60vw] h-full flex'>
                <Image src={hotel.banner} width={600} height={450} className=' object-cover pr-1'/>
                {
                    hotel ? hotel?.gallary.map((e)=>{
                        return(
                            <Image src={e} width={600} height={450} className=' object-cover pr-1'/> 
                        )
                    }) : ""
                }
            </div>
            </div>
        </div>
    )
}

export default Slider
