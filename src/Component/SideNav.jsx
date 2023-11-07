import React from 'react'
import { log } from '../assets/assets'
import {def} from '../assets/assets'
import {vote} from '../assets/assets'
import { solid } from '../assets/assets'
import {carbon} from '../assets/assets'
import {round} from '../assets/assets'
import {ant} from '../assets/assets'
import {solar} from '../assets/assets'
import {eos} from '../assets/assets'

const SideNav = () => {
  return (
    <div  className='w-[315px] bg-green-700 h-screen   fixed'>
      <div>
      <img src={log} alt="" className='pt-10 text-[20px] ml-6 mb-10'/>


      <div className='text-[] ml-6 flex mt-5 items-center'>
          <img src={def} alt="" />
          <p className='text-white pl-2'>Dashboard</p>
      </div>

      </div>
      
  <div className='ml-6 flex mt-5 items-center'>
    <img src={vote} alt="" />
    <p className='text-white pl-2'>Vote Management</p>
  </div>


  <div className='ml-6 flex mt-5 items-center'>
    <img src={solid} alt="" />
    <p className='text-white pl-2'>Candidate Mnagement</p>
  </div>

      <div className='ml-6 flex mt-5 items-center'>
        <img src={eos} alt="" />
        <p className='text-white pl-2'>Vote configuration</p>
      </div>

    <div className='ml-6 flex mt-5 items-center'>
      <img src={carbon} alt="" />
      <p className='text-white pl-2' >Vote Analysis</p>
    </div>

    <div className='ml-6 flex mt-5 items-center'>
      <img src={round} alt="" />
      <p className='text-white pl-2'>Result Management</p>
    </div>

    <div className='ml-6 flex mt-5 items-center'>
      <img src={ant} alt="" />
      <p className='text-white pl-2'>Settings</p>
    </div>

    <div className='ml-6 flex mt-20 items-center'>
      <img src={solar} alt="" />
      <p className='text-white pl-2'>Logout</p>
    </div>


    </div>
  
  )
}

export default SideNav
