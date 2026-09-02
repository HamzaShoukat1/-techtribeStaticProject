import arrow from "../assets/Images/Right.png"


export default function Demo() {
  return (

    <div className="bg-[#F5F7FA] ">
      <div className='w-full max-w-360 py-[32px] gap-[32px] mt-26 flex justify-center flex-col items-center mx-auto text-center '>
        <h1 className='w-full max-w-[887px]  font-semibold text-[64px] leading-[76px] text-[#263238]'>
          Pellentesque suscipit fringilla libero eu.

        </h1>
        <button className='bg-[#4CAF4F] py-[14px] px-[32px] font-medium text-sm rounded text-white w-full max-w-[175px] cursor-pointer hover:bg-[#3E8E41] flex items-center justify-center gap-2'>
          <span>Get a Demo</span>

                            <span className="w-full max-w-[24px] text-white ">
                                        <img src={arrow} alt="arrow right" className="w-4 h-4 object-contain brightness-0 invert" />
                            </span>
        </button>




      </div>
    </div>

  )
}



