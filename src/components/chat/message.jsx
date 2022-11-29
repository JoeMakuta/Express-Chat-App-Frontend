import { useContext, useState } from "react"
import { MessageContext } from "../../App"

export const Message = (props) => {
   const messageContext = useContext(MessageContext)
   return (
      <div className=" flex gap-[0.5vw] self-end mt-2 mb-2" >

         <div className=" flex items-center justify-start h-fit  bg-person_background rounded-br-xl rounded-l-xl p-4 max-w-sm box-content text-white text-xs ">
            {props.message}
         </div>
         <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-message_background text-white font-bold text-xl " >
            {localStorage.getItem('userName').charAt(0).toUpperCase()}
         </div>
      </div>
   )
}

export  const  Message1 = (props) => {
   const messageContext = useContext(MessageContext)
   return (
      <div className=" flex gap-[0.5vw] self-start mt-2 mb-2" >
         <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-person_background  font-bold text-xl " >
            {messageContext.userReceiver.userName.charAt(0).toUpperCase()}
         </div>
         <div className=" flex items-center justify-start h-fit  bg-message_background rounded-bl-xl rounded-r-xl p-4 max-w-sm box-content text-white text-xs ">
            {props.message}
         </div>
      </div>
   )
}

// Message.defaultProps = {
//    name: 'Josh',
//    message: 'Hello World ...'
// }

