import React, { useState } from "react";
import image from "../../assets/teacher/dashboard/Ellipse 5.png";
const data = [
  {
    fanNomi: "Matematika I va II boblar",
    savollarSoni: 25,
    qiyinlikDarajasi: "O`rta",
    berilganVaqt: 30,
  },
  {
    fanNomi: "Fizika fanidan",
    savollarSoni: 25,
    qiyinlikDarajasi: "Murakkab",
    berilganVaqt: 30,
  },
  {
    fanNomi: "Geometriya 10-15-mavzular",
    savollarSoni: 25,
    qiyinlikDarajasi: "O`rta",
    berilganVaqt: 30,
  },
  {
    fanNomi: "Matematika III bob",
    savollarSoni: 25,
    qiyinlikDarajasi: "O`rta",
    berilganVaqt: 30,
  },
];

//context
import { TeacherContext } from "../../context/TeacherContext";
import { useContextSelector } from "use-context-selector";
//icons
import { FaRegTrashAlt } from "react-icons/fa";

import { MdOutlineEdit } from "react-icons/md";
//components
import Modal from "../../components/Modal";

//rrd
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//react hook form
import { useForm } from "react-hook-form";
//main function
function TestYaratish() {
  const dispatch = useContextSelector(TeacherContext, (ctx) => ctx.dispatch);
  const { register, reset, handleSubmit } = useForm();
  const [mapData, setMapData] = useState(data);
  const [deleteElement, setDeleteElement] = useState(null);
  const navigation = useNavigate();

  //onSubmit
  const onSubmit = (inputs) => {
    setMapData((prev) => {
      return [
        ...prev,
        {
          fanNomi: inputs.title,
          savollarSoni: inputs.savollarSoni,
          qiyinlikDarajasi: inputs.daraja,
          berilganVaqt: inputs.berilganVaqt,
        },
      ];
    });
    reset();
    document.getElementById("yangiTestYaratish-modal").close();
    dispatch({ type: "CURRENTTEST", payload: inputs });
    navigation("/teacher/test-yaratish");
  };

  const handleDelete = (title) => {
    const data = mapData.filter((d) => d.fanNomi !== title);
    setMapData(data);
    document.getElementById("testYaratish-modal").close();
  };
  return (
    <section className="w-full overflow-y-auto h-full flex flex-col gap-5">
      <div className="test-yaratish rounded-xl bg-main-bg p-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-title">Topshiriq yaratish</h2>
        <div>
          <button
            onClick={() =>
              document.getElementById("yangiTestYaratish-modal").showModal()
            }
            className="btn border-none whitespace-nowrap shadow-sm rounded-full text-white font-medium px-7 bg-blue-first hover:bg-blue-first"
          >
            + Yangi topshiriq yaratish
          </button>
        </div>
      </div>

      <div className="topshiriqlar flex flex-col gap-5">
        <h2 className="text-xl text-title font-semibold">
          Mavjud topshiriqlar
        </h2>
        {!data && (
          <span className=" w-full h-[40vh] flex justify-center items-center text-2xl font-semibold opacity-40">
            🤷‍♂️Topshiriqlar mavjud emas!
          </span>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {mapData.map((d) => {
            return (
              <div key={d.fanNomi} className="card rounded-lg bg-main-bg">
                <div className="teacher flex items-center gap-3 p-4 border-b border-header-border">
                  <div className="image w-8 h-8 rounded-full overflow-hidden">
                    <img src={image} className="w-full h-full" alt="" />
                  </div>
                  <h2 className="text-lg text-title font-medium">
                    Dildora Tojiyeva
                  </h2>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <h2 className="text-xl text-title font-semibold">
                    {d.fanNomi}
                  </h2>
                  <div className="flex gap-5 ">
                    <div>
                      <p className="text-title">Savollar soni:</p>
                      <p className="text-title">Qiyinlik darajasi:</p>
                      <p className="text-title">Bajarilgan vaqt:</p>
                    </div>
                    <div>
                      <p className="text-lighter-text">{d.savollarSoni} ta</p>
                      <p className="text-lighter-text">{d.qiyinlikDarajasi}</p>
                      <p className="text-lighter-text">
                        {d.berilganVaqt} daqiqa
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <button className="btn  btn-sm text-[16px] bg-[#3B82F624] text-[#3B82F6] hover:text-[#3B82F6]  rounded-md shadow-sm border-none ">
                      <MdOutlineEdit className="w-5 h-5" /> Taxrirlash
                    </button>
                    <button
                      onClick={() => {
                        setDeleteElement(d.fanNomi);
                        document
                          .getElementById("testYaratish-modal")
                          .showModal();
                      }}
                      className="btn rounded-md text-[16px] btn-sm border-none shadow-sm bg-[#FF000024]   text-[#FF0000] "
                    >
                      <FaRegTrashAlt /> O`chirish
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal id="testYaratish-modal" className="max-w-md">
        <div className="flex flex-col gap-5">
          <div className="w-full flex justify-center">
            <span className="  w-16 h-16 flex rounded-full  justify-center items-center bg-[#FFCECE] text-[#F90000]">
              <FaRegTrashAlt className="w-7 h-7" />
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-title  text-center ">
              Haqiqatdan bu topshiriqni
            </h2>
            <h2 className="text-xl font-bold text-title  text-center ">
              o'chirmoqchimisiz?
            </h2>
          </div>
          <div className="buttons flex justify-center gap-5">
            <button
              onClick={() =>
                document.getElementById("testYaratish-modal").close()
              }
              className="btn px-7 bg-[#3B82F624] text-blue-first hover:text-blue-first  rounded-full shadow-sm border-none "
            >
              Bekor qilish
            </button>
            <button
              onClick={() => handleDelete(deleteElement)}
              className="btn rounded-full border-none shadow-sm bg-[#FFCECE] px-7  text-[#FF0000] "
            >
              O`chirish
            </button>
          </div>
        </div>
      </Modal>

      <Modal id="yangiTestYaratish-modal">
        <div className="flex flex-col gap-5">
          <h2 className="text-title text-xl font-semibold">
            Topshiriq yaratish
          </h2>
          <Form
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <label className="flex flex-col gap-1">
              <span className="text-title text-sm">
                Topshiriq nomini kiriting
              </span>
              <input
                required
                type="text"
                {...register("title")}
                className="input w-full bg-input-bg focus:outline-none focus:ring-none focus:border-2 rounded-lg placeholder:text-lightest-text"
                placeholder="Masalan, Fizika I bob"
              />
            </label>

            <label className="flex flex-col gap-1 w-full">
              <span className="text-title text-sm">Fanni kiriting</span>
              <select
                {...register("fan")}
                required
                className="select bg-input-bg rounded-lg text-lightest-text invalid:text-lightest-text valid:text-title w-full focus:outline-none focus:border-2 "
              >
                <option value="" disabled selected hidden>
                  Fanni tanlang
                </option>
                <option>Algebra</option>
                <option>Geometriya</option>
                <option>Fizika</option>
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-title text-sm">
                Savollar sonini kiriting
              </span>
              <input
                required
                type="text"
                {...register("savollarSoni")}
                className="input bg-input-bg w-full focus:outline-none focus:ring-none focus:border-2 rounded-lg placeholder:text-lightest-text"
                placeholder="Masalan, 30"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-title text-sm">Daraja</span>
              <input
                required
                type="text"
                {...register("daraja")}
                className="input bg-input-bg w-full focus:outline-none focus:ring-none focus:border-2 rounded-lg placeholder:text-lightest-text"
                placeholder="Masalan, o`rta"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-title text-sm">Vaqt (daqiqa)</span>
              <input
                required
                type="number"
                step="any"
                {...register("berilganVaqt")}
                className="input bg-input-bg w-full focus:outline-none focus:ring-none focus:border-2 rounded-lg placeholder:text-lightest-text"
                placeholder="0"
              />
            </label>

            <div className="buttons flex justify-end gap-4 ">
              <button
                onClick={() => {
                  reset();
                  document.getElementById("yangiTestYaratish-modal").close();
                }}
                className="px-7 btn border-none shadow-sm font-medium text-[16px] rounded-full text-[#3B82F6] bg-[#3B82F624] "
              >
                Bekor qilish
              </button>
              <button className="btn border-none shadow-sm font-medium text-[16px] bg-[#3B82F6] text-white rounded-full px-7 ">
                Yaratish
              </button>
            </div>
          </Form>
        </div>
      </Modal>
    </section>
  );
}

export default TestYaratish;
