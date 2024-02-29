import { useContext, useState } from "react";
import { MessageContext } from "../../App";

export const Message = ({ message, user }) => {
  return (
    <div className=" flex w-full gap-2 self-end">
      <div className=" flex overflow-hidden justify-center items-center w-10 h-10 rounded-full bg-message_background text-white font-bold text-xl ">
        {/* <img src={user?.image} alt="" /> */}
        {user?.fName[0].toUpperCase()}
      </div>
      <div className=" flex items-center justify-start h-fit  bg-black/5 rounded-br-xl rounded-l-xl p-3 max-w-sm box-content text-black  ">
        {message}
      </div>
    </div>
  );
};

export const Message1 = ({ message, user }) => {
  return (
    <div className=" flex w-full gap-2 self-start">
      <div className=" flex overflow-hidden justify-center items-center w-10 h-10 rounded-full bg-message_background text-white font-bold text-xl ">
        {user?.fName[0].toUpperCase()}
        {/* <img src={user?.image} alt="" /> */}
      </div>
      <div className=" flex items-center justify-start h-fit  bg-main_color/20 rounded-br-xl rounded-l-xl p-3 max-w-sm  text-black  ">
        {message}
      </div>
    </div>
  );
};

// Message.defaultProps = {
//    name: 'Josh',
//    message: 'Hello World ...'
// }
