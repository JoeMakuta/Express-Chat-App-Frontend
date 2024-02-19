import { useState } from "react";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Chat from "./components/chat/chat";
import { createContext } from "react";
import { useEffect } from "react";
import Home from "./components/main/main";

export const MessageContext = createContext();

export const showToastMessage = (message, status) => {
  if (status == 1) {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  } else if (status == 2) {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  } else if (status == 3) {
    toast.info(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

const App = () => {
  const [userName, setUserName] = useState("Josh");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [userReceiver, setUserReceiver] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    user ?? setCurrentUser(user);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("currentUser", JSON.stringify(currentUser));
  // }, [currentUser]);

  return (
    <MessageContext.Provider
      value={{
        currentConversation,
        setCurrentConversation,
        currentUser,
        setCurrentUser,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        allMessages,
        setAllMessages,
        allUsers,
        setAllUsers,
        userReceiver,
        setUserReceiver,
        userMessages,
        setUserMessages,
      }}
    >
      <main className="flex items-center font-mainFont  justify-center min-h-sreen h-[100vh] ">
        {/* <ToastContainer /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </main>
    </MessageContext.Provider>
  );
};

export default App;
