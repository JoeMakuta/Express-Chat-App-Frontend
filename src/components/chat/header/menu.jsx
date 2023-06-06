const Menu = () => {
  return (
    <div className="flex gap-4 text-sm text-white/50 justify-center items-center ">
      <a href="">Home</a>
      <a href="" className=" bg-main_color text-black/70  p-2 rounded-md">
        Messages
      </a>
      <a href="">Support</a>
    </div>
  );
};

export default Menu;
