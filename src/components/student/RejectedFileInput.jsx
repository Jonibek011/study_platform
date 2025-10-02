import React from "react";
import { cn } from "../util/cn";
//icons
import { IoCloseSharp } from "react-icons/io5";
function RejectedFileInput({ className = "" }) {
  return (
    <div
      className={cn(
        `w-full  rounded-xl border-2 border-dashed border-blue-first bg-[#FF373714] flex flex-col gap-4 justify-center items-center`,
        className
      )}
    >
      <span className=" rounded-xl bg-red-500 ">
        <IoCloseSharp className="w-24 h-24 text-white" />
      </span>
      <p className="text-red-500">Rad etildi</p>
    </div>
  );
}

export default RejectedFileInput;
