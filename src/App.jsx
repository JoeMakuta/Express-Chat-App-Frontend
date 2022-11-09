

import { useState } from "react"
import Login from "./components/login/login"
import Signup from "./components/signup/signup"

function App() {
  const [userName, setUserName] = useState('Josh')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  return (
    <div
      className="font-[Poppins] font-normal gap-10 flex justify-center items-center h-[100vh]  bg-gray-200 ">

      <Signup userName={userName} userEmail={userEmail} userPassword={userPassword} setUserName={setUserName} setUserEmail={setUserEmail} setUserPassword={setUserPassword} ></Signup>

    </div >
  )
}

export default App
