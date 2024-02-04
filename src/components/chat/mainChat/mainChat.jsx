import MessagesChatting from "./MessagesChatting";
import HeaderChat from "./headerChat";
import MessageType from "./messageType";

const MainChat = () => {
  return (
    <section className="hidden sm:flex flex-col relative text-sm w-[75%]">
      <HeaderChat />
      <MessagesChatting />
      <MessageType />
    </section>
  );
};

export default MainChat;
