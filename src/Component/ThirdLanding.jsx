import React, {  useState } from 'react';
import background2 from '../Assets/background.png';
import progressive from '../Assets/progressive.png';
 import {BsArrowRight} from 'react-icons/bs';
 import ThreeDotsSpinner from '../Component/ThreeDotsSpinner';





const ThirdLanding = () => {
  return (

    <div className='w-full h-screen relative '>
      <img className='w-full h-full object-cover' src={background2} alt="backgroundd" />
        <div className='absolute top-28 md:flex items-center md:grid-cols-2 md:text-3xl md:pl-20'>
          
    <h1 className=' text-[#16da70] font-extrabold pl-3 text-2xl md:mb-[300px] md:mr-[-155px] md:text-3xl md:pb-32'>Acessible</h1>
    <p className='pl-3 pt-3 md:mr-10 md:pb-32 md:text-2xl'>The Vortech voting app offers a versatile<br /> and 
     accessible platform by being available<br />  on both mobile and desktop devices. This<br /> dual accessibility  
     is crucial for enhancing  <br />the user experience and increasing civic <br /> engagement.
   </p>
     <div>
      <img className='py-14 px-2 md:px-9'src={progressive} alt="progressive" />

      <div  className='pl-3  '>
            <button  className='flex  items-center md:flex text-white  bg-[#16da70] rounded-md p-2 font-bold'>Next <BsArrowRight className='pr-1 ml-3'/></button>
              
      </div>
      <div>
            <ThreeDotsSpinner/>
           </div>
     </div>
    
    </div>
    </div>
  );
}

export default ThirdLanding;