import React from 'react';
import { login, logo1 } from '../../assets/asset';


const SideLoginNav = () => {
    return (
        <div className=' bg-[#16DA70] h-screen flex justify-around flex-col nav-body'>
            <img src={logo1} alt="" className='pl-[350px] top-[70px] absolute text-center'/>
            <img src={login} alt=""  className='w-[494px] h-[609px]'/>
        </div>
    )
}

export default SideLoginNav