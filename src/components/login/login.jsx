import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { AiFillEyeInvisible, AiFillEye, AiOutlineEye } from "react-icons/ai"
import { FaRegUser } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

import { MessageContext, showToastMessage } from "../../App"

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
               localStorage.setItem('imageUrl', data.user.image)
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
         showToastMessage('Logged as ' + localStorage.getItem('userName'), 3)
         navigate('/chat')
      }
   }, [])

   return (
      <form className=" backdrop-blur-md text-center w-[85vw] sm:w-[25vw] h-fit  bg-white bg-opacity-30 text-xs rounded-3xl flex items-center justify-around flex-col p-[30px] sm:shadow-2xl "
         onSubmit={(e) => {
            e.preventDefault()
            loginUser()
         }}>

         <div className="flex flex-col justify-center items-center  p-3 pt-0 gap-3" >
            <FaRegUser size={60} />
            <p className=" font-bold text-xl " >User Login</p>
            <p className=" text-gray-600 text-sm " >Hey, enter your details to get sign in to your account</p>
         </div>
         {/* {
            response && showToastMessage(response.message, 2)
         } */}

         <div className="flex flex-col text-start text-sm gap-4 w-full " >
            <div>

               <input type="email"
                  required={true}
                  placeholder="Email/Username"
                  className={inputStyles}
                  onChange={(e) => {
                     messageContext.setUserEmail(e.target.value)
                  }} />
            </div>
            <div>


               <div className={inputStyles + 'flex '}>
                  <input
                     required={true}
                     type={showPassword ? "text" : "password"}
                     placeholder="Password"
                     className=" outline-none w-[90%] "
                     onChange={(e) => {
                        messageContext.setUserPassword(e.target.value)
                     }} />
                  <button type="button"
                     onClick={() => {
                        showPassword ? setShowPassword(false) : setShowPassword(true)
                     }}>
                     {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                  </button>
               </div>
            </div>
         </div>
         <div
            className=" flex flex-col gap-3 pt-5 w-full" >
            <button
               type="submit"
               className=" w-full h-10 rounded-lg bg-orange-400 active:bg-black "
            >
               SIGN IN
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