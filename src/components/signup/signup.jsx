import { inputStyles } from "../login/login"


const Signup = () => {
   return (
      <div className=" text-center w-[85vw] sm:w-[30vw] h-fit sm:h-[80vh] bg-white text-sm rounded-3xl flex items-center justify-around flex-col p-[30px] shadow-xl " >
         <div className="flex flex-col  p-6 pt-0 gap-3" >
            <p className=" font-bold text-2xl " >Create Account</p>
            <p>Hey, enter your details to get sign up to the Express chat app</p>
         </div>
         <div className="flex flex-col text-start text-sm gap-4 w-full " >
            <div className="flex gap-3 items-center justify-around ">
               <p>Name :</p>
               <input type="text" placeholder="Username" className={inputStyles + "w-[50%]"} />
            </div>
            <div className="flex  gap-3 items-center justify-around">
               <p>Email :</p>
               <input type="text" placeholder="makutajosue@gmail.com" className={inputStyles + "w-[70%]"} />
            </div>
            <div className="flex  gap-3 items-center justify-around">
               <p>Password :</p>
               <input type="password" placeholder="Password" className={inputStyles + "w-[60%]"} />
            </div>
            <div className="flex  gap-3 items-center justify-around">
               <p>Repeat Password :</p>
               <input type="password" placeholder="Password" className={inputStyles + "w-[60%]"} />
            </div>
         </div>
         <div className=" flex flex-col gap-3 pt-5 w-full" >
            <button className=" w-full h-10 rounded-lg bg-blue-400 ">SIGNUP</button>
            <p>Have an account ? <button className="text-cyan-600" >Signin</button> </p>
         </div>
      </div>
   )
}

export default Signup