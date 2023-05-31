import { useCallback, useMemo } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MessageContext } from "../../App";
import { inputStyles } from "../login/login";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Signup = (props) => {
  const messageContext = useContext(MessageContext);

  const [matchedPWD, setMatchedPWD] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [responseStatus, setResponseStatus] = useState(200);
  const navigate = useNavigate();

  const handleUserName = (e) => {
    messageContext.setUserName(e);
  };
  const handleUserEmail = (e) => {
    messageContext.setUserEmail(e);
  };
  const handleUserPassword = (e) => {
    messageContext.setUserPassword(e);
  };
  const passWordMatched = (passWord1, passWord2) => {
    if (passWord1 == passWord2) {
      setMatchedPWD(false);
      return true;
    } else {
      setMatchedPWD(true);
      return false;
    }
  };

  const insert_data = async () => {
    await fetch(import.meta.env.VITE_USER_HOST_NAME + "/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: messageContext.userName,
        userEmail: messageContext.userEmail,
        passWord: messageContext.userPassword,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage(data.message);
        setResponseStatus(data.status);
      });
  };

  return (
    <div className=" text-center  h-fit sm:h-fit bg-white text-sm rounded-3xl flex items-center justify-center flex-col  gap-2 md:w-[50%]  ">
      <div className="flex flex-col justify-center items-center  pt-0 gap-3">
        <p className=" font-medium text-4xl ">Create an account!</p>
        <p className=" text-gray-600 text-xs ">
          Enter your details to create your account
        </p>
      </div>
      <div className=" flex justify-around gap-4 ">
        <div className="bg-slate-100 w-[5rem] cursor-pointer h-9 flex justify-center items-center rounded-2xl">
          <BsFacebook color="#0001EB" size={15} />
        </div>
        <div className="bg-slate-100 w-[5rem] h-9 cursor-pointer flex justify-center items-center rounded-2xl">
          <FcGoogle size={15} />
        </div>
      </div>
      <div
        className={
          responseStatus == 403
            ? " text-red-600 text-2xl "
            : " text-green-600 text-2xl "
        }
      >
        {successMessage}
      </div>
      <form
        className="flex flex-col text-start text-sm gap-4 w-full "
        onSubmit={(e) => {
          e.preventDefault();
          passWordMatched(messageContext.userPassword, repeatPassword)
            ? insert_data()
            : null;
        }}
      >
        <div className="flex gap-2 flex-col items-start justify-between ">
          <p>Name :</p>
          <input
            type="text"
            placeholder="Username"
            required={true}
            className={inputStyles}
            onChange={(e) => {
              handleUserName(e.target.value);
            }}
          />
        </div>
        <div className="flex  gap-2 flex-col items-start justify-between">
          <p>Email :</p>
          <input
            type="email"
            placeholder="makutajosue@gmail.com"
            required={true}
            className={inputStyles}
            onChange={(e) => {
              handleUserEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex relative  gap-2 items-start flex-col justify-between">
          <p>Password :</p>
          <div className=" w-full ">
            <input
              type={showPassword ? "text" : "password"}
              required={true}
              placeholder="Password"
              className={inputStyles + "min-w-full"}
              onChange={(e) => {
                handleUserPassword(e.target.value);
              }}
            />
            <button
              className="absolute bottom-2 right-5 "
              type="button"
              onClick={() => {
                showPassword ? setShowPassword(false) : setShowPassword(true);
              }}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>
        </div>
        <div className="flex  gap-2 flex-col items-start justify-between">
          <p>Repeat Password :</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={inputStyles}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className=" w-full text-base h-10 rounded-lg bg-main_color hover:bg-main_color/50 transition-all duration-500 font-bold text-white active:bg-black "
        >
          Sign up
        </button>
      </form>
      <div className=" flex flex-col gap-3 pt-5 mb-4 w-full">
        {matchedPWD && (
          <div className="font-['courrier']  text-red-500">
            Passwords do not match.
          </div>
        )}
      </div>
      <p className=" flex gap-2 text-base">
        <p>Have an account ?</p>
        <button
          type="button"
          className="text-main_color font-bold"
          onClick={() => {
            props.setLogin((login) => !login);
          }}
        >
          Signin
        </button>
      </p>
    </div>
  );
};

export default Signup;
