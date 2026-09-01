import React from 'react'
import footer from "../assets/Images/Footer.png"
import SocialIcon from "../assets/Images/Social Links.png"

export default function Footer() {
  return (
    <footer className='bg-[#263238] w-full text-[#F5F7FA] py-[64px] px-[40px] md:px-[144px]'>
      <div className='w-full max-w-[1150px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8'>

        <div className='flex flex-col gap-[40px] max-w-[300px]'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-2'>
              <img src={footer} alt="Nexcent Logo" className='h-[24px] object-contain' />
            </div>

            <div className='text-[14px] leading-5 text-[#E8E8E8]/80 font-normal'>
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p className='mt-1'>All rights reserved</p>
            </div>
          </div>

          <div className='w-full max-w-[176px]'>
            <img src={SocialIcon} alt="Social Media Links" className='w-full h-auto object-contain' />
          </div>
        </div>

        <div className='flex flex-wrap md:flex-nowrap justify-between gap-12 md:gap-[80px] w-full md:w-auto'>

          <div className='flex flex-col gap-6 min-w-[140px]'>
            <h4 className='text-[20px] font-semibold text-white leading-7'>Company</h4>
            <ul className='flex flex-col gap-3 text-[14px] text-[#F5F7FA]/80 font-normal'>
              <li><a href="#" className='hover:text-white transition-colors'>About us</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Blog</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Contact us</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Pricing</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Testimonials</a></li>
            </ul>
          </div>

          <div className='flex flex-col gap-6 min-w-[140px]'>
            <h4 className='text-[20px] font-semibold text-white leading-7'>Support</h4>
            <ul className='flex flex-col gap-3 text-[14px] text-[#F5F7FA]/80 font-normal'>
              <li><a href="#" className='hover:text-white transition-colors'>Help center</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Terms of service</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Legal</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Privacy policy</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Status</a></li>
            </ul>
          </div>

          <div className='flex flex-col gap-6 min-w-[240px]'>
            <h4 className='text-[20px] font-semibold text-white leading-7'>Stay up to date</h4>
            <div className='relative w-full max-w-[255px]'>
              <input
                type="email"
                placeholder="Your email address"
                className='w-full bg-[#515B60] text-[#D9DBE1] placeholder-[#D9DBE1]/60 text-[14px] rounded-[8px] py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#4CAF4F]'
              />
              <button className='absolute right-3 top-1/2 -translate-y-1/2 text-[#D9DBE1] hover:text-white transition-colors' aria-label="Subscribe">
                <svg xmlns="http://w3.org" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
