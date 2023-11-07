import React from 'react';
import { img1, logo } from '../../assets/asset';


const SideRegisterNav = () => {
    return (
        <div className=' bg-[#16DA70] h-screen flex justify-around flex-col'>
            <div className="ml-10 mt-[-100px]">
                <img src={logo} alt="Vortech-Logo" />
            </div>
            <div className='flex justify-end items-end mt-[-150px]'>
                <img src={img1} alt="Image1" className=' w-[610px] h-[330px] ' />
            </div>
        </div>
    )
}

export default SideRegisterNav