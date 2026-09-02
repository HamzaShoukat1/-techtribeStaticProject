import Icon from "../assets/Images/Icon.png";
import Nexcent from "../assets/Images/Nexcent.png";

export default function Navbar() {
  return (
    <nav className="bg-[#F5F7FA]">
      <div className="max-w-[1216px] h-[84px] mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <img
            src={Icon}
            alt="Nexcent logo"
            className="w-[32px] h-[32px]"
          />

          <img
            src={Nexcent}
            alt="Nexcent"
            className="w-[111.5px] text-white"
          />
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-[50px] text-[#18191F] text-[16px]">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#service">Service</a>
          </li>

          <li>
            <a href="#feature">Feature</a>
          </li>

          <li>
            <a href="#product">Product</a>
          </li>

          <li>
            <a href="#testimonial">Testimonial</a>
          </li>

          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        {/* Auth */}
        <div className="flex items-center gap-[34px]">
          <a
            href="#login"
            className="text-[#4CAF4F] text-[14px]"
          >
            Login
          </a>

          <button
            className="
              w-[90px]
              h-[40px]
              rounded-[6px]
              bg-[#4CAF4F]
              text-white
              text-[14px]
              font-medium
              flex
              items-center
              justify-center
            "
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}