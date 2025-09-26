import React, { useState } from "react";
import image from "./assets/images/logo.png";
import sunIcon from "./assets/images/sun.svg";
import Hero from "./Hero";
import moonIcon from "./assets/images/icon-moon.svg";
// import Parentcomponent from "./Parentcomponent";
const MainInterface = () => {
  const [lightmode, setLightMode] = useState(false);
  const toggleMode = () => {
    setLightMode(!lightmode);
  };

  return (
    <div
      className={`p-3 bg-gray-950 min-h-screen transition-colors duration-300 w-full ${
        lightmode
          ? "bg-white text-gray-900"
          : "bg-gradient-to-b from-gray-950 to-blue-950"
      }`}
    >
      <div>
        <div
          className={`border rounded-md flex items-center justify-between p-2 ${
            lightmode ? "bg-gray-100" : "bg-gray-900"
          }`}
        >
          <div className="flex items-center justify-between gap-3 text-2xl">
            <img className="text-white w-[3rem] h-[3rem]" src={image} alt="" />
            <h3 className={`${lightmode ? "text-gray-900" : "text-white"}`}>
              Extension
            </h3>
          </div>
          <div></div>
          <button
            onClick={toggleMode}
            className={`border ${
              lightmode
                ? "border-gray-300 bg-gray-200"
                : "border-gray-800 bg-gray-800"
            } shadow flex items-center justify-center rounded-lg p-3`}
          >
            <img
              src={lightmode ? moonIcon : sunIcon}
              alt="togle mode"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      <div>
        <Hero lightmode={lightmode} />
      </div>
    </div>
  );
};

export default MainInterface;
