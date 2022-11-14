import { useEffect, useState } from 'react'
import Message from './message'
import SendMessage from './send_message'
import { MessageContext } from '../../App'
import { useContext } from 'react'

const Chat = () => {

   const messageContext = useContext(MessageContext)

   return (
      <div className=" flex flex-col p-[2vw] " >
         {
            messageContext.allMessages.map((elt, index) => {
               return <Message key={index} name={elt.name} message={elt.message} />
            })
         }
         <SendMessage className=' self-center ' />
      </div>

   )
}

export default Chat