import React from 'react'
import Navbar from './Navbar'
// import img1 from '../Component/img/vortech-tv.png'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaUserCheck, FaUserCog, FaUserAlt } from 'react-icons/fa'
import { LuVote } from 'react-icons/lu'

const Dashboard = () => {
  return (
    <div className='w-full flex'>
        <div className='hidden sm:hidden md:flex lg:w-3/12 shadow-lg h-screen bg-[#0D8343] p-7'>
            <Navbar/>
        </div>
        <div className='w-full  lg:w-9/12 h-screen'>
            <div className='w-full h-screen py-7 px-7 flex flex-col gap-9'>
                <div className='flex flex-col gap-y-5'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-[33px] font-bold text-[#0D8343]'>
                            {/* <HiOutlineMenuAlt2 className='flex md:hidden'/> */}
                            Dashboard
                        </div>
                        <div className='text-[15px] font-medium text-[#6d6d6d]'>
                            Welcome to Vortech: Your Personalized Voting Dashboard
                        </div>
                        <div className='h-[3px] bg-black rounded-xl mt-7'></div>
                    </div>
                    <div className='w-full h-[260px] bg-[#0D8343] rounded-[4px] py-3 px-10 flex justify-between items-center'>
                        <div className='flex flex-col gap-y-9'>
                            <div className='text-[40px] font-bold text-white'>
                                Empower Your Voice
                                <p className='text-[28px] font-medium mt-[-8px]'>Shape Your Future!</p>
                            </div>
                            <button className='font-semibold py-3 px-5 text-[#0D8343] bg-white w-[160px] rounded-[4px] flex items-center justify-between'>
                                Create Pool 
                                <AiFillPlusCircle size={25}/> 
                            </button>
                        </div>
                        <div>
                            <img src="" alt="" className='w-[250px] h-[200px]'/>
                        </div>
                    </div>
                    <div className='w-full h-[150px] flex justify-between gap-x-[150px] items-center'>
                        <div className='w-[420px] h-full bg-[#0D8343] rounded-[4px] px-10 flex justify-between items-center'>
                            <div className='text-white'>
                                <FaUserCheck size={120}/>
                            </div>
                            <div className='text-[13px] font-semibold text-white'>
                                Number of Candidates
                                <p className='text-[50px] font-bold mt-[-2px]'>85</p>
                            </div>
                        </div>
                        <div className='w-[450px] h-full bg-[#0D8343] rounded-[4px] px-10 flex justify-between items-center'>
                            <div className='text-white'>
                                <LuVote size={120}/>
                            </div>
                            <div className='text-[13px] font-semibold text-white'>
                                Number of Voters
                                <p className='text-[50px] font-bold mt-[-2px]'>20,085</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[150px] flex justify-between gap-x-[150px] items-center'>
                        <div className='w-[420px] h-full bg-[#0D8343] rounded-[4px] px-10 flex justify-between items-center'>
                            <div className='text-white'>
                                <FaUserAlt size={110}/>
                            </div>
                            <div className='text-[13px] font-semibold text-white'>
                                Number of Registered Users
                                <p className='text-[50px] font-bold mt-[-2px]'>25,000</p>
                            </div>
                        </div>
                        <div className='w-[450px] h-full bg-[#0D8343] rounded-[4px] px-10 flex justify-between items-center'>
                            <div className='text-white'>
                                <FaUserCog size={120}/>
                            </div>
                            <div className='text-[13px] font-semibold text-white mr-[50px]'>
                                Number of Admins
                                <p className='text-[50px] font-bold mt-[-2px]'>15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard