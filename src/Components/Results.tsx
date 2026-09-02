import Icon4 from "../assets/Images/Icon(4).png"
import Icon5 from "../assets/Images/Icon(5).png"
import Icon6 from "../assets/Images/Icon(6).png"
import Icon7 from "../assets/Images/Icon(7).png"
import RatingData from './RatingData'




const data = [
  {
    id: 1,
    image: Icon4,
    numbers: "2,245,341",
    name: "Members"
  },
  {
    id: 2,
    image: Icon5,
    numbers: " 46,328",
    name: "Clubs"
  },
  {
    id: 3,
    image: Icon6,
    numbers: " 828,867",
    name: "Event Bookings"
  },


  {
    id: 4,
    image: Icon7,
    numbers: "1,926,436",
    name: "Payments",
  },


]

export default function Results() {
  return (
   <div className='bg-[#F5F7FA]'>
     <div className='w-full max-w-[1440px]  justify-between flex items-center gap-3  mx-auto py-16 px-36 flex-col md:flex-row'>


      <div className='w-full max-w-[540px] gap-2'>

        <p className='w-full  max-w-[408px] text-[36px] leading-11 font-semibold text-[#4D4D4D]'>Helping a local  <span className='text-[#4CAF4F]'>business reinvent itself</span></p>

        <h3 className='text-base font-normal leading-6 text-[#18191F]'>We reached here with our hard work and dedication</h3>

      </div>


      <div className='w-full grid grid-cols-2 items-center '>

        {data.map((item) => (
          <RatingData key={item.id}
            Image={item.image}
            numbers={item.numbers}
            name={item.name}
          />
        ))}
      </div>





    </div>
   </div>
  )
}
