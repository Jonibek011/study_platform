import React, { useEffect, useState } from "react";
const tests = [
  {
    id: 1,
    savol: "Ushbu rasmdagi tenglamaning javobini toping",
    rasm: null,
    variants: [
      "22;6 akdfhakdhfalk fkadfkjahdf kajdfh kajdfha kfjhak dfja dfkajdhfkajdfh akjf akfh akdjfh akdjfhakjdf hakjdfhakfjhaskfhjaskdfjh",
      "11;-13",
      "-22;12",
      "1;33",
    ],
  },
  {
    id: 2,
    savol: "Ushbu rasmdagi tenglamaning javobini toping",
    rasm: null,
    variants: ["22;6", "11;-13", "-22;12", "1;33"],
  },
  {
    id: 3,
    savol: "Ushbu rasmdagi tenglamaning javobini toping",
    rasm: null,
    variants: ["22;6", "11;-13", "-22;12", "1;33"],
  },
  {
    id: 4,
    savol: "Ushbu rasmdagi tenglamaning javobini toping",
    rasm: null,
    variants: ["22;6", "11;-13", "-22;12", "1;33"],
  },
];

import { useNavigate } from "react-router-dom";
//components
import Modal from "../../components/Modal";
import DonutChart from "../../components/student/DonutChart";
import image from "../../assets/student/testlar/Rectangle 397.png";
function TestPage() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const savollar = 25;
    const newArr = [];
    for (let i = 1; i <= savollar; i++) {
      newArr.push(i);
    }

    setArr(newArr);
  }, []);

  const handleChange = (id, value) => {
    setSelectedAnswers((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const navigation = useNavigate();
  return (
    <section className="w-full relative h-full overflow-y-auto bg-main-bg lg:bg-second-bg md:rounded-xl flex flex-col gap-5 lg:flex-row md:py-3">
      <div className="main-tests w-full flex-1 flex flex-col gap-5">
        {tests.map((test, index) => {
          return (
            <div
              key={test.id}
              className="p-5 border-b lg:border-none rounded-xl bg-main-bg border-darslar-border flex flex-col gap-3 "
            >
              <h className="text-title">
                <span className="font-semibold">{index + 1}-savol:</span>{" "}
                <span className="text-lg font-semibold">{test.savol}</span>
              </h>
              <div className="savol-rasmi w-[70%] mx-auto overflow-hidden h-auto max-h-[300px] flex justify-center items-center">
                <img src={image} alt="" className="max-w-full max-h-full" />
              </div>
              <div className="variantlar flex flex-col gap-2">
                {test.variants.map((variant, index) => {
                  return (
                    <div key={index} className="">
                      <label
                        className={`border flex gap-3 px-2 py-2 rounded-xl border-darslar-border  w-full ${
                          selectedAnswers[test.id] === variant
                            ? "bg-[#3B82F624]"
                            : "bg-input-bg"
                        }  `}
                      >
                        <input
                          type="radio"
                          name={`variant-${test.id}`}
                          className="radio  text-light-text checked:text-blue-first"
                          value={variant}
                          onChange={() => handleChange(test.id, variant)}
                        />
                        <span className="text-title">{variant}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="right lg:sticky top-0 right-0 flex flex-col gap-5 p-4 lg:p-0  w-full lg:w-[45%] xl:w-[30%]">
        <div className="test-numbers bg-main-bg rounded-xl border lg:border-none border-darslar-border shadow ">
          <h2 className="text-lg text-title font-semibold px-4 py-8 border-b border-b-darslar-border">
            Matematika I va II boblar
          </h2>
          <div className="p-4 flex gap-4 flex-wrap">
            {arr.map((a) => {
              return (
                <div
                  key={a}
                  className={`w-10 h-10 rounded-md  border border-darslar-border flex justify-center items-center ${
                    a < 5 ? "bg-blue-first text-white" : "bg-main-bg text-title"
                  }`}
                >
                  {a}
                </div>
              );
            })}
          </div>
        </div>
        <div className="time bg-main-bg rounded-xl border lg:border-none border-darslar-border shadow flex flex-col gap-5 py-8">
          <div className="flex gap-5 ">
            <div className="flex flex-col gap-1 px-5 flex-1 justify-center items-center">
              <p className=" text-light-text">Qolgan vaqt</p>
              <p className="text-xl text-title font-semibold">00:22:50</p>
            </div>
            <div className="flex-1 flex justify-center items-center flex-col gap-1">
              <p className="text-light-text">Belgilangan javoblar</p>
              <p className="text-xl text-title font-semibold">4</p>
            </div>
          </div>
          <div className="px-4">
            <button
              onClick={() =>
                document.getElementById("end-test-modal").showModal()
              }
              className="btn w-full rounded-full border-none shadow-sm bg-blue-first text-white text-[16px] font-medium"
            >
              Testni yakunlash
            </button>
          </div>
        </div>
      </div>
      <Modal id="end-test-modal" className="max-w-md">
        <h2 className="text-2xl text-title font-semibold text-center py-10">
          Testni yakunlashni hohlaysizmi?
        </h2>
        <div className="buttons flex justify-center items-center gap-5">
          <button
            onClick={() => document.getElementById("end-test-modal").close()}
            className="btn shadow-sm border-none font-medium rounded-full bg-[#3B82F624] text-blue-500 btn-sm px-6 text-[14px] "
          >
            Yo'q, orqaga qaytish
          </button>
          <button
            onClick={() => {
              document.getElementById("natijalar-modal").showModal();
              document.getElementById("end-test-modal").close();
            }}
            className="btn border-none shadow-sm font-medium btn-sm rounded-full bg-blue-first text-white px-6 text-[14px]"
          >
            Ha, tugatish
          </button>
        </div>
      </Modal>

      <Modal
        xmark={true}
        id="natijalar-modal"
        className="max-w-5xl w-[90%] max-h-[80vh] sm:w-[80%] flex flex-col gap-5"
      >
        <h2 className="font-semibold text-title"> Test natijalari</h2>
        <div className=" flex justify-center items-center">
          <DonutChart />
        </div>
        <div className="statistics flex items-center justify-evenly mt-5 flex-col gap-4 sm:flex-row sm:gap-0">
          <div className="flex flex-col gap-2 text-center border-b border-darslar-border w-[70%] sm:border-none sm:w-auto">
            <p className="text-title">Sarflangan vaqt:</p>
            <h2 className="text-3xl text-title font-semibold">17 min.</h2>
          </div>
          <div className="flex flex-col gap-2 text-center  border-b border-darslar-border w-[70%] sm:border-none sm:w-auto">
            <p className="text-title">Natija:</p>
            <h2 className="text-3xl text-title font-semibold">80%</h2>
          </div>
          <div className="flex flex-col gap-2 text-center  border-b border-darslar-border w-[70%] sm:border-none sm:w-auto">
            <p className="text-title">Tashlab ketilgan javoblar:</p>
            <h2 className="text-3xl text-title font-semibold">0</h2>
          </div>
        </div>
        <h2 className="text-title font-semibold">Javoblar</h2>
        <div className="flex gap-4 flex-wrap">
          {arr.map((a) => {
            return (
              <span
                className={`w-10 h-10 rounded-md flex justify-center items-center text-white  ${
                  a === 8 || a === 18 || a === 23
                    ? "bg-[#EF4444]"
                    : "bg-[#10B981]"
                }`}
              >
                {a}
              </span>
            );
          })}
        </div>
        <button
          onClick={() => {
            document.getElementById("natijalar-modal").close();
            navigation("/student/testlar");
          }}
          className="btn border-none shadow-none bg-blue-first text-white text-[16px] font-medium"
        >
          Yakunlash
        </button>
      </Modal>
    </section>
  );
}

export default TestPage;
