import Header from "./header/header";
import LeftBar from "./leftbar/leftBar";

const Chat = () => {
  return (
    <div className=" w-screen flex justify-center bg-gradient-to-tr from-main_color/30 to-white items-center h-full">
      <div className="max-w-[1500px] bg-white max-h-[820px] h-full w-full max-w-screen flex  flex-col  ">
        <Header />
        <main className=" flex h-full flex-col justify-start pt-[60px]  ">
          <LeftBar />
        </main>
      </div>
    </div>
  );
};

export default Chat;
