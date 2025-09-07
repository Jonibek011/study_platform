import React from "react";
import { Form, Link } from "react-router-dom";
function SignUpStep3() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#D9D9D9]">
      <div className="signuup-step3-card w-[90%] sm:w-sm md:w-sm lg:w-md xl:w-lg 2xl:w-xl rounded-xl bg-main-bg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col gap-10">
        <h2 className="font-medium text-xl md:text-2xl text-title text-center">
          Ro'yxatdan o'tish
        </h2>
        <Form method="post" className="flex flex-col gap-10">
          <div className="bg-[#C8DDFF] relative h-[9px] w-full flex justify-between items-center rounded-full">
            <span className="inline-block absolute top-0 left-0 bg-blue-first w-[66%] h-full z-0"></span>
            <span className="flex relative z-10 justify-center items-center text-2xl w-9 h-9 rounded-full bg-blue-first text-white ">
              1
            </span>
            <span className="flex relative z-10 justify-center items-center text-2xl w-9 h-9 rounded-full bg-blue-first text-white  ">
              2
            </span>
            <span className="flex relative z-10  justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              3
            </span>
            <span className="flex relative z-10  justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              4
            </span>
          </div>

          <div className="flex gap-4 w-full mt-5">
            <label className="flex flex-col flex-1">
              <span className="font-medium">Ism</span>
              <input
                type="text"
                placeholder="Ismingizni kiriting"
                className="input rounded-xl focus:outline-0 focus:border-[2px] focus:border-blue-first"
              />
            </label>

            <label className="flex flex-col flex-1">
              <span className="font-medium">Familiya</span>
              <input
                type="text"
                placeholder="Familiyangizni kiriting"
                className="input rounded-xl focus:outline-0 focus:border-[2px] focus:border-blue-first"
              />
            </label>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn rounded-xl bg-blue-first hover:bg-blue-first text-white font-medium text-lg">
              Davom etish
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

export default SignUpStep3;
