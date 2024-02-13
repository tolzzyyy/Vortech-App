import React, { useEffect, useState } from "react";
import background from "../assets/background.png";
import { FaArrowRight } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaVoteYea } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlineConstruction } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

// Import your components here
import Candidates from "./Candidates";
import Voters from "./Voters";
import Analysis from "./Analysis";
import Configuration from "./Configuration";
import Results from "./Results";
import Settings from "./Settings";
import LogOut from "./LogOut";
import Home from "./Home";

const Dashboard = () => {
  const menus = [
        { title: 'Dashboard', icon: <MdDashboard size={27} />, path: '/' },
        { title: 'Candidates', icon: <MdManageAccounts size={27} />, path: '/candidates' },
        { title: 'Voters', icon: <FaVoteYea size={27} />, path: '/voters', gap:true },
        { title: 'Analysis', icon: <IoMdAnalytics size={27} />, path: '/analysis' },
        { title: 'Configuration', icon: <MdOutlineConstruction className='text-white' color='white' size={27} />, path: '/configuration' },
        { title: 'Results', icon: <GiProgression size={27} />, path: '/results' },
        { title: 'Settings', icon: <IoMdSettings size={27} />, path: '/settings', gap:true },
        { title: 'LogOut', icon: <CgLogOut size={27} />, path: '/logout' }
    ];


  const bgImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [change, setChange] = useState(false);
  const [open, setOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  useEffect(() => {
    const checkVisibility = JSON.parse(localStorage.getItem("Visibility"));
    if (checkVisibility) {
      setChange(checkVisibility.display);
    } else {
      localStorage.setItem(
        "Visibility",
        JSON.stringify({
          display: false,
        })
      );
      
    }

    const currentPath = window.location.pathname;
    const selectedMenu = menus.find(menu => menu.path === currentPath);

    // If the current path is not found in the menu, default to "Candidates"

     
      
  });

  const selectedMenu = (menu) => {
   
      setSelectedComponent(menu.title);
  

  };

  // const handleChangeBg = () => {
  //   if (change === false) {
  //     setChange(true);
  //     localStorage.setItem(
  //       "Visibility",
  //       JSON.stringify({
  //         display: true,
  //       })
  //     );
  //   } else {
  //     setChange(false);
  //     localStorage.setItem(
  //       "Visibility",
  //       JSON.stringify({
  //         display: false,
  //       })
  //     );
  //   }
  // };

  const [nav, setNav] = useState(true);
  return (
    <div
      className="h-full md:flex  overflow-y-hidden  my-0 w-full"
      style={bgImage}
    >
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer absolute z-10"
      >
        {nav ? (
          <RxHamburgerMenu
            size={27}
            className="md:hidden text-green-600 mt-3 mx-3"
          />
        ) : (
          <MdOutlineClose
            className={`md:hidden text-white mt-3 mx-3`}
            size={30}
          />
        )}
      </div>
      {!nav && (
        <ul className="flex flex-col justify-center md:hidden items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-green-700 to-green-600 text-white">
          {menus.map(({ title, index }) => (
            <li
              key={index}
              className="px-4 cursor-pointer capitalize py-4 text-xl"
            >
              {" "}
              {title}{" "}
            </li>
          ))}
        </ul>
      )}
      <div
        className={` ${
          open ? "w-[280px]" : "w-24"
        } duration-700 hidden md:flex flex-col h-screen bg-green-600 text-white p-6 pt-[-20px]  relative`}
      >
        <FaArrowRight
          size={19}
          className={` ${
            open ? "rotate-180" : ""
          } absolute text-green-600 top-9 px-1 bg-black rounded-full h-5 mt-[4px] cursor-pointer -right-[10px]
      ] w-5 ${change ? "bg-white text-green-700 " : ""}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex items-center gap-x-3 py-[6px]  ">
          <div
            className={`w-[45px] text-[26px] px-5 rounded-xl  ${
              open ? "rotate-[360deg]" : ""
            } font-extrabold flex items-center justify-center text-green-600 bg-white cursor-pointer duration-700`}
          >
            V
          </div>
          <h1
            className={` ${
              !open ? "scale-0  " : "opacity-1"
            } text-[23px] font-bold ${
              open ? "rotate-[360deg]" : ""
            } duration-700 origin-left  text-white`}
          >
            VORTECH
          </h1>
        </div>

        <ul className="pt-6 flex flex-col">
          {menus.map((menu, index) => (
            <button
              key={index}
              onClick={() => selectedMenu(menu)}
              className={` ${
                menu.gap ? "mt-12" : "mt-2"
              } text-white  hover:bg-green-500 rounded-lg cursor-pointer items-center gap-x-4 p-2`}
            >
              <Link className={`flex items-center duration-700 gap-3`}>
                <p
                  className={`text-white ${
                    open ? "rotate-[360deg]" : ""
                  }  duration-700  origin-left `}
                >
                  {menu.icon}
                </p>
                <span
                  className={` ${
                    !open ? "scale-0 rotate-180 " : "opacity-1"
                  }   duration-700 origin-left   text-white`}
                >
                  {menu.title}
                </span>
              </Link>
            </button>
          ))}
        </ul>
      </div>

            <div className='w-full max-w-7/12'>
                {/* display components here */}
                {selectedComponent === "Dashboard" && <Home />}
                {selectedComponent === "Candidates" && <Candidates />}
                {selectedComponent === "Voters" && <Voters />}
                {selectedComponent === "Analysis" && <Analysis />}
                {selectedComponent === "Configuration" && <Configuration />}
                {selectedComponent === "Results" && <Results />}
                {selectedComponent === "Settings" && <Settings />}
                {selectedComponent === "LogOut" && <LogOut />}
            </div>
        </div>
    );
};

export default Dashboard;
