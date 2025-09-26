import React from "react";

const Extensions = ({
  extensions,
  handleToggle,
  isEnabled,
  lightmode,
  toggleDelete,
}) => {
  //   const isEnabled = toggleSwitch;
  return (
    <div>
      <div
        className={`border shadow gap-3 w-[20rem] h-[10rem] rounded-lg p-2 cursor-pointer transition-colors duration-300 ${
          lightmode ? "bg-gray-100 border-gray-300" : "bg-gray-900 border-white"
        }`}
      >
        <div className="flex flex-row gap-3 ">
          <img
            src={extensions.Image}
            alt={extensions.name}
            className="w-[15%] object-contain "
          />
          <div
            className={`flex flex-col mt-2 ${
              lightmode ? "text-gray-900" : "text-white"
            }`}
          >
            <p className="font-bold">{extensions.title}</p>
            <p className="text-sm"> {extensions.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 ">
          <button
            onClick={() => toggleDelete(extensions.id)}
            className={`border b rounded-full py-1 px-3 text-sm border-gray-400 shadow${
              lightmode
                ? "  text-gray-800 hover:bg-red-400"
                : " text-white  hover:bg-red-400"
            }`}
          >
            {extensions.delbtn}
          </button>

          {/* toggle switch */}

          <div
            onClick={handleToggle}
            className={`w-10 h-5 flex items-center rounded-full  cursor-pointer transition-colors ${
              isEnabled ? "bg-red-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                isEnabled ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extensions;
