import { useState } from "react"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom"
import Chat from "./components/chat/chat"
import { createContext } from "react"

export const MessageContext = createContext()

function App() {
  const [userName, setUserName] = useState('Josh')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [allMessages, setAllMessages] = useState([])
  return (
    <MessageContext.Provider value={{ userName, setUserName, userEmail, setUserEmail, userPassword, setUserPassword, allMessages, setAllMessages }} >
      <div
        className="font-[Poppins] font-normal gap-10 flex justify-center items-center h-[100vh]  bg-gray-200 ">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Login
                  userName={userName}
                  userEmail={userEmail}
                  userPassword={userPassword}
                  setUserName={setUserName}
                  setUserEmail={setUserEmail}
                  setUserPassword={setUserPassword}
                />}
            />
            <Route
              path="/signup"
              element={
                <Signup
                  userName={userName}
                  userEmail={userEmail}
                  userPassword={userPassword}
                  setUserName={setUserName}
                  setUserEmail={setUserEmail}
                  setUserPassword={setUserPassword}
                />}
            />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div >
    </MessageContext.Provider>

  )
}

export default App
