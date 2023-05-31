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
import "react-toastify/dist/ReactToastify.css";

import { MessageContext, showToastMessage } from "../../App";
import { BsFacebook } from "react-icons/bs";
import Signup from "../signup/signup";

export const inputStyles =
  " h-10 p-3 w-[100%] bg-slate-200 focus:border-[1px]   rounded-lg outline-none focus:ring-[#00BDD6FF]/30 focus:ring-2 focus:shadow-[0px_0px_10px_1px_#00BDD6FF] border-[1px] border-[#000]/10 transition-all ";

const Login = () => {
  const messageContext = useContext(MessageContext);

  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const loginUser = async () => {
    await fetch(import.meta.env.VITE_USER_HOST_NAME + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: messageContext.userEmail,
        passWord: messageContext.userPassword,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        setResponse(data);
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("userName", data.user.userName);
          localStorage.setItem("userEmail", data.user.userEmail);
          localStorage.setItem("imageUrl", data.user.image);
        }
        if (data.status == 200) {
          navigate("/chat");
        }
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      showToastMessage("Logged as " + localStorage.getItem("userName"), 3);
      navigate("/chat");
    }
  }, []);

  return (
    <div className=" w-screen flex justify-center bg-gradient-to-tr from-main_color/30 to-white items-center h-screen">
      <div className="max-w-[1500px] bg-white max-h-[820px] h-full w-full max-w-screen xl:flex justify-around items-center ">
        <div className=" w-[50%] flex justify-center items-center ">
          <form
            className=" backdrop-blur-md text-center  shadow-gray-400  h-fit  bg-white bg-opacity-30 text-xs rounded-3xl flex items-center justify-around flex-col gap-4 w-[85%] transition-all md:w-[50%] "
            onSubmit={(e) => {
              e.preventDefault();
              // loginUser();
            }}
          >
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
                    className="relative self-end bottom-9 right-4"
                    type="button"
                    onClick={() => {
                      showPassword
                        ? setShowPassword(false)
                        : setShowPassword(true);
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
                <p className=" text-main_color cursor-pointer">
                  Forgot password?
                </p>
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
                <button type="button" className="text-main_color">
                  <Link to="/signup" className=" font-bold ">
                    {" "}
                    Signup
                  </Link>
                </button>
              </p>
            </div>
          </form>
        </div>
        {/* <Signup /> */}
        <div className=" w-[50%] flex justify-center items-center overflow-hidden relative bg-main_color/50 h-full rounded-tl-[40%] ">
          <div className=" absolute bottom-[10%] z-20 left-16 shadow-2xl w-[12rem] h-[5rem] bg-white rounded-xl flex justify-center items-center gap-3 ">
            <div className=" flex w-10  h-10 justify-center items-center bg-main_color rounded-full ">
              <AiOutlineUser size={20} color="white" />
            </div>
            <div>
              <p className=" text-xl font-semibold ">1,234,567</p>
              <p className=" text-black/30 ">Talents</p>
            </div>
          </div>
          <div className=" absolute top-[10%] z-20 right-16 shadow-2xl w-[12rem] h-[5rem] bg-white rounded-xl flex justify-center items-center gap-3 ">
            <div className=" flex w-10  h-10 justify-center items-center bg-main_color rounded-full ">
              <AiOutlineUser size={20} color="white" />
            </div>
            <div>
              <p className=" text-xl font-semibold ">1,234,567</p>
              <p className=" text-black/30 ">Talents</p>
            </div>
          </div>
          <img
            src="/src/assets/Image 2341.png"
            className=" absolute bottom-0 w-[60%]"
            alt=""
          />
          <img
            src="/src/assets/line.png"
            className=" w-full z-10 absolute bottom-0 scale-125 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
