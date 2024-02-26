import { useContext } from "react";
import MessagesChatting from "./MessagesChatting";
import HeaderChat from "./headerChat";
import MessageType from "./messageType";

const MainChat = () => {
  return (
    <section className="hidden sm:flex flex-col relative text-sm w-full">
      <HeaderChat />
      <MessagesChatting />
      <MessageType />
    </section>
  );
};

export default MainChat;
