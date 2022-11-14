import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const inputStyles = " h-10 p-3 w-[100%] border-[1px] border-gray-400 rounded-xl outline-none "

const Login = (props) => {

   const [showPassword, setShowPassword] = useState(false)
   const [response, setResponse] = useState({})
   const navigate = useNavigate()

   const loginUser = async () => {
      await fetch(import.meta.env.VITE_USER_HOST_NAME + '/login', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(
            {
               "userEmail": props.userEmail,
               "passWord": props.userPassword
            }
         )
      }).then(data => data.json())
         .then((data) => {
            setResponse(data)
            console.log(data)
            redirectChat()
         })
   }

   const redirectChat = async () => {
      if (response.status == 200) {
         navigate('/chat')
      }
   }

   return (
      <form className=" text-center w-[85vw] sm:w-[25vw] h-fit sm:h-[70vh] bg-white text-sm rounded-3xl flex items-center justify-around flex-col p-[30px] shadow-xl "
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
                  props.setUserEmail(e.target.value)
               }} />
            <input
               required={true}
               type={showPassword ? "text" : "password"}
               placeholder="Password"
               className={inputStyles}
               onChange={(e) => {
                  props.setUserPassword(e.target.value)
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