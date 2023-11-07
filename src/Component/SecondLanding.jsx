import React, { useEffect, useState } from 'react';
import background1 from '../Assets/background.png';
import faces from '../Assets/faces.png';
import {BsArrowRight} from 'react-icons/bs';
import ThreeDotsSpinner from '../Component/ThreeDotsSpinner';




const SecondLanding = () => {
  return (
    <div className='w-full h-screen relative md:justify-center'>
      <img className='w-full h-full object-cover' src={background1} alt="backgroundd" />
      <div className='grid flex-col items-center absolute justify-center h-full w-full top-0  md:grid-cols-2'>
        <img className='h-[300px] w-[300px] p-6 md:w-[600px] md:h-[600px] md:mx-6' src={faces}alt="faces" />
        <div>
            <h1 className=' text-[#16da70] font-extrabold p-6 py-7 text-2xl md:text-4xl'>Innovative</h1>
            <p className='text-xl  md:text-2xl pl-6 md:text-left'>Vortech's innovative approach to voter<br /> engagement  starts with the creation of  a  <br />user profile, an essential step that empowers <br /> individuals to make  informed <br /> decisions during elections.</p>
            <div  className='p-6  '>
            <button  className='flex  items-center justify-between text-white  bg-[#16da70] rounded-md p-2 font-extrabold'>Next <BsArrowRight size={30} className='pr-1 ml-3 font-extrabold'/></button>
             
         
         
            
             
            </div>
               
           <div>
            <ThreeDotsSpinner/>
           </div>
        </div>
      </div>
    </div>
  );
}






  
  
 
    

export default SecondLanding;