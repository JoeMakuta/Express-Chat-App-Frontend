import { useState } from "react"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Chat from "./components/chat/chat"
import { createContext } from "react"

export const MessageContext = createContext()



function App() {
  const [userName, setUserName] = useState('Josh')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [allMessages, setAllMessages] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [userReceiver, setUserReceiver] = useState([])
  const [showConversation, setShowConversation] = useState(false)

  return (
    <MessageContext.Provider value={{ userName, setUserName, userEmail, setUserEmail, userPassword, setUserPassword, allMessages, setAllMessages, allUsers, setAllUsers, userReceiver, setUserReceiver, showConversation, setShowConversation }} >
      <div
        className="font-[Poppins] bg-cover bg-opacity-30 font-normal gap-10 h-[100vh] flex justify-center bg-gray-200 ">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/chat"
              element={<Chat />}
            />
          </Routes>
        </BrowserRouter>
      </div >
    </MessageContext.Provider>

  )
}

export default App
