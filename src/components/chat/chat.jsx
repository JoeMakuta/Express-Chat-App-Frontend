import { Toaster } from "react-hot-toast";
import Header from "./header/header";
import LeftBar from "./leftbar/leftBar";
import MainChat from "./mainChat/mainChat";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  return (
    <div className=" w-screen flex justify-center bg-gradient-to-tr from-main_color/30 to-white items-center h-full">
      <Toaster />
      <div className="max-w-[1500px] bg-white max-h-[100vh] h-full w-full max-w-screen flex  flex-col  ">
        <Header />
        <main className=" flex h-full  justify-start md:pt-[60px] pt-[80px] ">
          <LeftBar />
          <MainChat />
          {/* <LeftBar /> */}
        </main>
      </div>
    </div>
  );
};

export default Chat;
