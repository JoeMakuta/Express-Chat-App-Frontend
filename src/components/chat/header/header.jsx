import { GoBell } from "react-icons/go";
import SearchBar from "./searchBar";
import User from "./user";
import { HiOutlineBell } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import Menu from "./menu";

const Header = () => {
  return (
    <section className="flex justify-between px-3 sm:px-10 max-w-[1500px] items-center h-[80px] md:h-[60px] min-h-[60px] bg-slate-800 w-full text-white fixed z-20">
      <div>
        <Menu />
      </div>
      <div className=" flex gap-4 justify-center items-center ">
        <SearchBar />
        <VscBell size={25} className="hidden sm:block cursor-pointer " />
        <User />
      </div>
    </section>
  );
};

export default Header;
