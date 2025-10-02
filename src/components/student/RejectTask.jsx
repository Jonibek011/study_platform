import React, { memo } from "react";
import RejectedFileInput from "./RejectedFileInput";
const RejectTask = memo(function RejectTask() {
  return (
    <div className="w-full h-full flex  flex-col lg:flex-row gap-8 mt-8 px-4 ">
      <div className="left-side w-[100%] lg:w-[40%] h-full min-h-[300px]  ">
        <RejectedFileInput className="h-[300px] w-full" />
      </div>
      <div className="flex-1 flex flex-col  justify-between gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg text-title">Izohingiz</h2>
            <p className=" text-[#424242]">
              Men tenglamani yechib, grtafikni daftarimda chizdim, Grafikni
              rasmga olib yukladim. Yana o'zimcha yangi tenglama tuzib ko'rdim:
              y = -x +2.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg text-title">Ustozning Javobi</h2>
            <p className=" text-[#424242]">
              Xato ketibdi, qaytadan ishlab jo'nating
            </p>
          </div>
        </div>
        <div className="flex justify-end lg:justify-start">
          <button className="btn rounded-full px-7 bg-blue-first text-white font-normal text-[15px]">
            Qaytadan yuborish
          </button>
        </div>
      </div>
    </div>
  );
});

export default RejectTask;
