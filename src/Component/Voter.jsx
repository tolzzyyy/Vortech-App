import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { vec } from '../assets/assets'



const Voter = () => {
  return (
    <div>
      <div className='border-b-2 border-black w-full mt-6 pb-3 pl-2 '>
        <GiHamburgerMenu className='text-green-600 md:text-[35px] ' />
        <h1 className='text-green-600 text-[25px] mt-[10px] md:text-[40px] result-management'>Result Management</h1>
      </div>
      <div className='flex justify-between pt-8 pl-2 md:hidden result-management-div'>
          <h1 className=' text-green-700 text-base font-semibold font-[Poppins]'>Election List</h1>
          <input type="text" className='w-[169px] h-[35px] left-0 top-0  bg-gray-400 rounded-[5px] voter-management-input'/>
          
        </div>

        <div className='flex w-[361px] items-center h-[50px] bg-green-700 rounded-lg mt-3 text-center md:hidden '>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex  ml-40 mt-3 bg-green-700 '/>
        </div>
        

        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
        </div>


        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
        </div>

        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
        </div>

        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
        </div>

        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 md:mr-10 ' />
        </div>

        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden '>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'>1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
        </div>

        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
        </div>

        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden '>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3  bg-green-700'/>
        </div>

        <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3  md:hidden'>
          <p className='text-center text-white text-base font-bold mt-3 ml-3'>1.SUG ELECTION</p>
          <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700'/>
        </div>

      </div>
  )
}

export default Voter
