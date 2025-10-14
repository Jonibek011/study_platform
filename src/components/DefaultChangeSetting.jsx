import React from "react";
import { Form } from "react-router-dom";
//hook
import { useWindowSize } from "../hooks/optimizationHooks/useWindowSize";
function DefaultChangeSetting({ setChangeDefault }) {
  const { width } = useWindowSize();

  const handleSubmit = (e) => {
    e.preventDefault();
    setChangeDefault(true);
  };
  return (
    <div className="w-full bg-second-bg rounded-xl overflow-hidden h-auto  relative overflow-y-auto ">
      <div className="bg-main-bg w-full h-full p-4 flex flex-col gap-4 ">
        <div className="flex gap-8 items-center">
          <div className="min-w-28 min-h-28 w-28 h-28 text-main-text  rounded-full bg-second-bg border-4 md:border-8 border-main-bg flex justify-center items-center text-4xl ">
            AA
          </div>
          <div className="buttons flex flex-col  gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <button className="btn text-[15px] w-[160px] rounded-md border-none shadow-none px-7 bg-[#0061FF21] text-[#374DBC]">
                Rasm yuklash
              </button>
              <button className="btn text-[15px] w-[160px] whitespace-nowrap rounded-md border-none shadow-none px-7 bg-[#FF000014] text-[#EE5858]">
                Rasmni o`chirish
              </button>
            </div>
            <p className=" text-lightest-text hidden md:block max-w-lg">
              Tavsiya qilingan hajm maksimum kvadrat shaklda 1000px. Fayl tipi:
              JPG va PNG
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="text-sm text-lightest-text md:hidden">
            Tavsiya qilingan hajm maksimum kvadrat shaklda 1000px. Fayl tipi:
            JPG va PNG
          </p>

          <Form
            method="post"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4 flex-col md:flex-row w-full md:gap-10">
              <label className="flex flex-col gap-1 flex-1">
                <span className="text-title text-sm">Ismingiz</span>
                <input
                  type="text"
                  className="input text-main-text rounded-lg w-full bg-input-bg border-darslar-border focus:outline-none focus:ring-0 "
                />
              </label>
              <label className="flex flex-col gap-1 flex-1">
                <span className="text-title text-sm">Familiyangiz</span>
                <input
                  type="text"
                  className="input text-main-text rounded-lg w-full bg-input-bg border-darslar-border focus:outline-none focus:ring-0 "
                />
              </label>
            </div>
            <label className="flex flex-col gap-1">
              <span className="text-title text-sm">
                O`zingiz haqingizda yozing (Bio)
              </span>
              <textarea
                name=""
                className="textarea text-main-text rounded-lg w-full focus:outline-none focus:ring-0 bg-input-bg border-darslar-border"
                id=""
              ></textarea>
            </label>
            <div className="flex justify-end items-center gap-5">
              <button
                onClick={() => setChangeDefault(true)}
                className="btn  border-none shadow-sm rounded-full px-7 bg-[#0061FF14] text-blue-500 text-[15px] "
              >
                Bekor qilish
              </button>
              <button className="btn rounded-full px-7 bg-blue-first border-none shadow-sm text-white text-[15px] font-medium">
                {width > 767 ? "O`zgartirishlarni saqlash" : "Saqlash"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default DefaultChangeSetting;
