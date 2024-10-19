import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { cn } from "../Library/Utilities/HelperFunctions";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import SideBar from "./SideBar/SideBar";

import Logo from "../../assets/Logo.jpg";
import ShortLogo from "../../assets/ShortLogo.jpg";
import { NavTabs } from "../../Routes/tabConstants";

const CommonLayout = () => {
  const [expandSideBar, setExpandSideBar] = useState(false);

  const toggleSidebar = () => {
    setExpandSideBar(!expandSideBar);
  };

  return (
    <div className="w-full h-full flex ">
      <div
        className={cn(
          "h-full flex w-[70px] ease-in-out duration-300 flex-col bg-primary shadow-md shadow-black  drop-shadow-md",
          { "w-[250px]": expandSideBar }
        )}
      >
        <div className="relative w-full h-[50px] shadow-md shadow-black  drop-shadow-md p-1 px-4">
          {expandSideBar ? (
            <img src={Logo} alt="Logo" className="w-full h-full" />
          ) : (
            <img src={ShortLogo} alt="Logo" className="w-full h-full" />
          )}
          <IoIosArrowDropleftCircle
            onClick={toggleSidebar}
            className="absolute  top-[50%] translate-y-[-50%] cursor-pointer right-[-10px] text-[24px] text-primaryMuted "
          />
        </div>
        <div className="w-full" style={{ height: "calc(100% - 75px)" }}>
          <SideBar expandedSideBar={expandSideBar} />
        </div>
      </div>
      <div
        className={cn(" h-full flex flex-col ease-in-out duration-300")}
        style={{
          width: expandSideBar ? "calc(100% - 250px)" : "calc(100% - 70px)",
        }}
      >
        <div className="h-[50px] w-full flex bg-primary items-center justify-end gap-5 text-white shadow-md shadow-black pr-10">
          {NavTabs?.map((item, index) => (
            <div
              key={item.label}
              className="flex text-[12px] items-center justify-evenly gap-1"
            >
              {item.icon} <p>{item.label} </p> {item.rightIcon}
            </div>
          ))}
        </div>

        <div className="w-full  flex" style={{ height: "calc(100% - 75px)" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
