import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

//image
import image from "../../assets/teacher/dashboard/Ellipse 5.png";
//icons
import { BiSearch } from "react-icons/bi";
import { LiaSlidersHSolid } from "react-icons/lia";
const data = [
  {
    id: 1,
    teacher: "Dildora Tojiyeva",
    mavzu: "Matematika I va II boblar",
    savollarSoni: 25,
    qiyinlikDarajasi: "O'rta",
    berilganVaqt: 30,
    holati: "Bajarilmagan",
  },

  {
    id: 2,
    teacher: "Dildora Tojiyeva",
    mavzu: "Fizika fanidan",
    savollarSoni: 25,
    qiyinlikDarajasi: "O'rta",
    berilganVaqt: 30,
    holati: "Bajarilmagan",
  },

  {
    id: 3,
    teacher: "Dildora Tojiyeva",
    mavzu: "Matematika III bob",
    savollarSoni: 25,
    qiyinlikDarajasi: "Murakkab",
    berilganVaqt: 30,
    holati: "Yakunlangan",
  },

  {
    id: 4,
    teacher: "Ingliz tili",
    mavzu: "Matematika I va II boblar",
    savollarSoni: 25,
    qiyinlikDarajasi: "Oson",
    berilganVaqt: 30,
    holati: "Yakunlangan",
  },

  {
    id: 5,
    teacher: "Dildora Tojiyeva",
    mavzu: "Matematika fanidan",
    savollarSoni: 25,
    qiyinlikDarajasi: "Oson",
    berilganVaqt: 30,
    holati: "Yakunlangan",
  },
];
//icons
import { IoIosArrowDown } from "react-icons/io";

//useWindowSize
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
function TestlarStudent() {
  const [subject, setSubject] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [level, setLevel] = useState(null);

  const { width } = useWindowSize();
  return (
    <section className="w-full h-full overflow-x-auto md:py-3">
      {width > 850 && (
        <div className="filter p-4 rounded-xl bg-main-bg flex flex-col gap-3">
          <h2 className="text-title font-semibold text-lg">Filter</h2>
          <div className="w-full dropdown-section grid grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="dropdown  rounded-xl ">
              <label
                tabIndex={0}
                className={`btn rounded-xl   max-w-sm lg:max-w-md xl:max-w-sm bg-input-bg border-darslar-border shadow-none  flex justify-between font-medium text-[16px] ${
                  !subject ? "text-lighter-text" : "text-title"
                } `}
              >
                <span>{subject || "Fanni tanlang"} </span>{" "}
                <IoIosArrowDown className="w-5 h-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-main-bg text-title rounded-box w-full max-w-sm text-[16px]"
              >
                <li className="hover:bg-second-bg cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setSubject("Matematika")}
                  >
                    Matematika
                  </button>
                </li>
                <li className="hover:bg-second-bg cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setSubject("Ingliz tili")}
                  >
                    Ingliz tili
                  </button>
                </li>
                <li className="hover:bg-second-bg cursor-pointer">
                  <button type="button" onClick={() => setSubject("Fizika")}>
                    Fizika
                  </button>
                </li>
                <li className="hover:bg-second-bg cursor-pointer">
                  <button type="button" onClick={() => setSubject("Hammasi")}>
                    Hammasi
                  </button>
                </li>
              </ul>
            </div>

            <div className="dropdown ">
              <label
                tabIndex={0}
                className={`btn rounded-xl shadow-none   max-w-sm lg:max-w-md xl:max-w-sm bg-input-bg border-darslar-border  flex justify-between font-medium text-[16px] ${
                  !teacher ? "text-lighter-text" : "text-title"
                } `}
              >
                <span>{teacher || "O'qituvchini tanlang"} </span>{" "}
                <IoIosArrowDown className="w-5 h-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content text-title  menu p-2 shadow bg-main-bg rounded-box w-full max-w-sm text-[16px]"
              >
                <li className="hover:bg-second-bg cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setTeacher("Durdona Qurbonova")}
                  >
                    Durdona Qurbonova
                  </button>
                </li>
                <li className="hover:bg-second-bg cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setTeacher("Sevinch Mo'minova")}
                  >
                    Sevinch Mo'minova
                  </button>
                </li>
                <li className="hover:bg-second-bg cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setTeacher("Alisher Usmonov")}
                  >
                    Alisher Usmonov
                  </button>
                </li>
              </ul>
            </div>

            <div className="dropdown   ">
              <label
                tabIndex={0}
                className={`btn rounded-xl whitespace-nowrap border-darslar-border shadow-none   max-w-sm lg:max-w-md xl:max-w-sm bg-input-bg  flex justify-between font-medium text-[16px] ${
                  !level ? "text-lighter-text" : "text-title"
                } `}
              >
                <span>{level || "Test darajasini tanlang"} </span>{" "}
                <IoIosArrowDown className="w-5 h-5" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-main-bg text-title rounded-box w-full max-w-sm text-[16px]"
              >
                <li className="hover:bg-second-bg cursor-pointer">
                  <button type="button" onClick={() => setLevel("Oson")}>
                    Oson
                  </button>
                </li>
                <li className="hover:bg-second-bg cursor-pointer">
                  <button type="button" onClick={() => setLevel("O'rta")}>
                    O'rta
                  </button>
                </li>
                <li className="hover:bg-second-bg cursor-pointer">
                  <button type="button" onClick={() => setLevel("Qiyin")}>
                    Qiyin
                  </button>
                </li>
              </ul>
            </div>
            <button className="btn max-w-md flex-1 whitespace-nowrap rounded-full border-none shadow-sm bg-blue-first text-white text-[16px] font-medium">
              Natijani ko'rsatish
            </button>
          </div>
        </div>
      )}
      {/* ===================== mobile filter section ======================================== */}
      {width <= 850 && (
        <div className="flex justify-between items-center gap-3   pe-0 bg-main-bg md:rounded-xl p-4">
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
                    <div className="dropdown w-full max-w-sm rounded-xl ">
                      <label
                        tabIndex={0}
                        className={`btn rounded-xl   max-w-sm bg-input-bg border-darslar-border shadow-none  flex justify-between font-medium text-[16px] ${
                          !subject ? "text-lighter-text" : "text-title"
                        } `}
                      >
                        <span>{subject || "Fanni tanlang"} </span>{" "}
                        <IoIosArrowDown className="w-5 h-5" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-main-bg text-title rounded-box w-full max-w-sm text-[16px]"
                      >
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setSubject("Matematika")}
                          >
                            Matematika
                          </button>
                        </li>
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setSubject("Ingliz tili")}
                          >
                            Ingliz tili
                          </button>
                        </li>
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setSubject("Fizika")}
                          >
                            Fizika
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown w-full max-w-sm ">
                      <label
                        tabIndex={0}
                        className={`btn rounded-xl shadow-none   max-w-sm bg-input-bg border-darslar-border  flex justify-between font-medium text-[16px] ${
                          !teacher ? "text-lighter-text" : "text-title"
                        } `}
                      >
                        <span>{teacher || "O'qituvchini tanlang"} </span>{" "}
                        <IoIosArrowDown className="w-5 h-5" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content text-title  menu p-2 shadow bg-main-bg rounded-box w-full max-w-sm text-[16px]"
                      >
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setTeacher("Durdona Qurbonova")}
                          >
                            Durdona Qurbonova
                          </button>
                        </li>
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setTeacher("Sevinch Mo'minova")}
                          >
                            Sevinch Mo'minova
                          </button>
                        </li>
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setTeacher("Alisher Usmonov")}
                          >
                            Alisher Usmonov
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown w-full max-w-sm  ">
                      <label
                        tabIndex={0}
                        className={`btn rounded-xl border-darslar-border shadow-none   max-w-sm bg-input-bg  flex justify-between font-medium text-[16px] ${
                          !level ? "text-lighter-text" : "text-title"
                        } `}
                      >
                        <span>{level || "Test darajasini tanlang"} </span>{" "}
                        <IoIosArrowDown className="w-5 h-5" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-main-bg text-title rounded-box w-full max-w-sm text-[16px]"
                      >
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setLevel("Oson")}
                          >
                            Oson
                          </button>
                        </li>
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setLevel("O'rta")}
                          >
                            O'rta
                          </button>
                        </li>
                        <li className="hover:bg-second-bg cursor-pointer">
                          <button
                            type="button"
                            onClick={() => setLevel("Qiyin")}
                          >
                            Qiyin
                          </button>
                        </li>
                      </ul>
                    </div>
                    <button className="btn flex-1 whitespace-nowrap rounded-full border-none shadow-sm bg-blue-first text-white text-[16px] font-medium">
                      Natijani ko'rsatish
                    </button>
                  </div>
                </Form>
              </ul>
            </div>
            <p className="  text-sm text-light-text">Filter</p>
          </div>
        </div>
      )}

      <div className="main-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 lg:gap-6  p-2 md:p-0 md:py-2 lg:py-6 ">
        {!data && (
          <div className="w-full h-[70vh] flex justify-center items-center">
            <span className="loading loading-spinner loading-xl text-success"></span>
          </div>
        )}
        {data.map((d) => {
          const isDisabled = d.holati === "Bajarilmagan";
          return (
            <div key={d.id} className="card rounded-xl bg-main-bg">
              <div className="card-header p-4 flex gap-4 items-center border-b border-darslar-border">
                <div className="image-container w-8 h-8 rounded-full overflow-hidden ">
                  <img src={image} className="h-full w-auto" alt="" />
                </div>
                <h2 className=" text-title font-semibold">{d.teacher}</h2>
              </div>
              <div className="card-body p-4 flex flex-col gap-4">
                <h2 className="text-lg text-title font-semibold">{d.mavzu}</h2>
                <div className="card-content flex  gap-3">
                  <div className="left flex flex-col gap-3 text-title font-medium">
                    <p>Savollar soni:</p>
                    <p>Qiyinlik darajasi:</p>
                    <p>Berilgan vaqt:</p>
                    <p>Holati:</p>
                  </div>
                  <div className="right text-lighter-text flex flex-col gap-3">
                    <p>{d.savollarSoni} ta</p>
                    <p>{d.qiyinlikDarajasi}</p>
                    <p>{d.berilganVaqt} daqiqa</p>
                    <p
                      className={`${
                        d.holati === "Bajarilmagan"
                          ? "text-[#FFA32B]"
                          : "text-[#00A34C]"
                      }`}
                    >
                      {d.holati}
                    </p>
                  </div>
                </div>
                <div className="buttons flex flex-col gap-2">
                  <Link
                    to="/student/test-page"
                    role="button"
                    className="btn border-none shadow-sm bg-blue-first text-white font-medium text-[16px] rounded-full"
                  >
                    {d.holati === "Bajarilmagan"
                      ? "Testni boshlash"
                      : "Qaytadan boshlash"}
                  </Link>
                  <button
                    disabled={isDisabled}
                    className="btn border-none shadow-sm bg-[#3B82F624] disabled:text-lighter-text text-blue-500 rounded-full text-[16px] font-medium"
                  >
                    Natijani bilish
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TestlarStudent;
