import React, { useEffect, useState } from 'react';
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import background from '../assets/background.png';
import { FaArrowRight } from 'react-icons/fa';
import { MdDashboard, MdManageAccounts, MdOutlineConstruction } from 'react-icons/md';
import { FaVoteYea } from 'react-icons/fa';
import { IoMdAnalytics, IoMdSettings } from 'react-icons/io';
import { GiProgression } from 'react-icons/gi';
import { CgLogOut } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineClose } from 'react-icons/md';

// Import your components here
import Candidates from './Candidates';
import Voters from './Voters';
import Analysis from './Analysis';
import Configuration from './Configuration';
import Results from './Results';
import Settings from './Settings';
import LogOut from './LogOut';
import Home from './Home';

const Dashboard = () => {
    const menus = [
        { title: 'Dashboard', icon: <MdDashboard size={27} />, path: '/' },
        { title: 'Candidates', icon: <MdManageAccounts size={27} />, path: '/candidates' },
        { title: 'Voters', icon: <FaVoteYea size={27} />, path: '/voters' },
        { title: 'Analysis', icon: <IoMdAnalytics size={27} />, path: '/analysis' },
        { title: 'Configuration', icon: <MdOutlineConstruction className='text-white' color='white' size={27} />, path: '/configuration' },
        { title: 'Results', icon: <GiProgression size={27} />, path: '/results' },
        { title: 'Settings', icon: <IoMdSettings size={27} />, path: '/settings' },
        { title: 'LogOut', icon: <CgLogOut size={27} />, path: '/logout' }
    ];

    const [change, setChange] = useState(false);
    const [open, setOpen] = useState(true);
    const [nav, setNav] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState("");
   

    useEffect(() => {
        const checkVisibility = JSON.parse(localStorage.getItem('Visibility'));
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
    }, []);

    const selectedMenu = (menu)=>{    
        setSelectedComponent(menu.title);
    }

    const handleChangeBg = () => {
        setChange(!change);
        localStorage.setItem(
            "Visibility",
            JSON.stringify({
                display: !change,
            })
        );
    };

    return (
        <div className='h-full md:flex overflow-y-hidden my-0 w-full'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer absolute z-10'>
                {nav ? <RxHamburgerMenu size={27} className='md:hidden text-green-600 mt-3 mx-3' /> : <MdOutlineClose className={`md:hidden text-white mt-3 mx-3`} size={30} />}
            </div>
            {!nav && (
                <div className="flex flex-col justify-center md:hidden items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-green-700 to-green-600 text-white">
                    {menus.map((menu, index) => (
                        <button key={index} onClick={()=>selectedMenu(menu)}  className="px-4 capitalize py-4 text-xl">
                            {menu.title}
                        </button>
                    ))}
                </div>
            )}
            <div className={` ${open ? "w-[260px]" : "w-24"} duration-700 hidden md:flex flex-col h-screen bg-green-600 text-white p-5 pt-[-20px]  relative`}>
                <FaArrowRight size={19} className={` ${open ? "rotate-180" : ""} absolute text-green-600 top-8 px-2 bg-black rounded-full h-7 cursor-pointer -right-3 w-7 ${change ? "bg-white text-green-700 " : ""}`} onClick={() => setOpen(!open)} />
                <div className='flex items-center gap-x-4'>
                    <div className={`w-[45px] text-[26px] px-5 rounded-xl font-extrabold flex items-center justify-center text-green-600 bg-white cursor-pointer duration-700`}>V</div>
                    <h1 className={` ${!open ? "scale-0  " : ""} text-[32px] font-bold duration-700 origin-left  text-white`}>VORTECH</h1>
                </div>
                <div className='pt-6 flex flex-col'>
                    {menus.map((menu, index) => (
                        <button key={index} onClick={()=>selectedMenu(menu)} className={` ${menu.gap ? 'mt-12' : 'mt-2'} text-white  hover:bg-green-500 rounded-lg cursor-pointer items-center gap-x-4 p-2`}>
                            <Link className='flex items-center gap-3'>
                                <p className='text-white'>{menu.icon}</p>
                                <span className={` ${!open ? "scale-0 hidden" : "opacity-1"}   duration-700 origin-left  text-white`}>{menu.title}</span>
                            </Link>
                        </button>
                    ))}
                </div>
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
}

export default Dashboard;
