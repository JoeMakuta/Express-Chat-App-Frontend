import { useContext } from "react";
import { ApiCall } from "../../../helpers/api";
import { MessageContext } from "../../../App";
import { useState } from "react";
import socket from "../../../helpers/socket";

const MessageType = () => {
  const [writtenText, setWrittenText] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  const { currentConversation, setCurrentConversation } =
    useContext(MessageContext);

  const { user, token } = JSON.parse(localStorage.getItem("currentUser"));

  const SendMessage = async (e) => {
    setSendingMessage(true);
    socket.emit("send_message", {
      senderId: user,
      body: writtenText,
      conversationId: currentConversation?._id,
    });
    e.preventDefault();
    try {
      const { data } = await ApiCall.post({
        url: "/newMessage/" + currentConversation?._id,
        token,
        data: { body: writtenText },
      });
      console.log(data);
      setWrittenText("");
    } catch (error) {
      console.log(error);
    }
    setSendingMessage(false);
  };

  return (
    <form
      onSubmit={SendMessage}
      className="flex bg-gray-100 justify-start  absolute bottom-0 border-t-[1px] w-full h-fit min-h-[12%] p-2 border-black/10 gap-2 "
    >
      <textarea
        value={writtenText}
        type="text"
        className=" outline-none bg-black/10 w-[85%] h-10 rounded-md p-3 "
        placeholder="Type your message ... "
        required
        pattern="^(?=.*[^\s]).+$"
        onChange={(e) => setWrittenText(e.target.value)}
      />
      <button
        type="submit"
        disabled={sendingMessage}
        className="flex items-center justify-center w-[10%] text-xs text-white bg-main_color h-10 rounded-md "
      >
        {sendingMessage ? (
          <div class="border-gray-300 h-5 w-5 animate-spin rounded-full border-2 border-t-main_color" />
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
};
export default MessageType;
