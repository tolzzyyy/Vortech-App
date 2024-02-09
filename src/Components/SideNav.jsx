import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
const SideNav = () => {

    const [change, setChange] = useState(false);
    const [open, setOpen] = useState(true);

    useEffect(()=>{

        const checkVisibility = JSON.parse(localStorage.getItem('Visibility'));
        if(checkVisibility){
            setChange(checkVisibility.display)

        }else{
            localStorage.setItem(
                "Visibility",
                JSON.stringify({
                  display: false,
                })
              );
        }
    })

  const handleChangeBg = () => {
    if (change === false) {
      setChange(true);
      localStorage.setItem(
        "Visibility",
        JSON.stringify({
          display: true,
        })
      );
    } else {
      setChange(false);
      localStorage.setItem(
        "Visibility",
        JSON.stringify({
          display: false,
        })
      );
    }
  };
  return (


    <div className={` ${open ? "w-72" :"w-20"} h-screen bg-green-600 text-white  relative`}>
        <div className={` ${open ? "w-72" :"w-20"}  relative`}>
      <FaArrowRight size={19} className={`absolute text-green-600 top-9 px-2 bg-black rounded-full h-7 cursor-pointer -left-[-285px] w-7 ${
        change ? "bg-white text-green-700 " : ""
      }`} onClick={() => setOpen(!open)} />
      
      </div>
    </div>
  )
}

export default SideNav
