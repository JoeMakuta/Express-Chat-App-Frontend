import { useEffect, useState } from 'react'
import Message from './message'
import SendMessage from './send_message'
import { MessageContext } from '../../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Users from './users'
import SideMenu from './sideMenu'


const Chat = () => {
   const navigate = useNavigate()
   const messageContext = useContext(MessageContext)

   return (
      <div className=' flex w-[95vw] items-center justify-between flex-wrap ' >
         <SideMenu />
         <Users />
         <div className=" flex flex-col w-[60vw] bg-black bg-opacity-10 pl-5 pt-2 rounded-lg h-[95vh]  " >
            {
               messageContext.allMessages.map((elt, index) => {
                  return <Message key={index} name={elt.name} message={elt.message} />
               })
            }
            <SendMessage />
         </div>
      </div>
   )
}

export default Chat