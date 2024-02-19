import { FcVideoCall } from "react-icons/fc";
import { MdCall } from "react-icons/md";
import User from "../header/user";
import { MessageContext } from "../../../App";
import { useContext } from "react";
import { useEffect } from "react";

const HeaderChat = () => {
  const messageContext = useContext(MessageContext);
  const {
    currentUser,
    setCurrentUser,
    currentConversation,
    setCurrentConversation,
  } = messageContext;

  useEffect(() => {
    setCurrentUser(localStorage.getItem("currentUser"));
  }, []);

  return (
    <div className=" h-[15%] min-h-[70px] border-b-[1px] flex gap-4 border-black/10 w-full  justify-between  items-center px-5">
      <div className=" flex gap-4">
        <User />
        <div>
          <p className=" text-base font-bold  ">
            {currentConversation?.members[1]?.userName}
          </p>
          <p className="text-slate-500 ">Active Now</p>
        </div>
      </div>
      <div className=" flex gap-5 justify-center items-center ">
        <FcVideoCall size={25} />
        <MdCall size={20} />
      </div>
    </div>
  );
};

export default HeaderChat;
