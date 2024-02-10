import React, { useState, useEffect } from "react";

import { LoginAPI, GoogleSignInAPI } from "../Api/AuthAPI";
import LinkedinLogo from "../assets/linkedinLogo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function LoginComponent() {
  let navigate = useNavigate();
  const logIn = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      localStorage.setItem("userEmail", res.user.email);
      toast.success("Sigin In Successfully");
      navigate("/home");
    } catch (error) {
      toast.error("Please check your credentials");
    }
  };
  const googleSignIn = async () => {
    let res = await GoogleSignInAPI();
    localStorage.setItem("userEmail", res.user.email);
    toast.success("Login Successfully");
    navigate("/home");
  };
  const [credentials, setCredentials] = useState({});
  return (
    <>
      <div className="logo flex flex-row flex-start mt-2 ml-4">
        <span className="text-3xl font-bold text-sky-600">Linked</span>
        <img src={LinkedinLogo} className="w-10 h-9" alt="" />
      </div>
      <div className="flex flex-col place-content-center place-items-center mt-14">
        <div>
          <p className="text-2xl font-bold">Sign In</p>
          <p className="opacity-50">Stay updated on your professional world</p>
        </div>
        <div className="flex flex-col mt-8 gap-5 w-72">
          <input
            className="p-2 rounded bg-white border-2 border-solid border-black hover:border-2 focus:border-none focus:border--0"
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setCredentials({ ...credentials, email: event.target.value });
            }}
          />
          <input
            className="p-2 rounded bg-white border-solid border-black border-2 hover:border-2 hover:border-sky-600 active:border-sky-600"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setCredentials({ ...credentials, password: event.target.value });
            }}
          />
        </div>
        <div className="flex-flex-col mt-2 gap-5 w-72">
          <p className="text-sky-600 font-semibold">Forgot password?</p>
          <button
            className="bg-sky-600 text-white p-2 w-72 mt-6 rounded-3xl"
            onClick={logIn}
          >
            Sign In
          </button>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
            <span className="-mt-1 text-gray-400 absolute px-3 font-medium text-red -translate-x-1/2 bg-white left-1/2">
              or
            </span>
          </div>
          <div className="w-72 flex flex-col place-items-center">
            <GoogleButton
              className="!w-72 !rounded-3xl !bg-white !text-[#212121] !flex !justify-around"
              onClick={googleSignIn}
            />
          </div>
          <div className="flex justify-center mt-7">
            <p>
              New to Linkedin?{" "}
              <span
                className="text-sky-600 font-semibold px-2 cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Join now
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
