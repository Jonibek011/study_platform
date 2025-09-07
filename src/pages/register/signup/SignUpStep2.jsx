import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import OTPInput from "react-otp-input";
//context
import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../../../context/AuthContext";

//toast
import toast from "react-hot-toast";

//useNavigate
import { useNavigate } from "react-router-dom";
//backend
import { authBackend } from "../../../backend/authBackend";
function SignUpStep2() {
  const [registerCode, setRegisterCode] = useState("");
  const [response, setResponse] = useState(null);
  const navigation = useNavigate();
  //context data
  const phoneNumber = useContextSelector(AuthContext, (ctx) => ctx.phoneNumber);

  useEffect(() => {
    const getAsyncData = async () => {
      const req = await authBackend(
        { phone: "+" + phoneNumber },
        "auth/step/send-otp"
      );
      setResponse(req);
    };

    getAsyncData();
  }, []);
  //console.log
  console.log("signupstep2 send otp", response);

  const step2HandleSubmit = async (e) => {
    e.preventDefault();

    const request = await authBackend(
      { phone: "+" + phoneNumber, code: registerCode },
      "auth/step/verify-otp"
    );
    console.log("step2dan submitRequest", request);

    if (request.statusCode === 200) {
      return navigation("/auth/step/set-name");
    }

    toast.error("Kod mos kelmadi");
    setRegisterCode("");
  };

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
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#D9D9D9]">
      <div className="signup-step2-card w-[90%] sm:w-xs md:w-sm lg:w-md xl:w-lg 2xl:w-xl rounded-xl bg-main-bg shadow-md p-4 md:p-5 lg:p-6 xl:p-8 flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7">
        <h2 className="font-medium text-xl md:text-2xl text-title text-center">
          Ro'yxatdan o'tish
        </h2>
        <Form
          method="post"
          className="flex flex-col gap-4"
          onSubmit={step2HandleSubmit}
        >
          <div className="bg-[#C8DDFF] relative h-[9px] w-full flex justify-between items-center rounded-full">
            <span className="inline-block absolute top-0 left-0 bg-blue-first w-[33%] h-full z-0"></span>
            <span className="flex relative z-10 justify-center items-center text-2xl w-9 h-9 rounded-full bg-blue-first text-white ">
              1
            </span>
            <span className="flex relative z-10  justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              2
            </span>
            <span className="flex relative z-10  justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              3
            </span>
            <span className="flex relative z-10  justify-center items-center text-2xl w-9 h-9 rounded-full border-2 border-blue-first text-blue-first bg-main-bg ">
              4
            </span>
          </div>
          <h2 className="text-xl mt-4 md:text-2xl text-center font-[500] text-title">
            SMS kodini kiriting
          </h2>
          <p className="text-light-text text-center">
            SMS kodi +{hideNumber(phoneNumber)} raqamiga yuborildi
          </p>
          <div className="flex flex-col gap-2 justify-center items-center">
            <OTPInput
              value={registerCode}
              onChange={setRegisterCode}
              numInputs={6}
              shouldAutoFocus // ✅ shu prop birinchi inputni default active qiladi
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "40px",
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
                boxShadow: "0 0  5px 5px #374DBC",
                border: "3px",
              }}
            />
            <p className="text-xs  text-lighter-text text-end pe-4">
              Kodni qayta yuborish: <span className="text-title">1:44</span>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="btn rounded-xl text-white font-medium bg-blue-first hover:bg-blue-first md:text-[17px]">
              Tasdiqlash
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

export default SignUpStep2;
