import React from 'react';
import { Link } from "react-router-dom";

const RegisterMain = () => {
    return (
        <div className='pl-5  pb-10 pt-8 bg-green-100 pr-[100px] h-screen mainr'>
            <form>
                <div className='flex justify-between '>
                    <h2 className="text-neutral-950 text-2xl font-bold register-text ">Register</h2>
                    <Link to={'/login'}><button className='text-center text-2lg font-bold  mt-1 py-1 px-3 bg-[#02160B] text-[#16DA70] rounded-lg login-btn'>Sign In</button></Link>
                </div>
                <div className='pt-3'>
                    <h4 className='text-black text-2md font-normal register-firstname-text'>First Name</h4>
                    <input type="text" placeholder='First Name' className='w-[579px] h-[35px] bg-white pl-2 register-firstname' />
                    <div className="pt-3">
                        <h4 className='text-black text-2md font-normal register-lastname-text'>Last Name</h4>
                        <input type="text" placeholder='Last Name' className='w-[579px] h-[35px] bg-white pl-2 register-lastname' />
                    </div>

                    <div className="flex justify-between pr-[90px] depmatrcno">
                        <div className="flex flex-col pt-3">
                            <h4 className='text-black text-2md font-normal register-department-text'>Department</h4>
                            <input type="text" placeholder='Department' className='w-[209px] h-[35px] bg-white pl-2 register-department' />
                        </div>
                        <div className="flex flex-col pt-3">
                            <h4 className='text-black text-2md font-normal register-matricnumber-text'>Matric Number</h4>
                            <input type="text" placeholder='Matric Number' className='w-[209px] h-[35px] bg-white pl-2 register-matricnumber' />
                        </div>
                    </div>
                    <div className="pt-3">
                        <h4 className='text-black text-2md font-normal register-email-text'>Email</h4>
                        <input type="text" placeholder='Email' className='w-[579px] h-[35px] bg-white pl-2 register-email' />
                    </div>
                    <div className="flex justify-between pr-[90px] dobphono">
                        <div className="flex flex-col pt-3">
                            <h4 className='text-black text-2md font-normal register-dob-text'>Date of Birth</h4>
                            <input type="date" placeholder='Date of Birth' className='w-[209px] h-[35px] bg-white pl-2 register-dob' />
                        </div>
                        <div className="flex flex-col pt-3">
                            <h4 className='text-black text-2md font-normal register-phonenumber-text'>Phone Number</h4>
                            <input type="text" placeholder='Number' className='w-[209px] h-[35px] bg-white pl-2 register-phonenumber' />
                        </div>
                    </div>
                    <div className="pt-3">
                        <h4 className='text-black text-2md font-normal register-password-text'>Password</h4>
                        <input type="password" placeholder='Password' className='w-[579px] h-[35px] bg-white pl-2 register-password' />
                    </div>
                </div>


                <button className='text-center text-2lg font-bold  mt-10 py-2 px-7 bg-[#02160B] text-[#16DA70] rounded-lg'>Confirm</button>
            </form>

        </div>
    )
}

export default RegisterMain