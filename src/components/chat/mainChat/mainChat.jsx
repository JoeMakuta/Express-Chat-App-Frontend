import MessagesChatting from "./MessagesChatting";
import HeaderChat from "./headerChat";
import MessageType from "./messageType";

const MainChat = () => {
  return (
    <section className="relative text-sm w-[50%]">
      <HeaderChat />
      <MessagesChatting />
      <MessageType />
    </section>
  );
};

export default MainChat;
