import { Toaster } from "react-hot-toast";
import Header from "./header/header";
import LeftBar from "./leftbar/leftBar";
import MainChat from "./mainChat/mainChat";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ApiCall } from "../../helpers/api";
import { useContext } from "react";
import { MessageContext } from "../../App";
import NoMessage from "./mainChat/noMessage";
import { useState } from "react";
import GlobalLoader from "../loader/global";

const Chat = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const {
    allUsers,
    setAllUsers,
    currentConversation,
    userReceiver,
    setUserReceiver,
  } = useContext(MessageContext);

  const getUsers = async (currentUser) => {
    setLoading(true);
    try {
      const { data } = await ApiCall.get({
        url: "/users",
        token: currentUser.token,
      });
      if (data.users) {
        setAllUsers(data?.users);
      }

      console.log(data?.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
      localStorage.clear();
      setLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      navigate("/");
    } else {
      getUsers(currentUser);
    }
  }, []);

  {
    return loading ? (
      <GlobalLoader />
    ) : (
      <div className=" w-screen flex justify-center bg-gradient-to-tr from-main_color/10 to-white items-center h-full">
        <div className="max-w-[1500px]  max-h-[100vh] h-full w-full max-w-screen flex  flex-col  ">
          <Header />
          <main className=" flex h-full  justify-start md:pt-[60px] pt-[80px] ">
            <LeftBar />
            {userReceiver ? <MainChat /> : <NoMessage />}

            {/* <LeftBar /> */}
          </main>
        </div>
        <div>
          <Toaster />
        </div>
      </div>
    );
  }
};

export default Chat;
