import React, { memo } from "react";
import clsx from "clsx";
import { cn } from "../../components/util/cn";
import { Form, Link } from "react-router-dom";
//backend
import { darslar } from "../../backend/student/studenBackend";
//icons
import { BiSearch } from "react-icons/bi";
import { LiaSlidersHSolid } from "react-icons/lia";
import { FiExternalLink } from "react-icons/fi";
//components
import Loading from "../../components/loadings/Loading";
//images

const DarslarStudent = memo(function DarslarStudent({
  className = "",
  ...rest
}) {
  console.log(darslar);
  return (
    <section
      className={cn(
        `w-full h-full  flex flex-col gap-8 overflow-y-auto bg-main-bg md:bg-transparent `,
        className
      )}
      {...rest}
    >
      <div className="filter-section bg-main-bg p-8 md:rounded-xl w-full  z-50 top-[90px] left-0 md:static">
        <div className="flex justify-between items-center gap-3 md:hidden  pe-0">
          <Form method="post" className="w-full">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Qidirish"
                className="input bg-input-bg w-full rounded-xl text-title placeholder:italic focus:outline-none focus:ring-0 focus:border-lighter-text "
              />
              <BiSearch className="w-5 h-5 text-light-text absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </Form>
          <div className="filter flex justify-center items-center">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                <LiaSlidersHSolid className="w-6 h-6 text-light-text" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-input-bg rounded-box z-1 w-64 p-2 shadow-sm  "
              >
                <Form method="post" className=" flex flex-col gap-5 w-full ">
                  <h3 className="text-title font-bold text-[20px]">Filter</h3>
                  <div className="grid grid-cols-1  gap-6  w-full ">
                    <select
                      defaultValue="Fanni tanlang"
                      className="select rounded-xl bg-input-bg w-full max-w-auto text-light-text focus:outline-none focus:ring-none focus:border-[3px] focus:border-gray-500 "
                    >
                      <option disabled={true}>Fanni tanlang</option>
                      <option className="">North America</option>
                      <option>EU west</option>
                      <option>South East Asia</option>
                    </select>

                    <select
                      defaultValue="Daraja"
                      className="select rounded-xl bg-input-bg w-full max-w-auto text-light-text focus:outline-none focus:ring-none focus:border-[3px] focus:border-gray-500"
                    >
                      <option disabled={true}>Daraja</option>
                      <option className="">North America</option>
                      <option>EU west</option>
                      <option>South East Asia</option>
                    </select>

                    <select
                      defaultValue="Holati"
                      className="select rounded-xl bg-input-bg w-full max-w-auto text-light-text focus:outline-none focus:ring-none focus:border-[3px] focus:border-gray-500"
                    >
                      <option disabled={true}>Holati</option>
                      <option className="">North America</option>
                      <option>EU west</option>
                      <option>South East Asia</option>
                    </select>

                    <button className="btn   rounded-xl xl:px-14 whitespace-nowrap  w-auto bg-blue-first text-white font-medium text-lg border-none shadow-none">
                      Natijani ko'rish
                    </button>
                  </div>
                </Form>
              </ul>
            </div>
            <p className="  text-sm text-light-text">Filter</p>
          </div>
        </div>
        <Form method="post" className="hidden md:flex flex-col gap-3 w-full">
          <h3 className="text-title font-bold text-[20px]">Filter</h3>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 w-full ">
            <select
              defaultValue="Fanni tanlang"
              className="select rounded-xl bg-input-bg w-full max-w-auto text-light-text focus:outline-none focus:ring-none focus:border-[3px] focus:border-gray-500 "
            >
              <option disabled={true}>Fanni tanlang</option>
              <option className="">North America</option>
              <option>EU west</option>
              <option>South East Asia</option>
            </select>

            <select
              defaultValue="Daraja"
              className="select rounded-xl bg-input-bg w-full max-w-auto text-light-text focus:outline-none focus:ring-none focus:border-[3px] focus:border-gray-500"
            >
              <option disabled={true}>Daraja</option>
              <option className="">North America</option>
              <option>EU west</option>
              <option>South East Asia</option>
            </select>

            <select
              defaultValue="Holati"
              className="select rounded-xl bg-input-bg w-full max-w-auto text-light-text focus:outline-none focus:ring-none focus:border-[3px] focus:border-gray-500"
            >
              <option disabled={true}>Holati</option>
              <option className="">North America</option>
              <option>EU west</option>
              <option>South East Asia</option>
            </select>

            <button className="btn shadow-none border-none rounded-xl xl:px-14 whitespace-nowrap  w-auto bg-blue-first text-white font-medium text-lg">
              Natijani ko'rish
            </button>
          </div>
        </Form>
      </div>

      <diiv className="card-section mx-2 md:mx-0  md:mt-0 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {darslar?.map((dars) => {
          return (
            <div
              key={dars.id}
              className="card shadow-md md:shadow-none bg-main-bg overflow-hidden rounded-xl"
            >
              <div className="card-header w-full h-[300px] relative">
                <img
                  src={dars.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="teacher-info absolute left-5 bottom-5 flex  gap-3 items-center">
                  <div className="teacher-img w-9 h-9 rounded-full">
                    <img
                      src={dars.userPhoto || <Loading />}
                      alt=""
                      className="w-auto h-full rounded-full object-cover"
                    />
                  </div>
                  <p className="text-lg text-white">{dars.teacher}</p>
                  <Link>
                    <FiExternalLink className="w-6 h-6 text-white" />
                  </Link>
                </div>
              </div>
              <div className="card-body p-5 flex flex-col gap-2 relative">
                <span className="absolute top-5 right-3 badge lg:badge-sm xl:badge-md px-4 py-4 rounded-full bg-[#D8E7FF] text-blue-first text-[15px] font-semibold">
                  Boshlang'ich
                </span>
                <h2 className="text-xl text-title font-bold">{dars.title}</h2>
                <p className="text-lg text-lightest-text">{dars.subtitle}</p>
                <div className="progres flex flex-col gap-1">
                  <div className="progress w-full relative h-[7px] bg-[#E3E3E3] rounded-full ">
                    <span
                      style={{ width: dars.progress + "%" }}
                      className={clsx(
                        `inline-block absolute top-0 left-0 h-full    `,
                        {
                          "bg-[#FFBF00]":
                            dars.progress >= 50 && dars.progress < 100,

                          "bg-[#FF0D0D]": dars.progress < 50,
                          "bg-[#10B981]": dars.progress === 100,
                        }
                      )}
                    ></span>
                  </div>
                  <p className="text-lightest-text text-[13px] font-normal">
                    Yakunlandi: {dars.progress}%
                  </p>
                </div>
                <div className="button flex justify-between">
                  <Link
                    to={`${dars.id}`}
                    className="btn shadow-none border-none rounded-full px-8 font-normal bg-blue-first hover:to-blue-second text-white"
                  >
                    Boshlash
                  </Link>

                  <span
                    className={`font-medium text-[16px] inline-block self-end ${
                      dars.progress === 100
                        ? "text-[#10B981]"
                        : "text-[#FFBF00]"
                    }`}
                  >
                    {dars.progress === 100 ? "Tugagan" : "Boshlangan"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </diiv>
    </section>
  );
});

export default DarslarStudent;
