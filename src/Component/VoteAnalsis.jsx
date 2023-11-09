import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";

const VoteAnal = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4   ">
      {/* MENU */}

      <div>
        <FiMenu />
      </div>

      {/* FIRST HEADING */}
      <div className="py-8 px-2">
        <h1 className="border-b-2 border-b-black">Vote Analysis</h1>
      </div>

      <div className="py-2 px-2 flex  items-center justify-between ">
        <p>Voter list</p>

        <div className="flex items-center px-2 rounded-md bg-gray-100">
          <input type="text" className="bg-transparent focus:outline-none" />
          <AiOutlineSearch style={{ color: "#16DA70" }} />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="w-[350px] rounded-md  bg-gray-100 flex px-2 justify-between">
        <p className="p-2 font-bold"> 1. SUG PRESIDENT  </p> 
        <button><BiNotepad  style={{color : "#16DA70" }}/></button>
        </div>

        <div className="w-[350px] rounded-md  bg-gray-100 flex px-2 justify-between">
        <p className="p-2 font-bold"> 1. SUG PRESIDENT  </p> 
        <button><BiNotepad style={{color : "#16DA70" }}/></button>
        </div>
        <div className="w-[350px] rounded-md  bg-gray-100 flex px-2 justify-between">
        <p className="p-2 font-bold"> 1. SUG PRESIDENT  </p> 
        <button><BiNotepad style={{color : "#16DA70" }}/></button>
        </div>
        <div className="w-[350px] rounded-md  bg-gray-100 flex px-2 justify-between">
        <p className="p-2 font-bold"> 1. SUG PRESIDENT  </p> 
        <button><BiNotepad style={{color : "#16DA70" }}/></button>
        </div>
        <div className="w-[350px] rounded-md  bg-gray-100 flex px-2 justify-between">
        <p className="p-2 font-bold"> 1. SUG PRESIDENT  </p> 
        <button><BiNotepad style={{color : "#16DA70" }}/></button>
        </div>
        <div className="w-[350px] rounded-md  bg-gray-100 flex px-2 justify-between">
        <p className="p-2 font-bold"> 1. SUG PRESIDENT  </p> 
        <button><BiNotepad style={{color : "#16DA70" }}/></button>
        </div>
        <div className="w-[350px] rounded-md  bg-gray-100 flex px-2 justify-between">
        <p className="p-2 font-bold"> 1. SUG PRESIDENT  </p> 
        <button><BiNotepad style={{color : "#16DA70" }}/></button>
        </div>
       
      </div>
    </div>
  );
};

export default VoteAnal;