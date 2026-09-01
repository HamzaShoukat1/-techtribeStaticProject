import Hero from "../assets/Images/Illustration.png"
import Navbar from "./Navbar"
import Dots from "../assets/Images/Dot.png"


export default function Section() {
    return (
      <>
      <div className="bg-[#F5F7FA] pb-2">
      <Navbar />

          <div className='w-full max-w-360 flex items-center mx-auto px-36 py-24 justify-center gap-26 flex-col md:flex-row'>

            <div className='flex flex-col w-full max-w-164.25 gap-8 '>
                <div className='max-w-164.25'>
                    <p className='text-[#4D4D4D] font-semibold text-[64px] f leading-16'>  Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span> </p>

                    <h3 className='mt-3 mb-4 text-[#717171]'>
                        Where to grow your business as a photographer: site or social media?
                    </h3>


                    <button className='bg-[#4CAF4F] text-center    font-medium text-sm leading-5 text-white border-solid  rounded py-2.5 px-5  pt-3.5 '>
                        Register
                    </button>



                </div>

            </div>


            <div className='w-full max-w-97.75'>
                <img src={Hero} />

            </div>





        </div>
          <div className="flex items-center justify-center">
                <img src={Dots} />
            </div>
      </div>

      </>
      
        


    )
}



          