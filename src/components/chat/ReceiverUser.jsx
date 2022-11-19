import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { BsCameraVideo, BsTelephone } from "react-icons/bs"
import { GoKebabVertical } from 'react-icons/go'
import { MessageContext } from "../../App"

const ReceiverUser = () => {
   const messageContext = useContext(MessageContext)

   // useEffect(() => {
   //    messageContext.setUserReceiver(messageContext.allUsers[0])
   // })

   return (
      <div className=" flex flex-col items-center justify-between pt-2 " >
         <div className=" flex w-full justify-between items-center " >
            <div className=" flex justify-center items-center gap-3 " >
               <img src={messageContext.userReceiver && messageContext.userReceiver.image} className=" rounded-full w-14" />
               <div>
                  <div className=" font-bold text-xl " >{messageContext.userReceiver.userName}</div>
                  <p className=" text-xs ">Proffessional account</p>
               </div>
            </div>
            <div className=" flex gap-3 items-center justify-center " >
               <BsTelephone size={20} />
               <BsCameraVideo size={25} />
               <GoKebabVertical size={20} />
            </div>
         </div>
         <div className=" w-full h-[1px] bg-black mt-4 mb-4 bg-opacity-20 " ></div>
      </div>
   )
}

export default ReceiverUser