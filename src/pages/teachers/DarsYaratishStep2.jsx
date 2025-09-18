import React from "react";
import image from "../../assets/teacher/darsYaratish/Rectangle 399.png";
import playImage from "../../assets/teacher/darsYaratish/Frame 5262.png";

import { useNavigate } from "react-router-dom";
//components
import FileDrop from "../../components/teacher/FileDrop";
//icons
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoArrowUpSharp, IoArrowDownSharp } from "react-icons/io5";
//modal
import Modal from "../../components/Modal";
//rrd
import { Form } from "react-router-dom";
//react-hook-form
import { useForm, Controller } from "react-hook-form";
const data = [
  {
    id: 1,
    image,
    playImage,
    title: "Kvadrat tengsizlikni kvadrat funksiya yordamida yechish",
    duration: "32 daqiqa 23 soniya",
  },
  {
    id: 2,
    image,
    playImage,
    title: "Kvadrat tengsizlikni kvadrat funksiya yordamida yechish",
    duration: "32 daqiqa 23 soniya",
  },
  {
    id: 3,
    image,
    playImage,
    title: "Kvadrat tengsizlikni kvadrat funksiya yordamida yechish",
    duration: "32 daqiqa 23 soniya",
  },
  {
    id: 4,
    image,
    playImage,
    title: "Kvadrat tengsizlikni kvadrat funksiya yordamida yechish",
    duration: "32 daqiqa 23 soniya",
  },
];

//main function
function DarsYaratishStep2() {
  const { register, control, reset, handleSubmit } = useForm();
  const navigation = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClick = () => {
    navigation("/teacher/darslar/step3");
  };
  return (
    <section className="max-w-[1200px] flex flex-col gap-5 w-full h-full  md:rounded-xl p-3 md:p-8 bg-main-bg ">
      <div className="steps  w-full h-28 py-4  flex flex-col gap-5">
        <div className="step-container rounded-full  relative w-[85%]  lg:w-[70%] h-1 md:h-2 ml-2   sm:ml-8 bg-[#DFE5EF] flex justify-between items-center">
          <div className="absolute top-0 left-0 w-[50%] h-full bg-blue-first z-0"></div>
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
          <span className="z-10 w-7 h-7 md:w-10 md:h-10 relative rounded-full bg-main-bg text-lightest-text border-2 border-[#DFE5EF] flex justify-center items-center text-lg ">
            <span className="absolute -bottom-12 lg:-bottom-8  text-lightest-text font-semibold  text-[12px] sm:text-sm w-[100px] lg:w-[200px] text-center ">
              Tekshirish va saqlash
            </span>
            3
          </span>
        </div>
      </div>
      <div className="button-section flex justify-between flex-col lg:flex-row gap-5">
        <div>
          <h2 className="text-xl font-bold text-title">Mavzular</h2>
          <p className="text-sm text-lightest-text">
            Har mavzu uchun bir video
          </p>
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={() => document.getElementById("modal-video").showModal()}
            className="btn btn-sm sm:btn-md bg-green-button hover:bg-green-button rounded-full px-7 text-white font-medium border-none shadow-sm"
          >
            + Yangi mavzu qo`shish
          </button>
          <button
            onClick={handleClick}
            className="btn btn-sm sm:btn-md rounded-full bg-blue-first text-white shadow-sm border-none px-7 font-medium"
          >
            Keyingi
          </button>
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
                  src={d.image}
                  className="w-[140px] h-full relative z-10"
                  alt=""
                />
                <img
                  src={d.playImage}
                  className="absolute w-6 h-6 top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 "
                  alt=""
                />
                <p className="sm:hidden  lg:hidden md:flex flex-col">
                  <span className="text-sm whitespace-nowrap text-lightest-text">
                    Video davomiyligi:
                  </span>
                  <span className="text-sm text-lighter-text">32 daqiqa</span>
                </p>
              </div>
              <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between w-full h-full">
                <div>
                  <h2 className="text-lg xl:text-xl font-semibold text-title">
                    {index + 1}. {d.title}
                  </h2>
                  <p className="hidden sm:block md:hidden lg:block">
                    <span className="text-sm text-lightest-text">
                      Video davomiyligi:
                    </span>{" "}
                    <span className="text-light-text text-sm">
                      {d.duration}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end lg:grid lg:grid-cols-2 gap-2 ">
                  <span className=" w-8 h-8 flex rounded-md justify-center items-center bg-[#DADFFF] text-[#1500FF]">
                    <MdOutlineModeEditOutline className="w-5 h-5" />
                  </span>
                  <span
                    onClick={() =>
                      document
                        .getElementById("darsYaratish2-delete-modal")
                        .showModal()
                    }
                    className=" cursor-pointer w-8 h-8 flex rounded-md justify-center items-center bg-[#FFCECE] text-[#F90000]"
                  >
                    <FaRegTrashAlt className="w-5 h-5" />
                  </span>
                  <span className=" w-8 h-8 flex rounded-md justify-center items-center bg-[#3E3AA424] text-[#717171]">
                    <IoArrowUpSharp className="w-5 h-5" />
                  </span>
                  <span className=" w-8 h-8 flex rounded-md justify-center items-center bg-[#3E3AA424] text-[#717171]">
                    <IoArrowDownSharp className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal id="modal-video">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-title font-bold">
            Dars mavzusini va videosini joylang
          </h2>
          <Form
            method="post"
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="flex-flex-col w-full">
              <span className="text-sm text-title">
                Dars mavzusini kiriting
              </span>
              <input
                required
                {...register("mavzu")}
                type="text"
                className="input w-full bg-input-bg"
              />
            </label>
            <Controller
              control={control}
              name="file"
              render={({ field }) => (
                <FileDrop
                  onFile={(file) => field.onChange(file)}
                  accept="video/*"
                  title="Dars videosini yuklang"
                />
              )}
            />
            <div
              type="button"
              onClick={() => document.getElementById("modal-video").close()}
              className="buttons flex justify-end gap-4"
            >
              <button className="btn px-7 bg-[#3B82F624] text-blue-first hover:text-blue-first font-medium rounded-full shadow-sm border-none ">
                Bekor qilish
              </button>
              <button className="btn text-white bg-blue-first hover:bg-blue-first rounded-full px-7 font-medium shadow-sm border-none">
                Qo'shish
              </button>
            </div>
          </Form>
        </div>
      </Modal>

      <Modal id="darsYaratish2-delete-modal" className="max-w-md">
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
            <button
              onClick={() =>
                document.getElementById("darsYaratish2-delete-modal").close()
              }
              className="btn px-7 bg-[#3B82F624] text-blue-first hover:text-blue-first  rounded-full shadow-sm border-none "
            >
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

export default DarsYaratishStep2;
