import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { BsCameraVideo, BsTelephone } from "react-icons/bs"
import { GoKebabVertical } from 'react-icons/go'
import { MessageContext } from "../../App"

const ReceiverUser = () => {
   const messageContext = useContext(MessageContext)


   return (
      <div className=" flex flex-col items-center justify-between pt-2 " >
         <div className=" flex w-full justify-between items-center " >
            <div className=" flex justify-center items-center gap-3 " >
               <img src={messageContext.userReceiver && messageContext.userReceiver.image} className=" rounded-full w-10" />
               <div>
                  <div className=" font-bold  " >{messageContext.userReceiver.userName}</div>
                  <p className=" text-xs ">Proffessional account</p>
               </div>
            </div>
            <div className=" flex gap-3 items-center justify-center " >
               {/* <BsTelephone size={15} />
               <BsCameraVideo size={20} />
               <GoKebabVertical size={20} /> */}
            </div>
         </div>
         <div className=" w-full h-[1px] bg-black mt-3 mb-4 bg-opacity-20 " ></div>
      </div>
   )
}

export default ReceiverUser