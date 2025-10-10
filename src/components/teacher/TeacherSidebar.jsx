import React, { memo } from "react";
import { cn } from "../util/cn";

//context
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContextSelector } from "use-context-selector";
//react-icons
import { RxDashboard } from "react-icons/rx";

import { BsChatLeftText } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

import { LuBookPlus } from "react-icons/lu";
import { MdAddTask } from "react-icons/md";
import { TbCalendarPlus } from "react-icons/tb";
//costom navlink
import CustomLink from "../ui/CustomLink";
import { Link } from "react-router-dom";

//hook
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
const TeacherSidebar = memo(function Sidebar({ className = "", ...rest }) {
  const { width, height } = useWindowSize();
  //toggle dark mode

  const toggleDarkMode = useContextSelector(
    DarkModeContext,
    (ctx) => ctx.toggleDarkMode
  );
  const isDark = useContextSelector(DarkModeContext, (ctx) => ctx.isDark);
  const isToggle = useContextSelector(DarkModeContext, (ctx) => ctx.isToggle);
  const mobileMenu = useContextSelector(
    DarkModeContext,
    (ctx) => ctx.mobileMenu
  );
  return (
    <>
      <div
        className={cn(
          `w-[70vw]  md:w-64 ${
            width > 640 && height < 600
              ? "h-[600px] overflow-y-auto"
              : "h-[calc(100vh-70px)]"
          }  bg-main-bg px-5 py-6 absolute z-[999] top-[70px]  md:top-0 ${
            isToggle ? "left-0" : "left-[-100%]"
          } transition-all duration-200 md:static`,
          className
        )}
        {...rest}
      >
        <span
          className="inline-block md:hidden absolute top-3 right-3"
          onClick={mobileMenu}
        >
          <FaXmark className="w-7 h-7 text-[#737984]" />
        </span>
        <div className="nav mt-10 md:mt-0 flex flex-col gap-5 h-[70%] border-b border-b-header-border">
          <CustomLink to="/teacher" end>
            <span>
              <RxDashboard className="w-6 h-6" />
            </span>
            <span className="text-lg font-normal">Dashboard</span>
          </CustomLink>
          <CustomLink to="darslar" end>
            <span className="relative">
              <LuBookPlus className="w-5 h-5 " />
            </span>
            <span className="text-lg font-normal">Dars yaratish</span>
          </CustomLink>
          <CustomLink to="vazifalar" end>
            <span>
              <MdAddTask className="w-6 h-6" />
            </span>
            <span className="text-lg font-normal">Vazifa yaratish</span>
          </CustomLink>
          <CustomLink to="testlar" end>
            <span>
              <TbCalendarPlus className="w-6 h-6" />
            </span>
            <span className="text-lg font-normal">Test yaratish</span>
          </CustomLink>
          <CustomLink to="chatlar" end>
            <span>
              <BsChatLeftText className="w-5 h-5" />
            </span>
            <span className="text-lg font-normal">Chatlar</span>
          </CustomLink>
        </div>
        <div className="help-section mt-10 px-6">
          <div className="flex flex-col gap-5">
            <Link className="flex gap-5 ">
              <span>
                <BsHeadset className="w-6 h-6 text-nav-text" />
              </span>
              <span className="text-nav-text font-normal text-lg hover:underline">
                Help
              </span>
            </Link>
            <div className="flex gap-5 flex-row justify-between items-center">
              <div className="flex  gap-5">
                <span>
                  <FiMoon className="w-6 h-6 text-nav-text " />
                </span>
                <span className="text-nav-text font-normal text-lg whitespace-nowrap">
                  Tungi rejim
                </span>
              </div>
              <input
                checked={isDark}
                onChange={toggleDarkMode}
                type="checkbox"
                value="synthwave"
                className="toggle toggle-sm  theme-controller  "
              />
            </div>
          </div>
        </div>
      </div>
      <span
        onClick={mobileMenu}
        className={`absolute  ${
          isToggle ? "left-0" : "left-[-100%]"
        } top-[70px]  w-full h-[calc(100vh-70px)] z-40  inline-block md:hidden bg-black/60`}
      ></span>
    </>
  );
});

export default TeacherSidebar;
