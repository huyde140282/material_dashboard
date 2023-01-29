import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoDashboard } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  console.log(currentColor);

  let activeStyle = {
    backgroundColor: currentColor,
  };

  const handleCloseModal = () => {
    if (screenSize < 900 && activeMenu) {
      setActiveMenu(false);
    }
  };

  return (
    <div
      className="ml-3 h-screen
  md:overflow-hidden overflow-auto
  md:hover:overflow-auto pb-10 "
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseModal}
              className="flex items-center gap-3 ml-3 mt-4
            text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <GoDashboard /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prev) => !prev)}
                className="text-xl rounded-full mt-4 p-3 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-300  m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseModal}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className={({
                      isActive,
                    }) => `flex items-center gap-5 pl-4 pt-3 pb-2.5 m-2
                    ${
                      isActive
                        ? "text-white"
                        : "dark:hover:text-black text-black dark:text-white  hover:bg-light-gray"
                    } rounded-lg text-base`}
                  >
                    {link.icon}
                    <span className="captitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
