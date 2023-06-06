const User = () => {
  return (
    <div className=" w-10 cursor-pointer relative h-10   ">
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
