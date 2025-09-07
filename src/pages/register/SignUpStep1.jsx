import React, { useState } from "react";
//react phone input
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//
//authbackend
import { authBackend } from "../../backend/authBackend";
//react-router-dom
import { Form, Link } from "react-router-dom";
function SignUpStep1() {
  const [registerPhone, setRegisterPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // res = await authBackend({phone:registerPhone}, "")
  };
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#D9D9D9]">
      <div className="auth-step1-card w-[90%] sm:w-xs md:w-sm lg:w-md xl:w-lg 2xl:w-xl rounded-xl bg-main-bg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7">
        <h2 className="font-medium text-xl md:text-2xl text-title text-center">
          Ro'yxatdan o'tish
        </h2>
        <Form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="bg-[#C8DDFF] h-[9px] w-full flex justify-between items-center rounded-full">
            <span className="flex justify-center items-center text-2xl w-9 h-9 rounded-full bg-blue-first text-white ">
              1
            </span>
            <span className="flex justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              2
            </span>
            <span className="flex justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              3
            </span>
            <span className="flex justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              4
            </span>
          </div>
          <div className="mt-5">
            <p className="text-title font-medium">Telefon raqam</p>
            <PhoneInput
              country={"uz"} // default Uzbekistan
              preferredCountries={["uz", "us", "gb", "in"]}
              inputStyle={{
                width: "100%",
                height: "40px",
                paddingLeft: "70px",
              }}
              placeholder="00 000 00 00"
              value={registerPhone}
              required
              onChange={setRegisterPhone}
              buttonStyle={{
                width: "60px",
                display: "flex",
                justifyContent: "center",
                background: "white",
              }}
            />
          </div>

          <div className="flex flex-col gap-3">
            <button className="btn rounded-xl bg-blue-first hover:bg-blue-first text-white md:text-lg font-medium">
              SMS kodni yuborish
            </button>
            <div className="flex justify-center items-center gap-5">
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

export default SignUpStep1;
