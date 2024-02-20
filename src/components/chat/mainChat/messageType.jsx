import { useContext } from "react";
import { ApiCall } from "../../../helpers/api";
import { MessageContext } from "../../../App";
import { useState } from "react";

const MessageType = () => {
  const { currentConversation, setCurrentConversation } =
    useContext(MessageContext);
  const [writtenText, setWrittenText] = useState("");
  const { user, token } = JSON.parse(localStorage.getItem("currentUser"));

  const SendMessage = async (e) => {
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
  };

  return (
    <form
      onSubmit={SendMessage}
      className="flex justify-center items-center absolute bottom-0 border-t-[1px] w-full h-[12%] border-black/10 gap-2 "
    >
      <input
        value={writtenText}
        type="text"
        className=" outline-none bg-black/10 w-[85%] h-10 rounded-md p-3 "
        placeholder="Type your message ... "
        required
        onChange={(e) => setWrittenText(e.target.value)}
      />
      <button
        type="submit"
        className=" w-[10%] text-xs text-white bg-main_color h-10 rounded-md "
      >
        Send
      </button>
    </form>
  );
};
export default MessageType;
