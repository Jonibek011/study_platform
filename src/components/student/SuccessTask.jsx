import React, { memo } from "react";
import { FaCheck } from "react-icons/fa6";
const SuccessTask = memo(function SuccessTask() {
  return (
    <div className="w-full h-full flex  flex-col  lg:flex-row gap-8 mt-8 px-4 ">
      <div className="left-side w-[100%] lg:w-[40%] h-[300px]   ">
        <div className="w-full h-full  rounded-xl border-2 border-dashed border-blue-first bg-[#10B9811C] flex flex-col gap-4 justify-center items-center">
          <span className=" rounded-xl bg-[#10B981] p-2 ">
            <FaCheck className="w-24 h-24 text-white" />
          </span>
          <p className="text-[#10B981]">Tekshirildi</p>
        </div>
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
              Topshiriq yaxshi bajarilgan. Grafik to‘g‘ri chizilgan. O‘qlarni
              yanada aniqroq chizishga e’tibor bering. Ajoyib ish!
            </p>
          </div>
        </div>
        <div className="flex justify-end lg:justify-start ">
          <button
            disabled
            className="btn  rounded-full px-7 bg-blue-first text-white font-normal text-[15px]"
          >
            Qaytadan yuborish
          </button>
        </div>
      </div>
    </div>
  );
});

export default SuccessTask;
