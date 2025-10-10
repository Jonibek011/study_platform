import React from "react";
import card1 from "../../assets/student/darslar/Rectangle 24.png";
import card2 from "../../assets/student/darslar/Gemetriya.png";
import card3 from "../../assets/student/darslar/matematika-2-modul.png";
import teacherPhoto from "../../assets/teacher/dashboard/Ellipse 5.png";
//icons
import { FaRegTrashAlt } from "react-icons/fa";

import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiExternalLinkLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import Modal from "../../components/Modal";
//hooks
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
const mavjud_darslar = [
  {
    id: 1,
    photoURL: card1,
    teacherName: "Dildora Tojiyeva",
    darsNomi: "Matematika 1-modul",
    description: "Algebra asoslari va amaliy misollar",
    xolati: "Boshlang'ich",
  },
  {
    id: 2,
    photoURL: card2,
    teacherName: "Dildora Tojiyeva",
    darsNomi: "Geometriyaga kirish",
    description: "Shakllar bilan tanishish",
    xolati: "Boshlang'ich",
  },
  {
    id: 3,
    photoURL: card3,
    teacherName: "Dildora Tojiyeva",
    darsNomi: "Matematika 2-modul",
    description: "Triganometriya va tenglamalar",
    xolati: "Boshlang'ich",
  },
];
function DarsYaratish() {
  const { width } = useWindowSize();
  return (
    <section className="flex relative  flex-col gap-1 md:gap-5 -mt-4 sm:mt-0 h-full overflow-y-auto ">
      <div className="dars-yaratish   sm:rounded-xl bg-main-bg py-5 px-3 flex justify-between items-center">
        <h2 className="text-title text-xl font-semibold">Dars yaratish</h2>
        <Link
          to="step1"
          className="btn rounded-full  px-8 bg-blue-first hover:bg-blue-first text-white font-normal"
        >
          +Yangi dars yaratish
        </Link>
      </div>
      <div
        className={`mavjud-darslar rounded-xl p-3  bg-second-bg flex  flex-col gap-3 md:gap-5 ${
          width > 1360 && "h-full"
        }`}
      >
        <div className="sarlavha text-xl font-semibold text-title">
          Mavjud darslar
        </div>
        <div
          className={`card-section gap-5  rounded-xl grid grid-cols-1 ${
            width > 640 && width < 768 && "grid-cols-2"
          } ${width > 767 && width < 1024 && "grid-cols-1"}  ${
            width > 1024 && width < 1360 && "grid-cols-2"
          }  ${width > 1360 && "grid-cols-3"}`}
        >
          {mavjud_darslar.map((dars) => {
            return (
              <div
                key={dars.id}
                className="card  shadow-md border-none overflow-hidden bg-main-bg rounded-xl "
              >
                <div className="card-img relative w-full h-[200px] md:h-[250px] ">
                  <img src={dars.photoURL} className="w-full h-full" alt="" />
                  <div className="absolute left-2 bottom-3 flex gap-2 items-center">
                    <img
                      src={teacherPhoto}
                      className="w-7 h-7 rounded-full"
                      alt=""
                    />
                    <span className="text-white">{dars.teacherName}</span>
                    <Link className="text-white">
                      <RiExternalLinkLine className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <div className="card-body p-4 flex flex-col gap-4 relative">
                  <span className="badge text-[#3B82F6] absolute top-2 right-2 border-none bg-transparent  font-medium">
                    {dars.xolati}
                  </span>
                  <h2 className="text-lg md:text-xl text-title font-semibold ">
                    {dars.darsNomi}
                  </h2>
                  <p className="text-lightest-text md:text-lg -mt-3">
                    {dars.description}
                  </p>
                  <div className="buttons flex justify-end items-center gap-4">
                    <button className="btn text-[#3B82F6] bg-[#3B82F624] md:text-lg border-none shadow-none">
                      <MdOutlineEdit className="w-6 h-6" /> Tahrirlash
                    </button>
                    <button
                      onClick={() =>
                        document
                          .getElementById("darsYaratish-delete-modal")
                          .showModal()
                      }
                      className="btn text-[#E44646] bg-[#FF000024] md:text-lg border-none shadow-none"
                    >
                      <RiDeleteBin6Line className="w-5 h-5" /> O'chirish
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal id="darsYaratish-delete-modal" className="max-w-md">
        <div className="flex flex-col gap-5">
          <div className="w-full flex justify-center">
            <span className="  w-16 h-16 flex rounded-full  justify-center items-center bg-[#FFCECE] text-[#F90000]">
              <FaRegTrashAlt className="w-7 h-7" />
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-title  text-center ">
              Haqiqatdan bu mavzuni
            </h2>
            <h2 className="text-xl font-bold text-title  text-center ">
              o'chirmoqchimisiz?
            </h2>
          </div>
          <div className="buttons flex justify-center gap-5">
            <button className="btn px-7 bg-[#3B82F624] text-blue-first hover:text-blue-first  rounded-full shadow-sm border-none ">
              Bekor qilish
            </button>
            <button className="btn rounded-full border-none shadow-sm bg-[#FFCECE] px-7  text-[#FF0000] ">
              O`chirish
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default DarsYaratish;
