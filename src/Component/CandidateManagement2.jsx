import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiPlus } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Maskgroup from '../Assets/Maskgroup.png'

const Body = () => {
   
const bgImage = {
  backgroundImage: `url(${Maskgroup})`,
  backgroundSize: 'cover',
  backgroundPosition:'center',
 };
  return (
    <div className="pl-3 h-screen">
      <div className="md:w-12/12  h-screen md:overflow-hidden"  style={bgImage}>
        <div className="md:w-full mb-2 gap-5">
          <h1 className="text-[25px] text-[#0D8343] pt-[20px] font-bold">
            Candidate Management
          </h1>
          <div className="md:bg-[#86C3A2] mt-2 mb-4 gap-[1px] flex items-center justify-between px-3 bg-[#86C3A2] w-[209px] rounded-[12px] h-[80px] md:flex md:px-5 md:items-center md:justify-between md:rounded-[10px] md:mb-[10px] md:w-[240px] md:mt-5 md:h-[90px]">
            <div>
              <h1 className="text-[20px] text-white font-bold md:block hidden">
                Create Profile
              </h1>
              <h1 className="md:hidden font-bold text-white text-[20px] ">
                Add Candidates
              </h1>
            </div>
          
            <div className="w-[25px] flex items-center mt-1 justify-center h-[25px] rounded-full bg-white">
            
              <Link to='/page' className='flex items-center'>  <HiPlus size={23} color="#86C3A2" /></Link>
            
            </div>
          </div>
          <div className="border-b-[2px] w-full border-black"></div>
        </div>
        <div className="pt-4 flex md:flex md:justify-between items-center justify-center gap-5 md:gap-[100px]">
          <h1 className="text-[20px] pr-6 md:text-[23] items-center font-bold">Candidates List</h1>
          <div className="relative md-pr-4 pr-2">
            <input
              type="search"
              placeholder="Search..."
              className="rounded-[5px] pl-3 placeholder:text-white  w-[178px] h-[30px] md:bg-[#8DC8A8] bg-[#86C3A2]"
            />
            <div className="absolute top-[5px] mb-4 right-0 mr-4">
              <AiOutlineSearch className="text-white " size={23} />
            </div>
          </div>
        </div>
        <div className="w-full md:flex flex md:flex-col">
          <div>
            <div className="md:flex">
              <div className="md:flex pl-1  flex items-center justify-center gap-3 md:gap-5 md:items-center md:justify center mt-3 md:mt-2">
                <div className="md:w-[180px] flex items-center text-white w-[120px] h-[120px] justify-center rounded-[30px] md:rounded-[23px] bg-[#16DA70] md:h-[180px]">
                  <FaUser className="md:text-[80px] text-[60px]" />
                </div>
                <div className="md:mt-[50px]  space-y-[5px]  md:space-y-3">
                  <h1 className="md:text-[23px] font-bold">Tola Baller</h1>
                  <h1 className="md:text-[23px] font-bold">21/21/0890</h1>
                  <h1 className="md:text-[23px] font-bold">SUG President</h1>
                </div>
              </div>
              <div className="md:flex pl-1 flex items-center gap-3 justify-center md:pl-[50px] md:gap-5 md:items-center mt-5 md:justify center md:mt-2">
                <div className="md:w-[180px] w-[120px] h-[120px] rounded-[30px] md:rounded-[23px] text-white flex items-center justify-center bg-[#16DA70] md:h-[180px]">
                  <FaUser  className="md:text-[80px] text-[60px]" />
                </div>
                <div className="md:mt-[50px] space-y-[5px] md:space-y-3">
                  <h1 className="md:text-[23px] font-bold">Tola Baller</h1>
                  <h1 className="md:text-[23px] font-bold">21/21/0890</h1>
                  <h1 className="md:text-[23px] font-bold">SUG President</h1>
                </div>
              </div>
            </div>
            <div>
              <div className="md:flex">
                <div className="md:flex pl-1 flex items-center gap-3 justify-center md:gap-5 md:items-center md:justify center mt-5 md:mt-3">
                  <div className="md:w-[180px] w-[120px] h-[120px] rounded-[30px]  md:rounded-[23px] flex text-white items-center justify-center bg-[#16DA70] md:h-[180px]">
                    <FaUser  className="md:text-[80px] text-[60px]" />
                  </div>
                  <div className="md:mt-[50px] space-y-[5px] md:space-y-3">
                    <h1 className="md:text-[23px] font-bold">Tola Baller</h1>
                    <h1 className="md:text-[23px] font-bold">21/21/0890</h1>
                    <h1 className="md:text-[23px] font-bold">SUG President</h1>
                  </div>
                </div>
                <div className="md:flex pl-1 flex items-center gap-3 justify-center md:pl-[50px] md:gap-5 md:items-center mt-5 md:justify center md:mt-3">
                  <div className="md:w-[180px] w-[120px] h-[120px] flex items-center rounded-[30px] justify-center text-white md:rounded-[23px] bg-[#16DA70] md:h-[180px]">
                    <FaUser  className="md:text-[80px] text-[60px]" />
                  </div>
                  <div className="md:mt-[50px] space-y-[5px] md:space-y-3">
                    <h1 className="md:text-[23px] font-bold">Tola Baller</h1>
                    <h1 className="md:text-[23px] font-bold">21/21/0890</h1>
                    <h1 className="md:text-[23px] font-bold">SUG President</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
