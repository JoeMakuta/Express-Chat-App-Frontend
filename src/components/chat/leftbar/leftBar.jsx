import { BiSearchAlt } from "react-icons/bi";
import SearchBar from "../header/searchBar";
import { inputStyles } from "../../login/login";
import User from "../header/user";

const messages = [{}];

const LeftBar = () => {
  return (
    <section className=" border-r-[1px] border-black/10 flex flex-col justify-start items-start pt-4  min-h-full w-full sm:w-[25%] min-w-[300px] gap-3 ">
      <div className=" flex w-[90%] self-center justify-center items-center relative gap-2  outline-none ">
        <BiSearchAlt size={20} className=" left-3 absolute text-black/30 " />
        <input
          type="text"
          className={
            " bg-slate-700/10 p-4 pl-9 h-12 rounded-md outline-none focus:border-none focus:border-0 text-base focus:shadow-none " +
            inputStyles
          }
          placeholder="Search ... "
        />
      </div>
      <div id="style-4" className="  w-full flex flex-col overflow-x-scroll  ">
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-sm text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-sm text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-sm text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
        <div className=" flex cursor-pointer hover:bg-black/10  transition-all delay-150 justify-between py-4 px-4   gap-4  w-full ">
          <div className=" flex gap-4 justify-center  ">
            <User />
            <div>
              <p className=" font-bold  ">Josué Makuta</p>
              <p className=" text-xs text-slate-500 ">You : Hello My bro !</p>
            </div>
          </div>
          <p className=" text-xs text-slate-500  ">11:00 AM</p>
        </div>
      </div>
    </section>
  );
};

export default LeftBar;
