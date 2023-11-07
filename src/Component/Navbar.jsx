import React from 'react'
import {BiSolidDashboard, BiSolidUserBadge, BiLogOut} from 'react-icons/bi'
import {MdManageAccounts, MdAnalytics, MdOutlineHowToVote} from 'react-icons/md'
import {GiVote} from 'react-icons/gi'
// import {IoInvertMode} from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-between w-full'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <div className='text-[#0D8343] text-[20px] bg-white font-extrabold px-4 py-2 rounded-[4px]'>V</div>
                <div className='text-white text-[25px] font-black'>VORTECH</div>
            </div>
        </div>
        <div className='flex flex-col gap-7 mt-[-170px]'>
            <div className='flex gap-2 items-center text-[22px] text-[#d7d7d7] font-thin'>
                <BiSolidDashboard/>
                Dashboard
            </div>
            <div className='flex gap-2 items-center text-[22px] text-[#d7d7d7] font-thin'>
                <MdManageAccounts/>
                Voter Management
            </div>
            <div className='flex gap-2 items-center text-[22px] text-[#d7d7d7] font-thin'>
                <BiSolidUserBadge/>
                Candidate  Management
            </div>
            <div className='flex gap-2 items-center text-[22px] text-white font-medium'>
                <GiVote/>
                Vote Configuration
            </div>
            <div className='flex gap-2 items-center text-[22px] text-[#d7d7d7] font-thin'>
                <MdAnalytics/>
                Vote Analysis
            </div>
            <div className='flex gap-2 items-center text-[22px] text-[#d7d7d7] font-thin'>
                <MdOutlineHowToVote/>
                Result Management
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-3 text-[20px] text-white font-medium rounded-[4px]'>
                <BiLogOut/>
                LogOut
            </div>
            {/* <div className='px-3 py-2  rounded-full flex items-center'>
                <IoInvertMode size={25}/>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar