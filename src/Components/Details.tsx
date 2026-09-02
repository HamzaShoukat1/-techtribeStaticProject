import image from "../assets/Images/image 9.png"
import Frame from "../assets/Frame 10.png"
import arrow from "../assets/Images/Right.png"
export default function MakeDesign() {
    return (
        <div className='bg-[#F5F7FA]'>
            <div className='w-full max-w-360 flex px-[144px] py-[32px] justify-between   mx-auto gap-[78px]   mt-5 flex justify-between  flex-col md:flex-row  '>


                <div className='w-full max-w-[326px]   rounded-[8px]'>
                    <img src={image} className='w-full' />


                </div>




                <div className='w-full max-w-[748px] gap-4 flex flex-col  '>

                    <h3 className='font-medium text-[16px] leading-6 text-[#717171]'>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                        eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </h3>

                    <div className='w-full max-w-[748px] gap-2'>
                        <h1 className='font-semibold text-[20px] leading-[28px] text-[#4CAF4F]  '>Tim Smith</h1>

                        <h2 className='text-[#89939E] text-[16px] font-normal' >British Dragon Boat Racing Association</h2>
                        <div className='flex gap-4 w-full max-w-[748px] items-center mt-8'>
                            <img src={Frame} alt="icon" />
                            <h1 className='font-semibold text-[20px] leading-5 text-[#4CAF4F]'>Meet all customers</h1>

                            <span className="w-full max-w-[24px]">
                                <img src={arrow} alt="arrow right" />
                            </span>
                        </div>


                    </div>



                </div>


            </div>
        </div>

    )
}


