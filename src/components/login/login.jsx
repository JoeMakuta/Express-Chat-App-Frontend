import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { AiFillQqCircle } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"

import { MessageContext } from "../../App"

export const inputStyles = " h-10 p-3 w-[100%] border-[1px] border-gray-400 rounded-lg outline-none "


const Login = () => {
   const messageContext = useContext(MessageContext)

   const [showPassword, setShowPassword] = useState(false)
   const [response, setResponse] = useState({})
   const [authenticated, setAuthenticated] = useState(false)
   const navigate = useNavigate()

   const loginUser = async () => {
      await fetch(import.meta.env.VITE_USER_HOST_NAME + '/login', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(
            {
               "userEmail": messageContext.userEmail,
               "passWord": messageContext.userPassword
            }
         )
      }).then(data => data.json())
         .then((data) => {
            setResponse(data)
            console.log(data);
            if (data.token) {
               localStorage.setItem('token', data.token)
               localStorage.setItem('userId', data.user._id)
               localStorage.setItem('userName', data.user.userName)
               localStorage.setItem('userEmail', data.user.userEmail)
            }
            console.log(data)
            if (data.status == 200) {
               navigate('/chat')
            }
         })
   }

   useEffect(() => {
      const token = localStorage.getItem("token")
      if (token) {
         navigate('/chat')
      }
   }, [])

   return (
      <form className=" backdrop-blur-md text-center w-[85vw] sm:w-[25vw] h-fit sm:h-[70vh] bg-white bg-opacity-90 text-sm rounded-3xl flex items-center justify-around flex-col p-[30px] shadow-2xl "
         onSubmit={(e) => {
            e.preventDefault()
            loginUser()
         }} >
         <div className="flex flex-col  p-6 pt-0 gap-3" >
            <p className=" font-bold text-2xl " >User Login</p>
            <p>Hey, enter your details to get sign in to your account</p>
         </div>
         {
            response && <div className={response.status == 200 ? " text-3xl text-green-400 " : " text-3xl text-red-700 "}>
               {response.message}
            </div>
         }
         <div className="flex flex-col text-start text-sm gap-4 w-full " >
            <input type="email"
               required={true}
               placeholder="Email/Username"
               className={inputStyles}
               onChange={(e) => {
                  messageContext.setUserEmail(e.target.value)
               }} />
            <input
               required={true}
               type={showPassword ? "text" : "password"}
               placeholder="Password"
               className={inputStyles}
               onChange={(e) => {
                  messageContext.setUserPassword(e.target.value)
               }} />
            <button type="button"
               onClick={() => {
                  showPassword ? setShowPassword(false) : setShowPassword(true)
               }}>
               {showPassword ? 'Hide' : 'Show'}
            </button>
         </div>
         <div
            className=" flex flex-col gap-3 pt-5 w-full" >
            <button
               type="submit"
               className=" w-full h-10 rounded-lg bg-orange-400 "
            >
               SIGN
            </button>
            <p>Don't have an account ?
               <button type="button"
                  className="text-cyan-600" >
                  <Link to='/signup'> Signup</Link>
               </button>
            </p>
         </div>
      </form >
   )
}

export default Login