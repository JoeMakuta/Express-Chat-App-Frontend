
export const inputStyles = " h-10 p-4 w-[100%] border-[1px] rounded-lg outline-none "

const Login = () => {
   return (
      <div className=" text-center w-[85vw] sm:w-[25vw] h-fit sm:h-[70vh] bg-white text-sm rounded-3xl flex items-center justify-around flex-col p-[30px] shadow-xl " >
         <div className="flex flex-col  p-6 pt-0 gap-3" >
            <p className=" font-bold text-2xl " >User Login</p>
            <p>Hey, enter your details to get sign in to your account</p>
         </div>
         <div className="flex flex-col text-start text-sm gap-4 w-full " >
            
            <input type="text" placeholder="Email/Username" className={inputStyles} />
            
            <input type="password" placeholder="Password" className={inputStyles} />
         </div>
         <div className=" flex flex-col gap-3 pt-5 w-full" >
            <button className=" w-full h-10 rounded-lg bg-orange-400 ">SIGN</button>
            <p>Don't have an account ? <button className="text-cyan-600" >Signup</button> </p>
         </div>
      </div>
   )
}

export default Login