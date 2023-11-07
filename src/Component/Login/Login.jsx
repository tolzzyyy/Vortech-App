import React from 'react'
import LoginMain from './LoginMain'
import SideLoginNav from './SideLoginNav'

const Login = () => {
    return (
        <div className='flex'>
            <div className="w-6/12 login-main">
                <LoginMain />
            </div>
            <div className="w-6/12 side-login-nav">
                <SideLoginNav/>
            </div>
        </div>
    )
}

export default Login