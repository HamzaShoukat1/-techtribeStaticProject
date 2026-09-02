import Hero from "../assets/Images/Illustration.png";
import Navbar from "./Navbar";
import Dots from "../assets/Images/Dot.png";

export default function Section() {
  return (
    <section className="bg-[#F5F7FA] min-h-[680px]">
      
      <Navbar />

      {/* Hero */}
      <div
        className="
          max-w-[1152px]
          mx-auto
          flex
          items-center
          justify-between
          gap-[104px]
          pt-[118px]
        "
      >
        {/* Left */}
        <div className="w-[657px]">
          <h1
            className="
              text-[#4D4D4D]
              font-semibold
              text-[64px]
              leading-[1.25]
            "
          >
            Lessons and insights
            <span className="block text-[#4CAF4F]">
              from 8 years
            </span>
          </h1>

          <p
            className="
              mt-[16px]
              text-[#717171]
              text-[16px]
              leading-[24px]
            "
          >
            Where to grow your business as a photographer:
            site or social media?
          </p>

          <button
            className="
              mt-[32px]
              bg-[#4CAF4F]
              text-white
              text-[16px]
              font-medium
              rounded-[4px]
              w-[128px]
              h-[52px]
            "
          >
            Register
          </button>
        </div>

        {/* Right */}
        <div className="w-[391px] shrink-0">
          <img
            src={Hero}
            alt="Hero illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-[64px]">
        <img
          src={Dots}
          alt="Slider dots"
        />
      </div>
    </section>
  );
}