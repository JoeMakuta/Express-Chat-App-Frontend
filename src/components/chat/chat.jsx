import { useEffect, useState } from 'react'
import Message from './message'
import SendMessage from './send_message'
import { MessageContext } from '../../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Users from './users'
import SideMenu from './sideMenu'
import ReceiverUser from './ReceiverUser'


const Chat = () => {
   const navigate = useNavigate()
   const messageContext = useContext(MessageContext)
   

   return (
      <div className=' flex w-[95vw] items-center justify-between flex-wrap ' >
         <SideMenu />
         <Users />
         <div className={messageContext.showConversation ? " flex flex-col w-[60vw] bg-black bg-opacity-10 p-5 pt-2 rounded-lg h-[95vh]  " : " flex flex-col items-center justify-center w-[60vw] bg-black bg-opacity-10 p-5 pt-2 rounded-lg h-[95vh]  " } >
            {messageContext.showConversation ? <ReceiverUser /> : ''  } 
            {
               messageContext.allMessages.map((elt, index) => {
                  return <Message key={index} name={elt.name} message={elt.message} />
               })
            }
           {messageContext.showConversation ? <SendMessage /> : <p className=' font-extralight text-xs ' >No Conversation</p>}
         </div>
      </div>
   )
}

export default Chat