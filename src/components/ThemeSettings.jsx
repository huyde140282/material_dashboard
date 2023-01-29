import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { themeColors } from "../data/dummy";
import { BsCheck } from "react-icons/bs";
import { useStateContext } from "../context/ContextProvider";

const ThemeSettings = () => {
  const { currentColor, setColor, currentMode, setMode, setThemeSettings } =
    useStateContext();

  return (
    <div className=" bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen bg-white dark:bg-[#484B52] dark:text-gray-200 w-400">
        <div className="flex items-center justify-between p-4 ml-4">
          <p className="text-lg font-semibold">Settings</p>
          <button
            className="text-xl rounded-full p-3"
            onClick={() => {
              setThemeSettings(false);
            }}
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex flex-col border-color border-t-1 ml-4 p-4 gap-4">
          <div className="font-semibold text-xl">Theme Option</div>
          <div className="flex flex-col gap-2">
            <div>
              <input
                type="radio"
                className="cursor-pointer mr-2"
                name="Theme"
                id="light"
                value="Light"
                onChange={setMode}
                checked={currentMode === "Light"}
              />
              <label htmlFor="light" className="cursor-pointer">
                Light
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="cursor-pointer mr-2"
                name="Theme"
                id="dark"
                value="Dark"
                onChange={setMode}
                checked={currentMode === "Dark"}
              />
              <label htmlFor="dark" className="cursor-pointer">
                Dark
              </label>
            </div>
          </div>
        </div>

        <div className="p-4 border-t-1 ml-4">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-3 ">
            {themeColors.map((item) => (
              <TooltipComponent
                key={item.name}
                title={item.name}
                position="TopCenter"
              >
                <div className="flex items-center mt-2 cursor-pointer">
                  <button
                    style={{ background: item.color }}
                    className="rounded-full h-10 w-10 flex justify-center items-center"
                    onClick={() => {
                      setColor(item.color);
                    }}
                  >
                    <BsCheck
                      className={`text-xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
