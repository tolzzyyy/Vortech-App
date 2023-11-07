import React, {  useState } from 'react';
import background3 from '../Assets/background.png';
import voting from '../Assets/voting.png';
 





const FourthLanding = () => {
  return (

    <div className='w-full h-screen relative '>
      <img className='w-full h-full object-cover' src={background3} alt="backgroundd" />
        <div className='absolute top-0 flex items-center md:justify-center md:px-[400px] flex-col md:items-center md:text-3xl'>
          
    
     <div>
      <img className=' pb-15 px-2 md:px-8 pt-12 md:pt-12 'src={voting} alt="progressive" />
      </div>
      <div className=''>
        <h1 className='flex items-center justify-center text-[#16da70] font-extrabold text-2xl pt-10 md:text-4xl'>
            Security
        </h1>
        <p className='flex items-center justify-center py-8 text-center md:text-center md:text-2xl'>
        Vortech is committed to ensuring that <br />our voting app is both easy and safe,<br /> prioritizing user confidence and <br /> security.
        </p>
      </div>
      <div  className='flex items-center justify-center pb-11'>
         <button  className=' text-white  bg-[#16da70] rounded-md p-3'>Get Started</button>
     </div>
    
    </div>
    </div>
  );
}

export default FourthLanding;