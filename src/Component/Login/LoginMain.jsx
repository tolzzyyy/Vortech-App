import React from 'react'
import { Link } from 'react-router-dom'

const LoginMain = () => {
    return (

        <div className='pl-8 pt-8 bg-green-100 pr-[100px] h-screen mainl'>
            <form>
                <div className='flex justify-between'>
                    <h2 className="text-neutral-950 text-2xl font-bold login-text">Login</h2>
                    <Link to={'/register'}><button className='text-center text-2lg font-bold  mt-1 py-1 px-3 bg-[#02160B] text-[#16DA70] rounded-lg register-btn'>Register</button></Link>
                </div>
                <div className="flex flex-col mt-[125px]">
                    <div className='flex flex-col justify-around'>
                        <div className="pt-3">
                            <h4 className='text-black text-2md font-normal login-email-text'>Email</h4>
                            <input type="text" placeholder='Email' className='w-[579px] h-[40px] bg-white pl-2 login-email' />
                        </div>
                        <div className="pt-3">
                            <h4 className='text-black text-2md font-normal login-password-text'>Password</h4>
                            <input type="password" placeholder='Password' className='w-[579px] h-[40px] bg-white pl-2 login-password' />
                        </div>
                    </div>
                </div>
                <button className='text-center text-2lg font-bold  mt-10 py-2 px-7 bg-[#02160B] text-[#16DA70] rounded-lg'>Confirm</button>
            </form>
        </div>
    )
}

export default LoginMain