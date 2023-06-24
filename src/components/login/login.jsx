import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineEye,
  AiOutlineUser,
} from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { MessageContext, showToastMessage } from "../../App";
import { BsFacebook } from "react-icons/bs";
import Signup from "../signup/signup";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export const inputStyles =
  " h-12 p-3 w-[100%] bg-slate-200 focus:border-[1px]   rounded-lg outline-none focus:ring-[#00BDD6FF]/30 focus:ring-2 focus:shadow-[0px_0px_10px_1px_#00BDD6FF] border-[1px] border-[#000]/10 transition-all flex justify-center items-center ";

const Login = ({ login, setLogin }) => {
  const messageContext = useContext(MessageContext);

  const [showPassword, setShowPassword] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const loginUser = async () => {
    toast.promise(
      axios.post(
        import.meta.env.VITE_USER_HOST_NAME + "/login",
        {
          userEmail: messageContext.userEmail,
          passWord: messageContext.userPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ),
      {
        error: (err) => {
          console.log(err);
          return `Error : ${err?.response?.data?.message}`;
        },
        loading: `Loading ...`,
        success: (data) => {
          console.log(data);
          return `Data`;
        },
      },
      {}
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      showToastMessage("Logged as " + localStorage.getItem("userName"), 3);
      navigate("/chat");
    }
  }, []);

  return (
    <form
      className=" backdrop-blur-md text-center  shadow-gray-400  h-fit text-xs rounded-3xl flex items-center justify-around flex-col gap-4 w-[85%] transition-all md:w-[50%] "
      onSubmit={(e) => {
        e.preventDefault();
        loginUser();
      }}
    >
      <Toaster />

      <div className="flex flex-col justify-center items-center  pt-0 gap-3">
        <p className=" font-medium text-4xl ">Welcome back!</p>
        <p className=" text-gray-600 text-xs ">
          Enter your credentials to access your account
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

      <div className="flex flex-col text-start text-sm gap-4 w-full ">
        <div className=" flex flex-col gap-2 ">
          {/* <label htmlFor="">Email :</label> */}
          <input
            type="email"
            required={true}
            placeholder="Email"
            className={inputStyles}
            onChange={(e) => {
              messageContext.setUserEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <div className=" flex gap-2 flex-col ">
            {/* <label htmlFor="">Password : </label> */}
            <input
              required={true}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={inputStyles + " min-w-full"}
              onChange={(e) => {
                messageContext.setUserPassword(e.target.value);
              }}
            />
            <button
              className="relative self-end bottom-[42px] right-4"
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
        <div className=" flex justify-between  ">
          <div className="flex cursor-pointer gap-2">
            <input
              className=" w-5 bg-main_color"
              type="checkbox"
              name="logged"
              id="logged"
            />
            <label htmlFor="logged">Keep me logged ?</label>
          </div>
          <p className=" text-main_color cursor-pointer">Forgot password?</p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-5  w-full">
        <button
          type="submit"
          className=" w-full text-base h-10 rounded-lg bg-main_color hover:bg-main_color/50 transition-all duration-500 font-bold text-white active:bg-black "
        >
          Login
        </button>
        <p className=" flex gap-2 text-base">
          <p>Don't have an account ?</p>
          <button
            type="button"
            onClick={() => {
              setLogin((login) => !login);
            }}
            className="text-main_color font-bold "
          >
            Signup
          </button>
        </p>
      </div>
    </form>
  );
};

export default Login;
