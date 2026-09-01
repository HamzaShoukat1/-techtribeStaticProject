import React from 'react'
import teacher from "../assets/Images/pana.png"
export default function MakeDesign() {
    return (
        <div className='w-full max-w-360 flex px-[144px] justify-between items-center mx-auto mt-3 flex-col md:flex-row '>


            <div className='w-full max-w-[441.53px]'>
                <img src={teacher} className='w-full' />


            </div>




            <div className='w-full max-w-[661px] gap-8 items-center'>

                <div className='gap-4 w-full max-w-[601px]'>
                    <h1 className='font-semibold leading-11 text-[#4D4D4D] text-[36px]'>How to design your site footer like we did</h1>
                    <h3 className='text-[#717171] font-normal text-[14px] leading-5'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida</h3>


                </div>

                <button className='bg-[#4CAF4F] text-center py-[14px] px-[32px] mt-3 font-medium text-sm rounded text-white w-full max-w-[151px] transition-colors hover:bg-[#3E8E41]'>
                    Learn More
                </button>

            </div>


        </div>
    )
}
