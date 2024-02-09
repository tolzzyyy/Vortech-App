import React from "react";
import background from "../assets/background.png";
import LOGO1 from "../assets/LOGO1.png";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

const FirstLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerDuration = 3000;
    const timerId = setTimeout(() => {
      navigate("/secondlanding");
    }, timerDuration);

    // Clear the timer when the component unmounts or the effect is re-run
    return () => clearTimeout(timerId);
  }, []);

  const bgImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="h-screen overflow-hidden w-full flex flex-col  items-center"
      style={bgImage}
    >
      <div className="w-[400px] translate-y-[130px]">
        <img src={LOGO1} alt="" />
      </div>
      <div className=" w-[400px] translate-y-[300px] text-center flex justify-center items-center">
        <p className="text-[17px] font-bold ">
          Empowering your voice with Vortech <br /> your vote, your future
        </p>
        </div>
        <div className=" xl:translate-y-[380px] sm:translate-y-[380px] md:mt-[-50px] xl:mt-0  translate-y-[350px] text-green-500 ">
          <ReactLoading
            type={"bars"}
            color={"#16DA70"}
            height={70}
            width={70}
          />
        </div>
      
    </div>
  );
};

export default FirstLanding;
