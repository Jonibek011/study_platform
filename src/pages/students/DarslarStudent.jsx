import React, { memo } from "react";

import { cn } from "../../components/util/cn";
import { Form } from "react-router-dom";

//icons
import { BiSearch } from "react-icons/bi";
import { LiaSlidersHSolid } from "react-icons/lia";
const DarslarStudent = memo(function DarslarStudent({
  className = "",
  ...rest
}) {
  return (
    <section className={cn(`w-full h-full `, className)} {...rest}>
      <div className="bg-main-bg p-8 md:rounded-xl w-full absolute top-[90px] left-0 md:static">
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

                    <button className="btn rounded-xl xl:px-14 whitespace-nowrap  w-auto bg-blue-first text-white font-medium text-lg border-none shadow-none">
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

            <button className="btn rounded-xl xl:px-14 whitespace-nowrap  w-auto bg-blue-first text-white font-medium text-lg">
              Natijani ko'rish
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
});

export default DarslarStudent;
