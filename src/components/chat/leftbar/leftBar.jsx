import { BiSearchAlt } from "react-icons/bi";
import SearchBar from "../header/searchBar";
import { inputStyles } from "../../login/login";
import User from "../header/user";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MessageContext } from "../../../App";
import { ApiCall } from "../../../helpers/api";
import { toast } from "react-hot-toast";

const LeftBar = () => {
  const {
    allUsers,
    setAllUsers,
    currentConversation,
    setCurrentConversation,
    chatLoading,
    setChatLoading,
    userReceiver,
    setUserReceiver,
  } = useContext(MessageContext);

  const { user, token } = JSON.parse(localStorage.getItem("currentUser"));

  const getOrCreateConversation = async (clickedUser) => {
    setUserReceiver(clickedUser);
    setChatLoading(true);
    // if (currentConversation && userId != currentConversation.members[1]._id) {
    try {
      const { data } = await ApiCall.post({
        url: "/newConversation",
        data: { users: [user._id, clickedUser._id] },
        token,
      });

      console.log(data);
      setCurrentConversation(data);
    } catch (error) {
      console.log(error);
    }
    // }
    setChatLoading(false);
  };
  return (
    <section className="resize-x border-[1px] border-black/10 flex flex-col justify-start items-start pt-4  min-h-full w-full sm:w-[25%] min-w-[300px] gap-3 ">
      <div className=" flex w-[90%] self-center justify-center items-center relative gap-2  outline-none ">
        <BiSearchAlt size={20} className=" left-3 absolute text-black/30 " />
        <input
          type="text"
          className={
            " bg-slate-700/10 p-4 pl-9 h-12 rounded-md outline-none focus:border-none focus:border-0 text-base focus:shadow-none " +
            inputStyles
          }
          placeholder="Search ... "
        />
      </div>
      <div id="style-4" className="  w-full flex flex-col overflow-x-scroll  ">
        {allUsers
          ?.filter((elt) => elt.userName !== user?.userName)
          .map((el, index) => {
            return (
              <div
                key={index}
                onClick={() => getOrCreateConversation(el)}
                className={` ${
                  userReceiver?._id == el._id ? "bg-black/10" : ""
                } flex cursor-pointer hover:bg-main_color/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full `}
              >
                <div className=" flex gap-4 justify-center  ">
                  <User />
                  <div>
                    <p className=" font-bold  ">
                      {el?.fName} {el?.lName}
                    </p>
                    <p className=" text-sm text-slate-500 ">
                      You : Hello My bro !
                    </p>
                  </div>
                </div>
                <p className=" text-xs text-slate-500  ">11:00 AM</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default LeftBar;
