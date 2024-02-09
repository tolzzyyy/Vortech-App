import React from 'react';
import background from '../assets/background.png';
import voting from '../assets/voting.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
 





const FourthLanding = () => {
  const bgImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };
  return (
<div className="h-full md:py-4 overflow-y-scroll flex flex-col items-center md:overflow-y-scroll xl:overflow-hidden w-full" style={bgImage}>
  <div className='flex flex-col py-6 md:py-2 xl:py relative md:top-[20px] xl:top-0  gap-[80px] sm:gap-[50px] md:gap-[250px] xl:gap-5 items-center justify-center'>
    <div>
      <img src={voting} className='xl:w-[350px] sm:w-[370px] md:w-[380px] mx-auto pt-5     w-[340px]' alt="" />
    </div>
    <div className=' w-6/12 flex flex-col md:h-full items-center    gap-3 md:gap-1  xl:mx-0  text-center   '>
      <h1 className='xl:text-[64px] text-[34px] md:text-[46px]  text-[#16DA70] capitalize font-bold'>Security</h1>
      <p className='xl:text-[25px] text-[18px] md:text-[24px] w-[400px] md:w-[460px] xl:w-full  font-medium'>Vortech is committed to ensuring that our voting app
       is both easy and safe, prioritizing user confidence and security.</p>
       <Link to='/fourthlanding' className='w-[135px] mt-1 xl:mb-8  md:mt-4 h-[49px] mx-auto xl:mx-0 text-[23px] font-bold text-white flex items-center justify-center bg-[#16DA70] px-2 gap-4 rounded-[10px]'><p>Next</p> <div><BsArrowRight size={27} className='pt-1'/></div></Link>
    </div>
  </div>

</div>
  );
}

export default FourthLanding;