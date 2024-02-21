import { useContext } from "react";
import MessagesChatting from "./MessagesChatting";
import HeaderChat from "./headerChat";
import MessageType from "./messageType";
import { MessageContext } from "../../../App";
import GlobalLoader from "../../loader/global";

const MainChat = () => {
  const { chatLoading, setChatLoading } = useContext(MessageContext);
  return chatLoading ? (
    <GlobalLoader size={10} />
  ) : (
    <section className="hidden sm:flex flex-col relative text-sm w-full">
      <HeaderChat />
      <MessagesChatting />
      <MessageType />
    </section>
  );
};

export default MainChat;
