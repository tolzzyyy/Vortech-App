import React from 'react';
import background from '../assets/background.png';
import faces from '../assets/faces.png';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

import { useState } from 'react';
// import ThreeDotsSpinner from '../Component/ThreeDotsSpinner';




const SecondLanding = () => {
  const [change, setChange] = useState(false)
  const bgImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

 
 
  return (
    <div className={`h-full md:py-4 overflow-hidden xl:overflow-hidden md:overflow-y-scroll w-full ${change ? 'bg-black text-white' : ''}`} style={bgImage}>

      
      {/* <button onClick={ () =>setSee(!see)} className='float-right z-10 cursor-pointer pr-2'>
     { see ? <FaMoon size={30} className=' text-green-400' /> : <FaLightbulb size={30} className='text-green-400' />},
     {
        see ? <div className='bg-white w-full h-screen'>

        </div>
        : <div className='bg-black  w-full h-screen'></div>
       }                     
      </button> */}
      <div className='px-4 h-full py-4  xl:py-0 xl:h-screen relative md:top-[20px] md:gap-[100px] xl:top-0   top-[6px]  xl:flex mx-auto xl:mx-0 grid grid-cols-1 gap-6  justify-center xl:gap-[170px] items-center'>
                 
      <div>
 
        <img src={faces} className='xl:w-[350px] mx-auto     w-[290px]' alt="" />
      </div>
      <div className='xl:w-6/12 flex flex-col md:h-full xl:h-[320px]   gap-3 md:gap-1 mx-auto xl:mx-0  text-center xl:text-left   xl:items-start '>
        <h1 className='xl:text-[64px] text-[34px] md:text-[46px]  text-[#16DA70] capitalize font-bold'>innovative</h1>
        <p className='xl:text-[25px] text-[18px] md:text-[24px] md:w-[700px] xl:w-full  font-medium'>Vortech's innovative approach to voter engagement starts with the creation of a user profile, 
          an essential step that empowers individuals to make informed decisions during elections.</p>
        <Link to='/thirdlanding' className='w-[135px] mt-1  md:mt-4 h-[49px] mx-auto xl:mx-0 text-[23px] font-bold text-white flex items-center justify-center bg-[#16DA70] px-2 gap-4 rounded-[10px]'><p>Next</p> <div><BsArrowRight size={27} className='pt-1'/></div></Link>
      </div>
      </div>
    </div>
  )
}







  
  
 
    

export default SecondLanding;