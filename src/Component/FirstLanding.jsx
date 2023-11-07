import React from 'react';
import background from '../Assets/background.png';
import logo from '../Assets/logo1.png'

const FirstLanding = () => {
  return (
    <div className='w-100% h-screen relative'>
       <img className='w-full h-full object-cover' src={background} alt="background" />
       <div className='flex flex-col items-center absolute h-full w-full justify-center top-0'>
        <img className="pb-[150px] flex pl-4 w-50% h-50%" src={logo} alt="logo" />
        

        <div className='pl-3'>
          <p className='text-xl sm:text-xl md:text-4xl text-center'>Empowering Your Voice With Vortech</p> 
          <p className='text-xl sm:text-xl sm:mr-10 md:text-4xl text-center'>Your Voice, Your Future.</p>

        </div>
       </div>
    </div>
  );
}

export default FirstLanding;
