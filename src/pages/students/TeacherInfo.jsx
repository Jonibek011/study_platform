import React from "react";
//image
import teacherImg from "../../assets/student/darslar/teacher.png";
import teacherMobile from "../../assets/student/darslar/teacher-mobile.png";
// data
import { darslar } from "../../backend/student/studenBackend";
import { useParams } from "react-router-dom";
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";

//components
import Cards from "../../components/student/Cards";

//main function
function TeacherInfo() {
  const { id } = useParams();

  const teacher = darslar[id - 1]?.teacherInfo;
  const { width } = useWindowSize();

  return (
    <section className="teacher-info-container flex flex-col gap-2 md:gap-4 lg:gap-6 w-full h-full overflow-y-auto ">
      <div className="teacher-info-card relative bg-main-bg rounded-lg p-2 md:p-4 xl:p-8 flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-8 w-full h-auto">
        <div className="flex justify-between items-center lg:hidden">
          <h2 className="text-xl md:text-2xl text-title font-bold ">
            {teacher.ismi} {teacher.familiyasi}
          </h2>
          <button className="btn btn-sm md:btn-md shadow-none border-none bg-blue-first hover:bg-blue-first rounded-full px-5 text-white font-medium">
            Murojaat qilish
          </button>
        </div>
        <div className="teacher-image w-full lg:w-[250px] h-auto overflow-hidden rounded-xl">
          <img
            src={width > 1023 ? teacherImg : teacherMobile}
            className="w-full h-auto"
            alt=""
          />
        </div>
        <div
          className={`teacher-main-info-section flex ${
            width < 600 && "flex-col"
          } md:flex-col xl:flex-row gap-4`}
        >
          <div className="first-column flex-1">
            <h2 className="text-2xl text-title font-bold hidden lg:block">
              {teacher.ismi} {teacher.familiyasi}
            </h2>
            <p>
              <span className="text-title font-semibold text-[12px] sm:text-sm">
                Kasbi:{" "}
              </span>
              <span className="text-lighter-text font-medium text-[12px] sm:text-sm xl:text-[16px]">
                {teacher.kasbi}
              </span>
            </p>

            <p>
              <span className="text-title font-semibold text-[12px] sm:text-sm xl:text-[16px]">
                Tajribasi:{" "}
              </span>
              <span className="text-lighter-text font-medium text-[12px] sm:text-sm xl:text-[16px]">
                {teacher.tajribasi} yil
              </span>
            </p>

            <p>
              <span className="text-title font-semibold text-[12px] sm:text-sm xl:text-[16px]">
                Ixtisosligi:{" "}
              </span>
              <span className="text-lighter-text font-medium text-[12px] sm:text-sm xl:text-[16px]">
                {teacher.ixtisosligi}
              </span>
            </p>

            <p>
              <span className="text-title font-semibold text-[12px] sm:text-sm xl:text-[16px]">
                Ta'lim:{" "}
              </span>
              <span className="text-lighter-text font-medium text-[12px] sm:text-sm xl:text-[16px] ">
                {teacher.talim}
              </span>
            </p>

            <p>
              <span className="text-title font-semibold text-[12px] sm:text-sm xl:text-[16px]">
                Darajasi:{" "}
              </span>
              <span className="text-lighter-text font-medium text-[12px] sm:text-sm xl:text-[16px]">
                {teacher.darajasi}
              </span>
            </p>

            <p>
              <span className="text-title font-semibold text-[12px] sm:text-sm xl:text-[16px]">
                O'quvchilarga yondashuvi:{" "}
              </span>
              <span className="text-lighter-text font-medium text-[12px] sm:text-sm xl:text-[16px]">
                {teacher.yondashuvi}
              </span>
            </p>
          </div>
          <div className="second-column flex-1 flex flex-col">
            <br />
            <div className="flex gap-2 flex-col md:flex-row md:gap-6">
              <h2 className=" text-title font-semibold text-[12px] sm:text-sm">
                Yutuqlari:{" "}
              </h2>
              <ul className="md:list-disc">
                {teacher.yutuqlari.map((yutuq) => {
                  return (
                    <li className="text-lighter-text text-[12px] sm:text-sm xl:text-[16px] ">
                      {yutuq}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              className={`btn   shadow-none border-none hidden   lg:block absolute ${
                width > 1023 && width < 1140 ? "left-4" : "right-4"
              }  bottom-8  bg-blue-first hover:bg-blue-first text-white rounded-full font-medium  self-end `}
            >
              Murojaat qilish
            </button>
          </div>
        </div>
      </div>

      <div className="teacher-lessons-section flex flex-col gap-2 md:gap-4 lg:gap-6">
        <h2 className="text-xl text-title font-bold px-2 md:px-0">Darslari</h2>
        <div className="w-full h-auto pb-2">
          <Cards cards={teacher} />
        </div>
      </div>
    </section>
  );
}

export default TeacherInfo;
