import React, { useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
//use context selector
import { useContextSelector } from "use-context-selector";
//react router dom
import { Form, useNavigate, Link } from "react-router-dom";
//libraries
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//backend
import { authBackend } from "../../../backend/authBackend";
function LoginStep1() {
  //context data
  const dispatch = useContextSelector(AuthContext, (ctx) => ctx.dispatch);
  const user = useContextSelector(AuthContext, (ctx) => ctx.user);
  const navigation = useNavigate();
  const [phone, setPhone] = useState("");
  const [loginPending, setLoginPending] = useState(false);

  const handleSubmit = async () => {
    setLoginPending(true);
    const res = await authBackend({ phone }, "auth/check");
    dispatch({ type: "PHONE", payload: phone });
    console.log("login chek", res);
    setLoginPending(false);
    if (res.statusCode !== 200) return;
    if (res?.data?.registered) {
      return navigation("/auth/step/send-otp");
    }

    return navigation("/auth/login/verify-otp");
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#D9D9D9] ">
      <div className="login-card  shadow h-auto w-xs md:w-sm lg:w-md xl:w-lg 2xl:w-xl bg-main-bg rounded-lg p-3 md:p-5 lg:p-8 xl:p-10 flex flex-col gap-5 md:gap-10">
        <h2 className="text-lg md:text-xl text-title text-center ">Kirish</h2>
        <Form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-3 md:gap-5 lg:gap-8"
        >
          <div>
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
              value={phone}
              required
              onChange={setPhone}
              buttonStyle={{
                width: "60px",
                display: "flex",
                justifyContent: "center",
                background: "white",
              }}
            />
          </div>
          <button
            disabled={loginPending}
            className="btn  bg-blue-first hover:bg-blue-first text-white font-medium md:text-lg rounded-lg"
          >
            {loginPending && (
              <span className="loading loading-sm loading-spinner"></span>
            )}{" "}
            SMS kodni yuborish
          </button>
          <p className="text-center  flex gap-4 justify-center">
            <span className="text-lighter-text">Hisobingiz yo'qmi?</span>
            <Link
              to="/auth/step/send-otp"
              className="text-[#374DBC] underline font-medium"
            >
              Ro'yxatdan o'tish
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default LoginStep1;
