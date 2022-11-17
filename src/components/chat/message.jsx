import { useContext, useState } from "react"

const Message = (props) => {
  
   return <div className=" flex gap-[0.5vw] mt-2 mb-2" >
      <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-person_background  font-bold text-xl " >
         {props.name.charAt(0)}
      </div>
      <div className=" flex items-center justify-start h-fit  bg-message_background rounded-bl-xl rounded-r-xl p-4 max-w-sm box-content text-white text-xs ">
         {props.message}
      </div>
   </div>
}

// Message.defaultProps = {
//    name: 'Josh',
//    message: 'Hello World ...'
// }

export default Message