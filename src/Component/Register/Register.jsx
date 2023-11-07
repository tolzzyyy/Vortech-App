import React from 'react';
import RegisterMain from './RegisterMain';
import SideRegisterNav from './SideRegisterNav';

const Register = () => {
    return (
        <div className='flex flex-row h-full'>
            <div className="w-6/12 side-register-nav">
                <SideRegisterNav />
            </div>
            <div className="w-6/12 register-main">
                <RegisterMain />
            </div>
        </div>
    )
}

export default Register