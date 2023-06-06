import { inputStyles } from "../../login/login";

const MessageType = () => {
  return (
    <form className="flex justify-center items-center absolute bottom-0 border-t-[1px] w-full h-[12%] border-black/10 gap-2 ">
      <input
        type="text"
        className=" outline-none bg-black/10 w-[85%] h-10 rounded-md p-3 "
        placeholder="Type your message ... "
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
