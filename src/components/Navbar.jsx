import React, { memo } from "react";
import { cn } from "./util/cn";
import { Form } from "react-router-dom";
//context
import { AuthContext } from "../context/AuthContext";
import { useContextSelector } from "use-context-selector";
//reaact-icons
import { CgSearch } from "react-icons/cg";
import { PiBellBold } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";
//main fuunction
const Navbar = memo(function Navbar({ className = "", ...rest }) {
  const user = useContextSelector(AuthContext, (ctx) => ctx.user);
  return (
    <header
      {...rest}
      className={cn(
        `bg-main-bg h-[90px] w-full border-b border-b-header-border`,
        className
      )}
    >
      <nav className="w-full h-full flex items-center justify-between px-10 xl:px-[100px]">
        <div className="navbar-start flex-1 ">
          <div className="logo flex items-center gap-1">
            <span className="w-10 h-10 rounded-[14px] bg-logo inline-block"></span>
            <span className="text-2xl text-title font-bold">LOGO</span>
          </div>
        </div>
        <div className="navbar-middle  flex-1">
          <Form
            method="post"
            className=" max-w-md lg:w-[70%] xl:w-full mx-auto"
          >
            <label className="input w-full bg-second-bg rounded-lg ">
              <input
                type="search"
                placeholder="Qidirsh..."
                className="placeholder:text-light-text text-title"
              />
              <CgSearch className="text-black-gray w-5 h-5" />
            </label>
          </Form>
        </div>
        <div className="navbar-end flex-1 flex justify-end items-center gap-5">
          <div className="notificaation">
            <PiBellBold className="w-6 h-6 text-black-gray" />
          </div>
          <div className="dropdown dropdown-center ">
            <div
              tabIndex={0}
              role="button"
              className=" inline-flex items-center justify-around gap-1 text-black-gray"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-6 h-6 rounded-full"
              />
              <span className="font-[500] text-[18px] select-none">O'ZB</span>
              <span>
                <RiArrowDownSLine className="w-6 h-6" />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-full whitespace-nowrap p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-blue-first border-none shadow-none rounded-lg  text-white flex gap-1 "
            >
              <h3 className="whitespace-nowrap font-medium text-[17px] ">
                {user.displayName}
              </h3>
              <span>
                <RiArrowDownSLine className="w-6 h-6" />
              </span>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
