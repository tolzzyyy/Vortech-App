import React from 'react'
import background from "../assets/background.png";
import Progressive from '../assets/progressive.png'
import { Link } from 'react-router-dom';
import { MdArrowForward } from "react-icons/md";
import { BsArrowRight } from 'react-icons/bs';

const ThirdLanding = () => {
  const bgImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div className="h-full md:py-4 overflow-hidden xl:overflow-hidden md:overflow-y-scroll w-full" style={bgImage}>
      <div className='px-4 h-full py-4  xl:py-0 xl:h-screen relative md:top-[20px] md:gap-[100px] xl:top-0   top-[6px]  xl:flex mx-auto xl:mx-0 grid grid-cols-1 gap-6  justify-center xl:gap-[170px] items-center'>
        <div>
          <img className='xl:w-[400px] sm:w-[370px] md:w-[400px] mx-auto     w-[370px]' src={Progressive} alt="" />
        </div>
        <div className='xl:w-6/12 flex flex-col md:h-full xl:h-[320px]   gap-3 md:gap-1 mx-auto xl:mx-0  text-center xl:text-left   xl:items-start '>
         <h1 className='xl:text-[64px] text-[34px] md:text-[46px]  text-[#16DA70] capitalize font-bold'>Accessible</h1>
         <p className='xl:text-[25px] text-[18px] md:text-[24px] md:w-[700px] xl:w-full  font-medium'>The Vortech voting app offers a versatile and accessible platform by being available
           on both mobile and desktop devices. This dual accessibility is crucial for enhancing the user
            experience and increasing civic engagement.

         </p>
         <Link to='/fourthlanding' className='w-[135px] mt-1  md:mt-4 h-[49px] mx-auto xl:mx-0 text-[23px] font-bold text-white flex items-center justify-center bg-[#16DA70] px-2 gap-4 rounded-[10px]'><p>Next</p> <div><BsArrowRight size={27} className='pt-1'/></div></Link>
        </div>
      </div>
    
      
    </div>
  )
}

export default ThirdLanding
