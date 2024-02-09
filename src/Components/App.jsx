import React, { useEffect, useState } from "react";
import FirstLanding from "./FirstLanding";
import { Route, Routes } from "react-router-dom";
import FourthLanding from "./FourthLanding";
import SecondLanding from "./SecondLanding";
import ThirdLanding from "./ThirdLanding";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import Dashboard from "./Dashboard";

const App = () => {
    const [change, setChange] = useState(false);

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
    <div
      className={`h-screen  w-full ${
        change ? "bg-black text-white " : ""
      }`}
    >
      <button
        onClick={handleChangeBg}
        className=" absolute pt-1 ml-3 -right-[-5px] duration-200 transition-all md:ml-5 mt-3 md:mt-3 z-10 cursor-pointer "
      >
        {!change ? (
          <FaMoon size={25} className=" text-green-400" />
        ) : (
          <IoSunnySharp size={25} className="text-green-400" />
        )}
      </button>
      <Routes>
        <Route path="/firstlanding" exact element={<FirstLanding />} />
        <Route path="/fourthlanding" exact element={<FourthLanding />} />
        <Route path="/secondlanding" exact element={<SecondLanding />} />
        <Route path="/thirdlanding" exact element={<ThirdLanding />} />
        <Route path="/dashboard" exact element={<Dashboard/>} />

      </Routes>
    </div>
  );
};

export default App;
