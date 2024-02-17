import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="flex flex-col absolute top-16 right-8  rounded-md py-3 bg-white shadow-lg shadow-black/25 z-40 text-black ">
      <div className=" p-4 ">
        <div>
          Name : {currentUser.user.fName} {currentUser.user.lName}
        </div>
        <div>User name : {currentUser.user.userName}</div>
      </div>
      <button className="  hover:bg-black/10 text-sm h-8 " onClick={Logout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileMenu;
