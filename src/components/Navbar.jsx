import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatarcopy.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";
import { FiShoppingBag } from "react-icons/fi";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveMenu(screenSize > 900 ? true : false);
  }, [screenSize]);

  return (
    <div className="flex p-2 justify-between md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((previousActiveMenu) => !previousActiveMenu);
        }}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => {
            handleClick("cart");
          }}
          color={currentColor}
          icon={<AiOutlineShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => {
            handleClick("chat");
          }}
          dotColor="rgb(3, 201, 215)"
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFunc={() => {
            handleClick("notification");
          }}
          dotColor="rgb(254, 201, 15)"
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 p-1 hover:bg-light-gray cursor-pointer">
            <img className="rounded-full h-8 w-8 " src={avatar} alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                HuyNNQ
              </span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
