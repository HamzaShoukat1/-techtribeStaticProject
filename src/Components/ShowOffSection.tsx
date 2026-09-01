import React from 'react'
import makeDesign from "../assets/Images/rafiki.png"

export default function ShowOffSection() {
    return (
        <div className='w-full max-w-[1440px]  flex gap-[32px] flex-col md:flex-row justify-between mx-auto items-center px-36'>

            <div className='w-full max-w-[442px] flex-shrink-0'>
                <img src={makeDesign} alt="Design Showcase" className="" />
            </div>

            <div className='w-full max-w-[601px] flex flex-col gap-8'>

                <div className='flex flex-col gap-4'>
                    <h1 className='font-semibold text-[36px] text-[#4D4D4D] leading-[44px]'>
                        The unseen of spending three years at Pixelgrade
                    </h1>
                    <p className='text-[14px] leading-5 text-[#717171]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
                        Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem
                        sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium
                        auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum
                        pulvinar odio.
                    </p>
                </div>

                <button className='bg-[#4CAF4F] text-center py-[14px] px-[32px] font-medium text-sm rounded text-white w-full max-w-[151px] transition-colors hover:bg-[#3E8E41]'>
                    Learn More
                </button>

            </div>

        </div>
    )
}
