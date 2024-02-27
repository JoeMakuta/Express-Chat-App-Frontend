import { useContext } from "react";
import { useState } from "react";
import { MessageContext } from "../../../App";
import { useEffect } from "react";
import { ApiCall } from "../../../helpers/api";
import { Message, Message1 } from "../message";
import GlobalLoader from "../../loader/global";

const MessagesChatting = () => {
  const { chatLoading, setChatLoading } = useContext(MessageContext);

  const {
    currentConversation,
    setCurrentConversation,
    currentMessages,
    setCurrentMessages,
  } = useContext(MessageContext);

  const { user, token } = JSON.parse(localStorage.getItem("currentUser"));

  const LoadMessages = async () => {
    setChatLoading(true);

    try {
      const { data } = await ApiCall.get({
        url: "/getMessages/" + currentConversation?._id,
        token,
      });
      console.log(data);
      setCurrentMessages(data?.messages);
    } catch (error) {
      console.log(error);
    }
    setChatLoading(false);
  };

  useEffect(() => {
    LoadMessages();
  }, [currentConversation]);

  return chatLoading ? (
    <div className=" flex w-full h-full justify-center items-center ">
      <GlobalLoader size={10} />
    </div>
  ) : (
    <div className="overflow-y-scroll flex flex-col gap-4 h-[73%] p-3 w-full">
      {currentMessages.map((elt, index) => {
        return elt.senderId == user._id ? (
          <Message1 key={index} message={elt.body} user={elt.senderId} />
        ) : (
          <Message key={index} message={elt.body} user={elt.senderId} />
        );
      })}
    </div>
  );
};

export default MessagesChatting;
