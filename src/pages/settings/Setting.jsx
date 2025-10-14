import React, { useState } from "react";

//context
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContextSelector } from "use-context-selector";
//react-icons
import { FiMoon } from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa6";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { PiDevices } from "react-icons/pi";

//costom navlink
import CustomLink from "../../components/ui/CustomLink";

import { Link } from "react-router-dom";
//component
import DefaultMainSetting from "../../components/DefaultMainSetting";
import DefaultChangeSetting from "../../components/DefaultChangeSetting";
//hook
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
import Navbar from "../../components/Navbar";

//main function
function Setting() {
  const { width, height } = useWindowSize();

  const [changeDefault, setChangeDefault] = useState(true);

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
    <section className="flex flex-col bg-second-bg w-full h-full">
      <Navbar />
      <div className="main-section flex">
        <div className="sidebar">
          <div
            className={`w-[70vw]  md:w-72 h-[calc(100vh-90px)] bg-main-bg px-5 py-6 absolute z-[999] top-[90px] md:top-0 ${
              isToggle ? "left-0" : "left-[-100%]"
            } transition-all duration-200 md:static`}
          >
            <span
              className="inline-block md:hidden absolute top-3 right-3"
              onClick={mobileMenu}
            >
              <FaXmark className="w-7 h-7 text-[#737984]" />
            </span>
            <div className="nav mt-10 md:mt-0 flex flex-col gap-5 h-[70%] border-b border-b-header-border">
              <CustomLink to="/sozlamalar" end>
                <span>
                  <FaRegAddressCard className="w-6 h-6" />
                </span>
                <span className="text-lg font-normal">Ma`lumotlarim</span>
              </CustomLink>
              <CustomLink to="/to`lovlar" end>
                <span>
                  <PiClockCounterClockwiseFill className="w-6 h-6" />
                </span>
                <span className="text-lg font-normal">To`lov tarixi</span>
              </CustomLink>
              <CustomLink to="qurilmalar" end>
                <span>
                  <PiDevices className="w-6 h-6" />
                </span>
                <span className="text-lg font-normal">Qurilmalar</span>
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
            } top-[90px]  w-full h-[calc(100vh-90px)] z-40  inline-block md:hidden bg-black/60`}
          ></span>
        </div>
        <div className="w-full   bg-second-bg p-4 md:p-5 md:px-5 xl:px-8  xl:pe-10 2xl:pe-[90px] relative flex flex-col gap-6 py-3">
          {changeDefault && (
            <DefaultMainSetting setChangeDefault={setChangeDefault} />
          )}
          {!changeDefault && (
            <DefaultChangeSetting setChangeDefault={setChangeDefault} />
          )}
          <div className="raqamni-ozgartirish rounded-xl bg-main-bg p-5 flex flex-col gap-6 md:flex-row justify-between md:items-center">
            <div className="flex flex-col">
              <p className="md:text-lg text-title">Telefon raqamingiz</p>
              <p className="text-lg md:text-xl text-title xl:text-2xl font-semibold">
                +998 99 529 78 66
              </p>
            </div>
            <div>
              <button className="btn btn-sm md:btn-md rounded-full bg-blue-first px-6 text-white text-[15px] md:text-[17px] border-none shadow-sm font-medium">
                Raqamni o`zgartirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Setting;
