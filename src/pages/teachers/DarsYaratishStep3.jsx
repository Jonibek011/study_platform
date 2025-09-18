import React from "react";
import image from "../../assets/student/darslar/Rectangle 24.png";

import image1 from "../../assets/teacher/darsYaratish/Rectangle 399.png";
import playImage from "../../assets/teacher/darsYaratish/Frame 5262.png";

const data = [
  {
    id: 1,
    image1,
    playImage,
    title: "Kvadrat tengsizlikni kvadrat funksiya yordamida yechish",
    duration: "32 daqiqa 23 soniya",
  },
  {
    id: 2,
    image1,
    playImage,
    title: "Kvadrat tengsizlikni kvadrat funksiya yordamida yechish",
    duration: "32 daqiqa 23 soniya",
  },
  {
    id: 3,
    image1,
    playImage,
    title: "Kvadrat tengsizlikni kvadrat funksiya yordamida yechish",
    duration: "32 daqiqa 23 soniya",
  },
  {
    id: 4,
    image1,
    playImage,
    title: "Kvadrat tengsizlikni kvadrat funksiya yordamida yechish",
    duration: "32 daqiqa 23 soniya",
  },
];
function DarsYaratishStep3() {
  return (
    <section className="max-w-[1200px] flex flex-col gap-5 w-full h-full  md:rounded-xl p-3 md:p-8 lg:pe-20 bg-main-bg ">
      <div className="steps  w-full h-28 py-4  flex flex-col gap-5">
        <div className="step-container rounded-full  relative w-[85%]  lg:w-[70%] h-1 md:h-2 ml-2   sm:ml-8 bg-[#DFE5EF] flex justify-between items-center">
          <div className="absolute top-0 left-0 w-[100%] h-full bg-blue-first z-0"></div>
          <span className="span-1 relative z-10 w-7 h-7 md:w-10 md:h-10 rounded-full bg-blue-first text-white flex justify-center items-center text-lg ">
            <span className="absolute -bottom-12 lg:-bottom-8 text-blue-first font-semibold  text-[12px] sm:text-sm w-[80px] lg:w-[200px] text-center">
              Rasm yuklash
            </span>
            1
          </span>
          <span className="z-10 w-7 h-7 md:w-10 md:h-10 relative  rounded-full bg-blue-first text-white  flex justify-center items-center text-lg ">
            <span className="absolute -bottom-12 lg:-bottom-8  text-blue-first font-semibold  text-[12px] sm:text-sm w-[100px] lg:w-[200px] text-center ">
              Mavzular qo'shish
            </span>
            2
          </span>
          <span className="span-1 relative z-10 w-7 h-7 md:w-10 md:h-10 rounded-full bg-blue-first text-white flex justify-center items-center text-lg  ">
            <span className="absolute -bottom-12 lg:-bottom-8  text-blue-first font-semibold  text-[12px] sm:text-sm w-[100px] lg:w-[200px] text-center ">
              Tekshirish va saqlash
            </span>
            3
          </span>
        </div>
      </div>

      <div className="button-section flex justify-between  gap-5">
        <h2 className="text-xl font-bold text-title">Tekshirish va Saqlash</h2>

        <button className="btn btn-sm sm:btn-md rounded-full bg-blue-first text-white shadow-sm border-none px-7 font-medium text-lg">
          Saqlash
        </button>
      </div>
      <div className="image-card rounded-xl p-5 bg-second-bg flex flex-col lg:flex-row gap-3">
        <div className="image w-full lg:w-[314px]">
          <img src={image} alt="" className="w-full" />
        </div>
        <div>
          <p className="flex gap-4 ">
            <span className="text-title font-semibold">Dars nomi:</span>{" "}
            <span className="text-lighter-text">Matematika 1-modul</span>
          </p>
          <p className="flex gap-4 ">
            <span className="text-title font-semibold whitespace-nowrap">
              Dars tasnifi:
            </span>{" "}
            <span className="text-lighter-text">
              Algebra asoslari va amaliy misollar
            </span>
          </p>
          <p className="flex gap-4 ">
            <span className="text-title font-semibold">Daraja:</span>{" "}
            <span className="text-lighter-text">Boshlang'ich</span>
          </p>
        </div>
      </div>
      <div className="darslar-container overflow-y-auto  flex flex-col gap-4  ">
        {!data && (
          <h2 className="opacity-20 text-title text-3xl text-center h-[50vh] flex justify-center items-center">
            🤷‍♀️ Hozircha videolar qo'shilmadi
          </h2>
        )}

        {data.map((d, index) => {
          return (
            <div
              key={d.id}
              className="rounded-xl bg-main-bg border-2 border-darslar-border p-4 flex gap-4"
            >
              <div className="images w-[140px] h-[75px] relative">
                <img
                  src={d.image1}
                  className="w-[140px] h-full relative z-10"
                  alt=""
                />
                <img
                  src={d.playImage}
                  className="absolute w-6 h-6 top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 "
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between w-full h-full">
                <div>
                  <h2 className="text-lg xl:text-xl font-semibold text-title">
                    {index + 1}. {d.title}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DarsYaratishStep3;
