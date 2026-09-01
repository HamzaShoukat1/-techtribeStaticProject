import React from 'react'
import cleint from "../assets/Logo.png"
import client1 from "../assets/Images/Logo(1).png"
import client2 from "../assets/Images/Logo(2).png"

import client3 from "../assets/Images/Logo(3).png"

import client4 from "../assets/Images/Logo(4).png"

import client5 from "../assets/Images/Logo(5).png"
import client6 from "../assets/Images/Logo(6).png"

export {
    cleint,
    client1,
    client2,
    client3,
    client4,
    client5,
    client6
}


export default function OurClient() {
    return (
        <div className='w-full max-w-360 px-36 gap-4  flex flex-col justify-center items-center mx-auto mt-4'>

          <div className='w-full max-w-275 gap-2'>
              <h1 className='font-semibold w-full max-w-275 leading-11  text-[36px] text-center  text-[#4D4D4D] '>Our Clients</h1>
            <p className='font-normal w-full max-w-275  text-center  text-[#717171] text-[16px] leading-6'>We have been working with some Fortune 500+ clients</p>
          </div>



            <div className='w-full max-w-6xl flex  justify-between mt-3'>

                    <img src={cleint}  className=''/>
                    <img src={client1} />
                    <img src={client2} />
                    <img src={client3} />
                    <img src={client4} />
                    <img src={client5} />
                    <img src={client6} />

                </div>








        </div>
    )
}

