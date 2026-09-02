import Image1 from "../assets/Images/image 18.png"
import Image2 from "../assets/Images/image 19.png"
import Image3 from "../assets/Images/image 20(1).png"
import Content from "../assets/Images/Content.png"


export {
    Image1,
    Image2,
    Image3
}

export default function Docs() {
    return (
        <div className='w-full max-w-[1440px] px-6 py-12 flex   flex-col mx-auto justify-center items-center gap-8'>

            <div className='w-full max-w-[1100px] flex flex-col gap-3 text-center items-center'>
                <h1 className='font-semibold text-[36px] leading-[44px] text-[#4D4D4D]'>
                    Caring is the new marketing
                </h1>

                <h2 className='font-normal text-[16px] w-full max-w-[628px] leading-[24px] text-[#717171]'>
                    The Nexcent blog is the best place to read about the latest membership insights, trends and more.
                    See who's joining the community, read about how our community are increasing their membership income and lot's more.
                </h2>
            </div>

            {/* Card / Image Container */}
            <div className='w-full max-w-[1440px] flex  justify-between px-[144px] gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className='w-full relative max-w-[368px] flex flex-col rounded-lg'>
                    <img src={Image1} />
                    <img className='absolute -bottom-28 cursor-pointer' src={Content} />

                </div>

                <div className='w-full relative max-w-[368px] flex flex-col rounded-lg'>
                    <img src={Image2} />
                    <img className='absolute -bottom-28  cursor-pointer' src={Content} />

                </div>

                <div className='w-full relative max-w-[368px] flex flex-col rounded-lg'>
                    <img src={Image3} />
                    <img className='absolute -bottom-28  cursor-pointer ' src={Content} />

                </div>


            </div>

        </div>
    )
}
