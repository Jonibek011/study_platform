import React, { useEffect, useRef, useState } from "react";
import { TeacherContext } from "../../context/TeacherContext";
import { useContextSelector } from "use-context-selector";
import { Form, useNavigate } from "react-router-dom";

//toast
import toast from "react-hot-toast";
import { CiSaveUp1 } from "react-icons/ci";
//main function
function TestYaratishStep2() {
  const navigation = useNavigate();
  const currentTestPage = useContextSelector(
    TeacherContext,
    (ctx) => ctx.currentTestPage
  );
  const [arr, setArr] = useState([]);
  const [rasmYuklangan, setRasmYuklangan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savolRaqami, setSavolRaqami] = useState(1);
  const [variant1, setVariant1] = useState(false);
  const [variant2, setVariant2] = useState(false);
  const [variant3, setVariant3] = useState(false);
  const [variant4, setVariant4] = useState(false);
  const fileInputRef = useRef();
  const formRef = useRef();

  if (currentTestPage === null) {
    return navigation("/teacher/testlar");
  }

  //kutish rejimini ko'rsatish uchun delay function

  useEffect(() => {
    const savollar = Number(currentTestPage.savollarSoni);
    const newArr = [];
    for (let i = 1; i <= savollar; i++) {
      newArr.push(i);
    }

    setArr(newArr);
  }, [currentTestPage]);

  //file input ochilishi
  const handleClick = () => {
    fileInputRef.current.click();
  };

  //rasm yuklanganda bo'ladigan o'zgarish
  const handleChange = () => {
    // TO'G'RI TEKSHIRUV: files.length
    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      setRasmYuklangan(true);
    } else {
      setRasmYuklangan(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (e.currentTarget && typeof e.currentTarget.reset === "function") {
        e.currentTarget.reset();
      } else if (
        formRef.current &&
        typeof formRef.current.reset === "function"
      ) {
        formRef.current.reset();
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setRasmYuklangan(false);
      setLoading(false);
      toast.success("Saqlandi!");
      setSavolRaqami((prev) => prev + 1);
    }, 1500);
  };

  return (
    <section className="w-full h-full xl:h-auto md:rounded-xl bg-main-bg  overflow-y-auto">
      <div className="flex flex-col xl:flex-row ">
        <div className="p-5 flex-2 xl:border-e xl:border-e-darslar-border order-2 xl:order-1 ">
          <h2 className="text-xl font-semibold text-title">
            {savolRaqami <= Number(currentTestPage.savollarSoni)
              ? `${savolRaqami}-savolni kiriting`
              : "savol kiritish imkoni tugatildi"}
          </h2>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
            method="post"
          >
            <div className="flex flex-col gap-5">
              <label>
                {" "}
                <span className="text-sm">Savolni kiriting</span>
                <textarea
                  name="savol-matni"
                  id="textarea"
                  className="w-full bg-input-bg 
                 textarea rounded-lg text-title focus:outline-none focus:ring-0 focus:border-2s"
                ></textarea>
              </label>

              <div className="flex gap-5 items-center">
                <span className="text-sm text-title">
                  Rasmni yuklang (agar mavjud bo'lsa)
                </span>

                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <button
                  onClick={handleClick}
                  className="btn btn-sm bg-[#DCEAFF] rounded-lg px-5 text-[15px] text-[#374DBC] border-none shadow-sm"
                >
                  {rasmYuklangan ? "Rasm yuklandi" : "Rasm yuklash"}
                </button>
              </div>
            </div>
            <div className="variyantlar flex flex-col gap-4">
              <h2 className="font-semibold text-title">
                Variantlarni kiriting{" "}
                <span className="text-sm font-medium text-lighter-text">
                  (to'g'ri javobni belgilang)
                </span>
              </h2>
              <div className="flex flex-col gap-3">
                <label
                  className={`w-full flex items-center gap-2 border border-darslar-border focus:border-2 rounded px-3 py-2 ${
                    variant1 ? "bg-[#3B82F624]" : "bg-input-bg"
                  }`}
                >
                  <input
                    onChange={() => {
                      setVariant1(true);
                      setVariant2(false);
                      setVariant3(false);
                      setVariant4(false);
                    }}
                    type="radio"
                    name="variant"
                    className="radio text-input-border checked:text-blue-first "
                  />
                  <input
                    type="text"
                    className="flex-1 text-title focus:outline-none focus:ring-0 focus:shadow-none "
                  />
                </label>

                <label
                  className={`w-full flex items-center gap-2 border border-darslar-border focus:border-2 rounded px-3 py-2 ${
                    variant2 ? "bg-[#3B82F624]" : "bg-input-bg"
                  }`}
                >
                  <input
                    onChange={() => {
                      setVariant1(false);
                      setVariant2(true);
                      setVariant3(false);
                      setVariant4(false);
                    }}
                    type="radio"
                    name="variant"
                    className="radio text-input-border checked:text-blue-first "
                  />
                  <input
                    type="text"
                    className="flex-1 text-title focus:outline-none focus:ring-0 focus:shadow-none "
                  />
                </label>

                <label
                  className={`w-full flex items-center gap-2 border border-darslar-border focus:border-2 rounded px-3 py-2 ${
                    variant3 ? "bg-[#3B82F624]" : "bg-input-bg"
                  }`}
                >
                  <input
                    onChange={() => {
                      setVariant1(false);
                      setVariant2(false);
                      setVariant3(true);
                      setVariant4(false);
                    }}
                    type="radio"
                    name="variant"
                    className="radio text-input-border checked:text-blue-first "
                  />
                  <input
                    type="text"
                    className="flex-1 text-title focus:outline-none focus:ring-0 focus:shadow-none "
                  />
                </label>

                <label
                  className={`w-full flex items-center gap-2 border border-darslar-border focus:border-2 rounded px-3 py-2 ${
                    variant4 ? "bg-[#3B82F624]" : "bg-input-bg"
                  }`}
                >
                  <input
                    onChange={() => {
                      setVariant1(false);
                      setVariant2(false);
                      setVariant3(false);
                      setVariant4(true);
                    }}
                    type="radio"
                    name="variant"
                    className="radio text-input-border checked:text-blue-first "
                  />
                  <input
                    type="text"
                    className="flex-1 text-title focus:outline-none focus:ring-0 focus:shadow-none "
                  />
                </label>
              </div>
              <div className="flex justify-end">
                <button className="btn rounded-full text-white font-medium px-7 border-none shadow-sm bg-blue-first text-[15px]">
                  {loading ? (
                    <div className="flex gap-2 opacity-50">
                      <span className="loading loading-spinner loading-sm"></span>
                      Saqlanmoqda
                    </div>
                  ) : (
                    "Testni saqlash"
                  )}
                </button>
              </div>
            </div>
          </Form>
        </div>
        <div className="p-5 flex-1 flex flex-col gap-5 order-1 xl:order-2">
          <h2 className="text-xl font-semibold text-title">
            {currentTestPage.title}
          </h2>

          <div className="flex gap-3">
            <div className="flex flex-col">
              <span className="text-title text-sm">Savollar soni:</span>
              <span className="text-title text-sm">Qiyinlik darajasi:</span>
              <span className="text-title text-sm">Berilgan vaqt:</span>
            </div>

            <div className="flex flex-col">
              <span className="text-lightest-text text-sm">
                {currentTestPage.savollarSoni} ta
              </span>
              <span className="text-lightest-text text-sm">
                {currentTestPage.daraja}
              </span>
              <span className="text-lightest-text text-sm">
                {currentTestPage.berilganVaqt} daqiqa
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {arr.map((savol, index) => {
              return (
                <span
                  key={index}
                  className={`w-6 h-6 sm:w-10 sm:h-10 rounded-md sm:rounded-lg text-sm sm:text-[16px] cursor-pointer ${
                    index < savolRaqami
                      ? "bg-blue-first text-white"
                      : "border border-darslar-border bg-main-bg"
                  } text-title flex justify-center items-center`}
                >
                  {savol}
                </span>
              );
            })}
          </div>
          {savolRaqami === currentTestPage.savollarSoni && (
            <p className="text-lightest-text">
              Taxrirlash uchun savol ustiga bosing
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default TestYaratishStep2;
