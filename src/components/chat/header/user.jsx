import { useContext } from "react";
import { MessageContext } from "../../../App";

const User = () => {
  return (
    <div className=" w-12 cursor-pointer relative h-12   ">
      <img
        src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
        alt=""
        className=" rounded-full "
      />
      <div className=" w-3 h-3 absolute bg-green-600 bottom-0 right-0 rounded-full "></div>
    </div>
  );
};

export default User;
