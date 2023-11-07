import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';

const Page = ({ selected, setSelected, sorted, setSorted }) => {
  const [isCurrent, setIsCurrent] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const options = ['SUG PRESIDENT', 'VICE PRESIDENT', 'DIRECTOR OF SOCIALS', 'ASSISTANT GENERAL SECRETARY', 'WELFARE OFFICER', 'DIRECTOR OF TRANSPORTATION', 'DIRECTOR OF SPORTS', 'FINANCIAL SECRETARY', 'TREASURER'];
  const department = ['COMPUTER SCIENCE', 'MICROBIOLOGY', 'MECHANICAL ENGINEERING'];

  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='mt-5 pb-4 border-b-2 border-black'>
        <h1 className='text-3xl text-green-500 pl-2 font-bold'>Candidate Management</h1>
      </div>
      <div className='mt-3'>
        <h1 className='text-xl pl-2 text-green-700 font-bold'>Create Candidate Profile</h1>
        <div className='w-60 md-w-60 flex justify-center items-center h-48 text-white ml-4 mt-3 rounded-2xl bg-green-500'>
          <FaUser className='text-6xl' />
        </div>
        <div className='ml-4 flex h-full flex-col mt-2'>
          <div className='space-y-2'>
            <p>First Name</p>
            <input
              placeholder='Name'
              className='md:w-[900px] w-[350px] rounded-lg h-12 bg-green-500 text-black placeholder-green-800 pl-5 font-bold'
              type='text'
            />
          </div>
          <div className='mt-2 space-y-2'>
            <p>Last Name</p>
            <input
              placeholder='Name'
              className='md:w-[900px] w-[350px] rounded-lg h-12 bg-green-500 text-black placeholder-green-800 pl-5 font-bold'
              type='text'
            />
          </div>
          <div className='mt-2 space-y-2'>
            <p>Post Of Office</p>
            <div className='relative'>
              <div
                onClick={() => setIsActive(!isActive)}
                className={`md:w-[900px] w-[350px] font-bold select-none text-green-800 bg-green-500 px-5 flex justify-between items-center h-12  transition-opacity transition-duration-300 ${
                  isActive ? 'rounded-t-lg' : 'rounded-lg'
                }`}
              >
                {selected} <MdOutlineArrowDropDownCircle size={20} />
              </div>
              {isActive && (
                <div
                  className={`w-[350px] md:w-[900px] text-green-800 cursor-pointer transition-duration-2 bg-green-500 rounded-lg ${
                    isActive ? 'h-[360px] opacity-100' : 'h-0 opacity-0'
                  }`}
                >
                  {options.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSelected(option);
                        setIsActive(false);
                      }}
                      className='py-2 px-5 hover:text-white font-bold'
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='mt-3 md:flex  w-[700px] gap-5'>
            <div className='flex flex-col  md:gap-1 '>
              <h1 className='text-black'>Department</h1>
            
                <div onClick={() => setIsCurrent(!isCurrent)} className='md:w-[400px] w-[350px] text-green-800 py-3 items-center justify-between flex px-4 font-bold rounded-lg bg-green-500'>
                  {sorted} <MdOutlineArrowDropDownCircle size={20} />
                </div>
                {isCurrent && (
                  <div className={`w-[350px] md:w-[400px] text-green-800 cursor-pointer transition-duration-2 bg-green-500 rounded-lg  overflow-y-auto z-50`}>
                    {department.map((tola) => (
                      <div
                        key={tola}
                        onClick={() => {
                          setSorted(tola);
                          setIsCurrent(false);
                        }}
                        className='py-2 px-5 hover:text-white font-bold'
                      >
                        {tola}
                      </div>
                    ))}
                  </div>
                )}
              

            </div>


            <div className='flex flex-col ml-20  md:relative gap-1'>
              <h1>Matric Number</h1>
              <input className='md:w-[400px] w-[350px]  rounded-lg py-3 bg-green-500' type="text"></input>
            </div>        
          </div>
          <div className='flex flex-col mt-3 gap-1'>
            <h1>Email Address</h1>
          <input type="email" placeholder=' Email' className='mt-2 md:w-[900px] w-[350px] text-white rounded-lg h-12 bg-green-500  placeholder-green-800 pl-5 font-bold'/>
          </div>
          <div className='mt-3 md:flex grid  w-full gap-5 justify-between items-center'>
          <div className='flex flex-col gap-1'>
              <h1>Date Of Birth</h1>
              <input className='md:w-[400px] w-[350px] mr-[80px] rounded-lg h-[50px] bg-green-500' type="date"></input>
            </div>
            <div className='flex flex-col  gap-1'>
              <h1>Phone Number</h1>
              <input className='md:w-[400px] w-[350px] mr-[82px] pl-3 rounded-lg h-[50px] bg-green-500' type="text"></input>
            </div>
            </div>
            <div className='flex flex-col   gap-1'>
              <h1 className='mt-3'>Manifesto</h1>
              <textarea className='md:w-[900px] w-[350px] pl-5 h-[200px] rounded-lg  bg-green-500' name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <button className='mt-4 w-[150px] ml-[770px] rounded-lg p-0 h-[50px] bg-green-500 text-white'>Create Candidate</button>
      
      </div>
    </div>
  );
};

export default Page;
