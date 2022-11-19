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
  const [allUsers, setAllUsers] = useState([
    {
      name: 'Josh',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
    },
    {
      name: 'Sabine',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
    },
    {
      name: 'Linda',
      image: 'https://api.lorem.space/image/fashion?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
    },
    {
      name: 'Sam',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
    },
    {
      name: 'Josh',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
    }])
  const [userReceiver, setUserReceiver] = useState(allUsers[2])

  return (
    <MessageContext.Provider value={{ userName, setUserName, userEmail, setUserEmail, userPassword, setUserPassword, allMessages, setAllMessages, allUsers, setAllUsers, userReceiver, setUserReceiver }} >
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
