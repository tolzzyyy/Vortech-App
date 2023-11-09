import React from 'react'
import Navbar from './Navbar'
import {AiFillPlusCircle} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
 
const VoteConfiguration = () => {
  return (
    <div className='w-full flex'>
        <div className='hidden sm:hidden md:flex lg:w-3/12 shadow-lg h-screen bg-[#0D8343] p-7'>
            <Navbar/>
        </div>
        <div className='w-full  lg:w-9/12 h-screen'>
            <div className='w-full h-screen py-4 px-3 flex flex-col gap-9'>
                <div className='flex flex-col gap-y-7'>
                    <div className='text-[25px] font-semibold text-[#0D8343] flex items-center gap-3'>
                        <HiOutlineMenuAlt2 className='flex md:hidden'/>
                        Vote Configuration
                    </div>
                    <div className='py-3 px-3 bg-[#0D8343] w-[155px] flex gap-x-5 items-center text-white rounded-[8px] cursor-pointer'>
                            Create Pool
                            <AiFillPlusCircle size={20}/>
                    </div>
                    <div className='h-[3px] bg-black rounded-xl'></div>
                </div>
                <div className='w-full h-[500px] flex flex-col gap-7'>
                    <div className='w-full h-[70px] text-[15px] text-white font-semibold bg-[#0D8343] flex items-center px-5 justify-between rounded-[3px]'>
                        SUG SELECTION 
                        <div className='flex justify-between gap-5'>
                            <FiEdit size={20}/>
                            <MdDelete size={20}/>
                        </div>
                    </div>
                    <div className='w-full h-[70px] text-[15px] text-white font-semibold bg-[#0D8343] flex items-center px-5 justify-between rounded-[3px]'>
                        SUG SELECTION 
                        <div className='flex justify-between gap-5'>
                            <FiEdit size={20}/>
                            <MdDelete size={20}/>
                        </div>
                    </div>
                    <div className='w-full h-[70px] text-[15px] text-white font-semibold bg-[#0D8343] flex items-center px-5 justify-between rounded-[3px]'>
                        SUG SELECTION 
                        <div className='flex justify-between gap-5'>
                            <FiEdit size={20}/>
                            <MdDelete size={20}/>
                        </div>
                    </div>
                    <div className='w-full h-[70px] text-[15px] text-white font-semibold bg-[#0D8343] flex items-center px-5 justify-between rounded-[3px]'>
                        SUG SELECTION 
                        <div className='flex justify-between gap-5'>
                            <FiEdit size={20}/>
                            <MdDelete size={20}/>
                        </div>
                    </div>
                    <div className='w-full h-[70px] text-[15px] text-white font-semibold bg-[#0D8343] flex items-center px-5 justify-between rounded-[3px]'>
                        SUG SELECTION 
                        <div className='flex justify-between gap-5'>
                            <FiEdit size={20}/>
                            <MdDelete size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VoteConfiguration
