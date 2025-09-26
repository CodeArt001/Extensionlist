// import React, { useState } from "react";
import { useState } from "react";
import Parentcomponent from "./Parentcomponent";

const Hero = ({ lightmode }) => {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <div className="flex items-center justify-between mt-10 cursor-pointer">
        <div>
          <h3
            className={`font-bold text-2xl ${
              lightmode ? "text-black" : "text-white"
            }`}
          >
            Extension List
          </h3>
        </div>
        <span className="text-white flex items-center justify-between gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`border border-gray-700 bg-gray-700 shadow rounded-full w-[3rem] h-[2rem] place-content-center flex items-center ${
              filter === "all" ? "bg-red-400 text-black" : "bg-gray-700"
            } `}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Active")}
            className={`border border-gray-700 bg-gray-700 shadow rounded-full place-content-center flex items-center w-[4rem] h-[2rem] ${
              filter === "Active" ? "bg-red-400 text-black" : "bg-gray-700"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("Inactive")}
            className={`border border-gray-700 bg-gray-700 shadow rounded-full place-content-center flex items-center w-[5rem] h-[2rem] ${
              filter === "Inactive" ? "bg-red-400 text-black" : "bg-gray-700"
            }`}
          >
            Inactive
          </button>
        </span>
      </div>
      <Parentcomponent filter={filter} lightmode={lightmode} />
    </div>
  );
};

export default Hero;
