
import { useState } from "react"
import { inputStyles } from "../login/login"

const Signup = (props) => {

   const [matchedPWD, setMatchedPWD] = useState(false)
   const [repeatPassword, setRepeatPassword] = useState(false)
   const [showPassword, setShowPassword] = useState(false)

   const handleUserName = (e) => {
      props.setUserName(e)
   }
   const handleUserEmail = (e) => {
      props.setUserEmail(e)
   }
   const handleUserPassword = (e) => {
      props.setUserPassword(e)
   }
   const passWordMatched = (passWord1, passWord2) => {
      passWord1 == passWord2 ? setMatchedPWD(false) : setMatchedPWD(true);
   }


   const insert_data = async () => {
      await fetch("http://localhost:5000" + '/signup', {
         method: 'POST',
         mode: 'cors',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(
            {
               "userName": props.userName,
               "userEmail": props.userEmail,
               "passWord": props.userPassword
            }
         )
      }).then((data) => console.log('Successfully inserted'))
         .catch((err) => console.log('Failed to insert data !', err))
   }

   return (
      <div className=" text-center w-[85vw] sm:w-[30vw] h-fit sm:h-fit bg-white text-sm rounded-3xl flex items-center justify-around flex-col p-[30px] shadow-lg  gap-5  " >

         <div className="flex flex-col  p-6 pt-0 gap-3" >
            <p className=" font-bold text-2xl " >Create Account</p>
            <p>Hey, enter your details to get sign up to the Express chat app</p>
         </div>
         <div className="flex flex-col text-start text-sm gap-4 w-full " >
            <div className="flex gap-3 items-center justify-between ">
               <p>Name :</p>
               <input
                  type="text"
                  placeholder="Username"
                  className={inputStyles + "w-[50%]"}
                  onChange={(e) => { handleUserName(e.target.value) }}
               />
            </div>
            <div className="flex  gap-3 items-center justify-between">
               <p>Email :</p>
               <input
                  type="email"
                  placeholder="makutajosue@gmail.com"
                  className={inputStyles + "w-[70%]"}
                  onChange={(e) => { handleUserEmail(e.target.value) }}
               />
            </div>
            <div className="flex  gap-3 items-center justify-between">
               <p>Password :</p>
               <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={inputStyles + "w-[60%]"}
                  onChange={(e) => { handleUserPassword(e.target.value) }}
                  id="password"
               />
               <button onClick={() => {
                  showPassword ? setShowPassword(false) : setShowPassword(true)
               }} >{showPassword ? 'Hide' : "Show"}</button>
            </div>
            <div className="flex  gap-3 items-center justify-between">
               <p>Repeat Password :</p>
               <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={inputStyles + "w-[60%]"}
                  onChange={(e) => {
                     passWordMatched(props.userPassword, repeatPassword)
                     setRepeatPassword(e.target.value);

                  }}
               />
            </div>
         </div>
         <div className=" flex flex-col gap-3 pt-5 mb-4 w-full" >
            <button
               className=" w-full h-10 rounded-lg bg-blue-400 "
               onClick={() => {
                  passWordMatched(props.userPassword, repeatPassword);
                  insert_data()
               }}
            >
               SIGNUP
            </button>
            {matchedPWD && <div
               className="font-['courrier']  text-red-500" >
               Passwords do not match.
            </div>}
            <p>Have an account ?
               <button
                  className="ml-3 text-cyan-600" >
                  Signin
               </button>
            </p>
         </div>
      </div>
   )
}

export default Signup