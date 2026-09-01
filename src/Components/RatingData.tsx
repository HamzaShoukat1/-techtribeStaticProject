import React from 'react'

export default function RatingData({ Image, numbers, name }: any) {
    return (
        <div className='flex   w-full py-3 max-w-[540px] gap-10 items-center '>

            <img
                src={Image}
                alt={name}
                className='w-[48px]  object-contain flex-shrink-0'
            />

            <div className='flex flex-col w-full max-w-[191px]'>
                <h1 className='text-[#4D4D4D] font-bold text-[28px] leading-9'>
                    {numbers}
                </h1>
                <h2 className='text-[#717171] text-base font-normal'>
                    {name}
                </h2>
            </div>

        </div>
    )
}
