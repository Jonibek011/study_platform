import React, { useState } from "react";
//react otp input
import OTPInput from "react-otp-input";

//context
import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../context/AuthContext";
function LoginStep2() {
  const [code, setCode] = useState("");

  //context
  const phoneNumber = useContextSelector(AuthContext, (ctx) => ctx.phoneNumber);
  console.log(phoneNumber);

  const hideNumber = (str) => {
    return (
      str.slice(0, 3) +
      " " +
      str.slice(3, 5) +
      " " +
      str.slice(5, 6) +
      "*******" +
      str.slice(-3)
    );
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#D9D9D9]">
      <div className="login-step1-card w-[90%] md:w-sm lg:w-md xl:w-lg shadow-md 2xl:w-xl rounded-lg p-3 md:p-4 lg:p-8 xl:p-10 bg-main-bg flex flex-col gap-3 md:gap-5">
        <h2 className="text-lg md:text-xl text-title text-center font-medium">
          Kirish
        </h2>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl text-center font-medium text-title">
            SMS kodini kiriting
          </h2>
          <p className="text-light-text text-center">
            SMS kodi +{hideNumber(phoneNumber)} raqamiga yuborildi
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <OTPInput
            value={code}
            onChange={setCode}
            numInputs={4}
            shouldAutoFocus // ✅ shu prop birinchi inputni default active qiladi
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: "70px",
              height: "40px",
              margin: "0 8px",
              fontSize: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              textAlign: "center",
              outline: "0px",
            }}
            focusStyle={{
              borderColor: "#374DBC",
              boxShadow: "1px 0px 5px #374DBC",
            }}
          />
          <p className="text-xs  text-lighter-text text-end pe-4">
            Kodni qayta yuborish: <span className="text-title">1:44</span>
          </p>
        </div>

        <button className="btn mt-5 bg-blue-first hover:bg-blue-first rounded-xl text-white font-medium lg:text-lg">
          SMS kodni yuborish
        </button>
      </div>
    </div>
  );
}

export default LoginStep2;
