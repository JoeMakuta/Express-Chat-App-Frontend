import { useContext, useState } from "react"

const Message = (props) => {
  
   return <div className=" flex gap-[0.5vw] mt-2 mb-2" >
      <div className=" flex justify-center items-center w-[4vw] h-[4vw] bg-person_background rounded-full  font-bold text-2xl " >
         {props.name.charAt(0)}
      </div>
      <div className="bg-message_background rounded-bl-3xl rounded-r-3xl p-[2vw] box-content text-white">
         {props.message}
      </div>
   </div>
}

// Message.defaultProps = {
//    name: 'Josh',
//    message: 'Hello World ...'
// }

export default Message