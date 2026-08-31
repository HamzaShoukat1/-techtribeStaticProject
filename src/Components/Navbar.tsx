import Icon from "../assets/Images/Icon.png"
export default function Navbar() {
    return (
        <div className='w-full  justify-between max-w-360 flex items-center mx-auto mt-2'>
            <div className=' gap-2 top-7.5 left-26.25 flex items-center '>
                <img src={Icon} />
                <h1 className='font-semibold text-2xl w-full max-w-[111.49px]'>
                    Nexcent
                </h1>

            </div>

            <ul className="w-full max-w-147  top-7.5 left-[425.5px] flex gap-12.5 text-[#18191F] ">
                <li>
                    <a href="#home" className="transition-colors duration-200 text-[#18191]  ">Home</a>
                </li>
                <li>
                    <a href="#features" className=" transition-colors duration-200">Service</a>
                </li>
                <li>
                    <a href="#pricing" className="  pb-1">feature</a>
                </li>
                <li>
                    <a href="#contact" className=" transition-colors duration-200">Product</a>
                </li>
                <li>
                    <a href="#Testimonial" className="transition-colors duration-200">Testimonial</a>
                </li>
                <li>
                    <a href="#Testimonial" className="transition-colors duration-200">FAQ</a>
                </li>
            </ul>


            <div className='w-full flex items-center max-w-45.5  top-5.5 left-284.5 gap-3.5'>

                <h2 className='text-[#4CAF4F]'>
                    Login
                </h2>


                <button className='bg-[#4CAF4F] text-center   font-medium text-sm leading-5 text-white border-solid  rounded-md py-2.5 px-5   w-full '>
                    Sign up
                </button>


            </div>




        </div>
    )
}
