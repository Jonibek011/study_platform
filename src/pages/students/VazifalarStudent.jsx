import React, { useState } from "react";
import { Form } from "react-router-dom";
import image from "../../assets/teacher/dashboard/Ellipse 5.png";
//icons
import { BiSearch } from "react-icons/bi";
import { LiaSlidersHSolid } from "react-icons/lia";
import { FaArrowLeftLong } from "react-icons/fa6";

//components
import Modal from "../../components/Modal";
import UploadTask from "../../components/student/UploadTask";
import RejectTask from "../../components/student/RejectTask";
import SuccessTask from "../../components/student/SuccessTask";

//toolbar
import RichToolbar from "../../components/student/RichToolbar";
//use window size
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
const data = [
  {
    mavzu: "Algebra-3,5-topshiriqlar",
    savol: "Chiziqli tenglamalar va ularni grafik usulda yeching",
    oqituvchi: "Dildora Tojiyeva",
    muddati: "21.08.2025",
    status: "Ko'rilmagan",
  },
  {
    mavzu: "Fizika: Harakat qonunlari",
    savol: "Chiziqli tenglamalar va ularni grafik usulda yeching",
    oqituvchi: "Feruza Jonibekova",
    muddati: "21.08.2025",
    status: "Ko'rilmagan",
  },
  {
    mavzu: "Ingliz tili: Present Simple Tense",
    savol: "Chiziqli tenglamalar va ularni grafik usulda yeching",
    oqituvchi: "Nasiba To'raboyeva",
    muddati: "21.08.2025",
    status: "Ko'rilmagan",
  },
  {
    mavzu: "Ingliz tili: Present Continuous Tense",
    savol: "Chiziqli tenglamalar va ularni grafik usulda yeching",
    oqituvchi: "Nasiba To'rayeva",
    muddati: "15.07.2025",
    status: "Yuborilgan",
  },
  {
    mavzu: "Biologiya: O'simliklarning tuzilishi",
    savol: "Chiziqli tenglamalar va ularni grafik usulda yeching",
    oqituvchi: "Ra`no Yusupova",
    muddati: "21.07.2025",
    status: "Yuborilgan",
  },
  {
    mavzu: "Algebra: Kasrlarni qo'shish",
    savol: "Chiziqli tenglamalar va ularni grafik usulda yeching",
    oqituvchi: "Dildora Tojiyeva",
    muddati: "27.07.2025",
    status: "Yuborilgan",
  },
  {
    mavzu: "Fizika: Mexanik Harakat",
    savol: "Chiziqli tenglamalar va ularni grafik usulda yeching",
    oqituvchi: "Feruza Jonibekova",
    muddati: "27.07.2025",
    status: "Yuborilgan",
  },
  {
    mavzu: "Algebra: Kasrlarni ko'paytirish",
    savol: "Chiziqli tenglamalar va ularni grafik usulda yeching",
    oqituvchi: "Dildora Tojiyeva",
    muddati: "21.07.2025",
    status: "Yuborilgan",
  },
];
function VazifalarStudent() {
  const { width } = useWindowSize();
  const [modalTheme, setModalTheme] = useState(null);

  const handleButtonClick = (mavzu) => {
    const item = data.find((d) => d.mavzu === mavzu);
    setModalTheme(item);
    document.getElementById("vazifa-yuklash-modal").showModal();
  };

  return (
    <>
      <section className="flex flex-col gap-5 h-full overflow-y-auto">
        {width > 800 && (
          <div className=" filter-section max-w-[1000px]  rounded-xl bg-main-bg shadow-sm p-4 flex flex-col gap-3">
            <h2 className="text-title text-lg font-semibold">Filter</h2>
            <div className="">
              <Form method="post" className="flex gap-5">
                <select
                  required
                  className="select rounded-xl  bg-input-bg  text-lightest-text invalid:text-lightest-text valid:text-title focus:outline-none focus:border-input-border"
                >
                  <option value="" disabled selected hidden>
                    Fanni tanlang
                  </option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>

                <input
                  type="date"
                  className="input bg-input-bg text-lighter-text rounded-xl focus:outline-none focus:ring-0 focus:border-input-border focus:shadow-none"
                  placeholder="Sanani tanlang"
                />

                <button className="btn whitespace-nowrap border-none shadow-sm bg-blue-first text-white rounded-xl font-normal text-[16px] flex-1">
                  Natijani ko'rsatish
                </button>
              </Form>
            </div>
          </div>
        )}

        {width <= 800 && (
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
                      <select
                        required
                        className="select rounded-xl  bg-input-bg  text-lightest-text invalid:text-lightest-text valid:text-title focus:outline-none focus:border-input-border"
                      >
                        <option value="" disabled selected hidden>
                          Fanni tanlang
                        </option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                      </select>

                      <input
                        type="date"
                        className="input bg-input-bg text-lighter-text rounded-xl focus:outline-none focus:ring-0 focus:border-input-border focus:shadow-none"
                        placeholder="Sanani tanlang"
                      />

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
        )}

        {width > 800 && (
          <div className="w-full overflow-x-auto px-2 md:px-0">
            <div className="table-section w-full min-w-[800px] ">
              <table className="table border-collapse border overflow-hidden rounded-xl  bg-main-bg">
                <thead className="bg-table-hover ">
                  <tr className=" text-title xl:text-[16px]">
                    <th className="border border-darslar-border lg:ps-9">
                      Mavzu
                    </th>
                    <th className="border border-darslar-border">O'qituvchi</th>
                    <th className="border border-darslar-border text-center">
                      Muddati
                    </th>
                    <th className="border border-darslar-border text-center">
                      Status
                    </th>
                    <th className="border border-darslar-border text-center">
                      Amal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d) => {
                    return (
                      <tr className="text-title xl:text-[16px]">
                        <td className="border border-darslar-border lg:ps-9">
                          {d.mavzu}
                        </td>
                        <td className="border border-darslar-border">
                          <div className=" flex items-center gap-3">
                            <img
                              src={image}
                              className="w-7 h-7 rounded-full"
                              alt=""
                            />
                            {d.oqituvchi}
                          </div>
                        </td>
                        <td className="border border-darslar-border text-center">
                          {d.muddati}
                        </td>
                        <td
                          className={`border border-darslar-border text-center ${
                            d.status === "Ko'rilmagan"
                              ? "text-[#EA9903]"
                              : "text-[#00A34C]"
                          } `}
                        >
                          {d.status}
                        </td>
                        <td
                          onClick={() => handleButtonClick(d.mavzu)}
                          className="border cursor-pointer underline text-[#374DBC] font-semibold border-darslar-border text-center"
                        >
                          Ko'rish
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {width <= 800 && (
          <div className="flex flex-col gap-3 px-2 ">
            {data.map((d) => {
              return (
                <div
                  key={d.mavzu}
                  className="card rounded-xl bg-main-bg p-3 flex flex-col gap-2"
                >
                  <div className="teacher-image flex gap-3 items-center">
                    <div className="w-7 h-7 rounded-full overflow-hidden">
                      <img src={image} className="h-full" alt="" />
                    </div>
                    <p className="text-light-text">{d.oqituvchi}</p>
                  </div>
                  <h2 className="text-xl font-semibold text-title">
                    {d.mavzu}
                  </h2>
                  <p className="text-lighter-text">{d.muddati}</p>
                  <div className="flex justify-between">
                    <p
                      className={`${
                        d.status === "Yuborilgan"
                          ? "text-student-task-status-green"
                          : "text-[#EA9903]"
                      }`}
                    >
                      {d.status}
                    </p>
                    <button
                      onClick={handleButtonClick}
                      className="underline font-semibold text-[#374DBC]"
                    >
                      Ko'rish
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
      <Modal
        id="vazifa-yuklash-modal"
        className="absolute rounded-none md:rounded-xl top-[90px] left-0 w-full h-[calc(100vh-90px)] md:h-auto md:static md:w-[85%]  max-w-7xl"
        buttonClass="btn-lg text-red-500 font-semibold text-xl"
      >
        <div className="flex flex-col gap-3 lg:px-5">
          <button
            onClick={() =>
              document.getElementById("vazifa-yuklash-modal").close()
            }
            className="text-[#374DBC] self-start md:hidden flex gap-1 items-center"
          >
            <FaArrowLeftLong /> Orqaga
          </button>
          <h2 className="text-title font-semibold text-lg sm:text-xl">
            {modalTheme?.mavzu}
          </h2>
          <div className="flex gap-2 md:gap-7 flex-col md:flex-row">
            <p className="text-light-text text-sm sm:text-[16px]">
              Savol: {modalTheme?.savol}
            </p>
            <button className="self-start text-blue-first underline cursor-pointer whitespace-nowrap text-sm md:text-[16px]">
              Manbani yuklab olish
            </button>
          </div>
          <hr className="text-darslar-border mt-3" />
        </div>
        <div className="modal-content w-full  ">
          <UploadTask />
          {/* <RejectTask /> */}
          {/* <SuccessTask /> */}
        </div>
      </Modal>
    </>
  );
}

export default VazifalarStudent;
