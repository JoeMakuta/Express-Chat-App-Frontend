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
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";

const Signup = ({ login, setLogin }) => {
  const messageContext = useContext(MessageContext);

  const [userSignUp, setUserSignUp] = useState({});

  const [matchedPWD, setMatchedPWD] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [responseStatus, setResponseStatus] = useState(200);
  const navigate = useNavigate();

  const handleSignUp = (propertie, value) => {
    const copyUser = { ...userSignUp };
    copyUser[propertie] = value;
    setUserSignUp(copyUser);
  };

  const passWordMatched = (passWord1, passWord2) => {
    console.log(passWord1, passWord2);
    if (passWord1 == passWord2) {
      setMatchedPWD(false);
      return true;
    } else {
      setMatchedPWD(true);
      return false;
    }
  };

  const insert_data = async () => {
    try {
      toast.promise(
        axios.post(
          import.meta.env.VITE_USER_HOST_NAME + "/signup",
          {
            ...userSignUp,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        ),
        {
          loading: "Trying",
          error: (err) => {
            return `${err?.response?.data?.message || err?.message}`;
          },
          success: ({ data }) => {
            setLogin((login) => !login);
            return `${data?.message}`;
          },
        },
        {
          className: "rounded-none bg-black/90 text-white",
          position: "bottom-center",
        }
      );
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className=" text-center  h-fit sm:h-fit  text-sm rounded-3xl flex items-center justify-center flex-col  gap-2 w-[85%] md:w-[50%]  ">
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col justify-center items-center  pt-0 gap-1">
        <p className=" font-medium text-4xl ">Create an account!</p>
        <p className=" text-gray-600 text-xs ">
          Enter your details to create your account
        </p>
      </div>
      {/* <div className=" flex justify-around gap-4 ">
        <div className="bg-slate-100 w-[5rem] cursor-pointer h-9 flex justify-center items-center rounded-2xl">
          <BsFacebook color="#0001EB" size={15} />
        </div>
        <div className="bg-slate-100 w-[5rem] h-9 cursor-pointer flex justify-center items-center rounded-2xl">
          <FcGoogle size={15} />
        </div>
      </div> */}
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
        className="flex flex-col text-start text-sm gap-2 w-full "
        onSubmit={(e) => {
          e.preventDefault();
          passWordMatched(userSignUp.passWord, repeatPassword)
            ? insert_data()
            : null;
        }}
      >
        <div className=" flex gap-2">
          <div className="flex gap-3 flex-col items-start justify-between ">
            <p>First Name :</p>
            <input
              type="text"
              placeholder="First name"
              required={true}
              className={inputStyles}
              onChange={(e) => {
                handleSignUp("fName", e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2 flex-col items-start justify-between ">
            <p>Last Name :</p>
            <input
              type="text"
              placeholder="Last name"
              required={true}
              className={inputStyles}
              onChange={(e) => {
                handleSignUp("lName", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col items-start justify-between ">
          <p>Name :</p>
          <input
            type="text"
            placeholder="Username"
            required={true}
            className={inputStyles}
            onChange={(e) => {
              handleSignUp("userName", e.target.value);
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
              handleSignUp("userEmail", e.target.value);
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
                handleSignUp("passWord", e.target.value);
              }}
            />
            <button
              className="absolute bottom-[6px] right-5 "
              type="button"
              onClick={() => {
                showPassword ? setShowPassword(false) : setShowPassword(true);
              }}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={25} />
              ) : (
                <AiFillEye size={25} />
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
          className=" w-full text-base h-10 rounded-lg bg-main_color hover:bg-main_color/50 transition-all duration-500 font-bold text-white active:bg-black mt-6"
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
            setLogin((login) => !login);
          }}
        >
          Signin
        </button>
      </p>
    </div>
  );
};

export default Signup;
