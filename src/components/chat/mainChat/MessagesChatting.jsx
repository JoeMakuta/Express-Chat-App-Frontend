import { useContext } from "react";
import { useState } from "react";
import { MessageContext } from "../../../App";
import { useEffect } from "react";
import { ApiCall } from "../../../helpers/api";
import { Message, Message1 } from "../message";
import GlobalLoader from "../../loader/global";
import socket from "../../../helpers/socket";
import { useRef } from "react";

const MessagesChatting = () => {
  const { chatLoading, setChatLoading } = useContext(MessageContext);

  const scrollToBottomRef = useRef(null);

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
    scrollToBottom();
  };

  const scrollToBottom = () => {
    scrollToBottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    socket.on("receive_message", (message) => {
      setCurrentMessages((prev) => [...prev, message]);
    });
  }, [socket]);

  useEffect(() => {
    LoadMessages();
  }, [currentConversation]);

  useEffect(() => {
    scrollToBottom();
  }, [currentMessages]);

  return chatLoading ? (
    <div className=" flex w-full h-full justify-center items-center ">
      <GlobalLoader size={10} />
    </div>
  ) : (
    <div
      ref={scrollToBottomRef}
      className="overflow-y-scroll flex flex-col  items-center gap-4 h-[73%] p-3 w-full"
    >
      {currentMessages.length !== 0 ? (
        currentMessages.map((elt, index) => {
          return elt?.senderId?._id == user._id ? (
            <Message1 key={index} message={elt.body} user={elt?.senderId} />
          ) : (
            <Message key={index} message={elt.body} user={elt?.senderId} />
          );
        })
      ) : (
        <div className=" w-full h-full flex justify-center items-center ">
          No message in this conversation!
        </div>
      )}
    </div>
  );
};

export default MessagesChatting;
