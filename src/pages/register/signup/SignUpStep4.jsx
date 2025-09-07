import React from "react";

//react-router-dom
import { Form, Link } from "react-router-dom";
function SignUpStep4() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#D9D9D9]">
      <div className="signuup-step3-card w-[90%] sm:w-sm md:w-sm lg:w-md xl:w-lg 2xl:w-xl rounded-xl bg-main-bg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col gap-10">
        <p className="font-medium text-xl md:text-2xl text-title text-center">
          Ro'yxatdan o'tish
        </p>
        <Form method="post" className="flex flex-col gap-8">
          <div className="bg-[#C8DDFF] relative h-[9px] w-full flex justify-between items-center rounded-full">
            <span className="inline-block absolute top-0 left-0 bg-blue-first w-[99%] h-full z-0"></span>
            <span className="flex relative z-10 justify-center items-center text-2xl w-9 h-9 rounded-full bg-blue-first text-white ">
              1
            </span>
            <span className="flex relative z-10 justify-center items-center text-2xl w-9 h-9 rounded-full bg-blue-first text-white  ">
              2
            </span>
            <span className="flex relative z-10 justify-center items-center text-2xl w-9 h-9 rounded-full bg-blue-first text-white ">
              3
            </span>
            <span className="flex relative z-10  justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              4
            </span>
          </div>
          <div className="mt-8">
            <p>Rolni tanlang</p>
          </div>
          <div className="flex gap-10">
            {/* O‘quvchi */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="student"
                className="
              appearance-none w-5 h-5 border-2 border-gray-400 rounded-full
              grid place-content-center cursor-pointer
              before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full
              before:scale-0 before:transition-transform before:duration-200
              checked:border-blue-600 checked:before:bg-blue-600 checked:before:scale-100
            "
              />
              <span className="text-base font-medium text-slate-900">
                O‘quvchi
              </span>
            </label>

            {/* O‘qituvchi */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="teacher"
                className="
              appearance-none w-5 h-5 border-2 border-gray-400 rounded-full
              grid place-content-center cursor-pointer
              before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full
              before:scale-0 before:transition-transform before:duration-200
              checked:border-blue-600 checked:before:bg-blue-600 checked:before:scale-100
            "
              />
              <span className="text-base font-medium text-slate-900">
                O‘qituvchi
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn rounded-xl bg-blue-first hover:bg-blue-first text-white font-medium text-lg">
              Ro'yxatdan o'tish
            </button>
            <div className="flex gap-4  justify-center items-center">
              <p className="text-lighter-text">Hisobingiz bormi?</p>
              <Link to="/auth/login" className="text-blue-first underline">
                Kirish
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUpStep4;
