import React, { memo } from "react";

const DefaultMainSetting = memo(function DefaultMainSetting({
  setChangeDefault,
}) {
  return (
    <div className="w-full bg-main-bg rounded-xl overflow-hidden   flex flex-col gap-7 md:gap-10 relative ">
      <div className="  box-border md:m-4 relative md:rounded-xl p-10 md:p-12 bg-gradient-to-r from-blue-first-setting to-blue-second-setting  top-0 left-0">
        <div className="w-16 h-16 md:w-24 md:h-24 absolute left-[5%] bottom-[-80%] md:bottom-[-94%]  translate-y-[-50%] rounded-full bg-second-bg border-4 md:border-8 border-main-bg flex justify-center items-center ">
          <span className="text-xl md:text-3xl text-main-text">AA</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-title">
          Anvar Atabayev
        </h2>
        <p>
          <span className="text-lightest-text md:text-lg xl:text-xl">Bio</span>
        </p>
        <div className="py-5">
          <button
            onClick={() => setChangeDefault(false)}
            className="btn btn-sm lg:btn-md rounded-full px-7 border-none shadow-sm bg-blue-first text-white font-medium text-[15px] lg:text-[17px]"
          >
            Ma'lumotlarni o`zgartirish
          </button>
        </div>
      </div>
    </div>
  );
});

export default DefaultMainSetting;
