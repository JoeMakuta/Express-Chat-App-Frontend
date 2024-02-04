import { AiOutlineUser } from "react-icons/ai";
import Login from "../login/login";
import Signup from "../signup/signup";
import { useState } from "react";

const Home = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className=" w-screen flex justify-center bg-gradient-to-tr from-main_color/30 to-white items-center h-screen">
      <div className="max-w-[1500px] bg-white max-h-screen sm:bg-none  bg-gradient-to-tr from-main_color/20 to-white h-full w-full max-w-screen md:max-h-[900px] xl:flex justify-around  items-center ">
        <div className=" w-full md:w-[50%] h-full flex justify-center items-center ">
          {login ? (
            <Login login={login} setLogin={setLogin} />
          ) : (
            <Signup login={login} setLogin={setLogin} />
          )}
        </div>
        {/* <Signup /> */}
        <div className="hidden w-[50%] xl:flex justify-center items-center overflow-hidden relative bg-main_color/50 h-full rounded-tl-[40%] ">
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

export default Home;
