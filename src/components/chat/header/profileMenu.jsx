import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className=" absolute top-16 right-8  rounded-md py-3 bg-white shadow-lg shadow-black/25 z-40 text-black ">
      <button className=" w-32 hover:bg-black/5 text-sm h-8 " onClick={Logout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileMenu;
