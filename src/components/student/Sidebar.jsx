import React, { memo, useEffect, useState } from "react";
import { cn } from "../util/cn";

//react-icons
import { LiaGraduationCapSolid } from "react-icons/lia";
import { BsClipboardCheck } from "react-icons/bs";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BsChatLeftText } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
//costom navlink
import CustomLink from "../ui/CustomLink";
import { Link } from "react-router-dom";
const Sidebar = memo(function Sidebar({ className = "", ...rest }) {
  //toggle dark mode
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <div
      className={cn("w-80 h-full bg-main-bg px-5 py-6", className)}
      {...rest}
    >
      <div className="nav flex flex-col gap-5 h-[70%] border-b border-b-gray-200">
        <CustomLink to="/student" end>
          <span>
            <LiaGraduationCapSolid className="w-6 h-6" />
          </span>
          <span className="text-lg font-normal">Asosiy</span>
        </CustomLink>
        <CustomLink to="darslar" end>
          <span>
            <LiaGraduationCapSolid className="w-6 h-6" />
          </span>
          <span className="text-lg font-normal">Darslar</span>
        </CustomLink>
        <CustomLink to="vazifalar" end>
          <span>
            <LiaClipboardCheckSolid className="w-6 h-6" />
          </span>
          <span className="text-lg font-normal">Vazifalar</span>
        </CustomLink>
        <CustomLink to="testlar" end>
          <span>
            <LiaClipboardListSolid className="w-6 h-6" />
          </span>
          <span className="text-lg font-normal">Testlar</span>
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
              <span className="text-nav-text font-normal text-lg">
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
  );
});

export default Sidebar;
