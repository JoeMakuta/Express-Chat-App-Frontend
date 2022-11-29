import { memo, useEffect, useState } from 'react'
import { Message, Message1 } from './message'
import SendMessage from './send_message'
import { MessageContext } from '../../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Users from './users'
import SideMenu from './sideMenu'
import ReceiverUser from './ReceiverUser'
import io from 'socket.io-client'

const { VITE_USER_HOST_NAME } = import.meta.env

export let socket = io.connect(VITE_USER_HOST_NAME, {
   auth: {
      userId: localStorage.getItem('userId')
   }
})

const AllMessages = () => {

   const messageContext = useContext(MessageContext)
   useEffect(() => {
      socket.on('ioMessages', (dataMessage) => {
         console.log('The io messages ', dataMessage);
         console.log('The userMessages concat : ', messageContext.userMessages.concat(dataMessage));
         messageContext.setAllMessages(messageContext.allMessages.concat(dataMessage))
         if (localStorage.getItem('receiverId')) {
            messageContext.setUserMessages(
               messageContext.allMessages.filter((elt) => {
                  return (elt.senderId == localStorage.getItem('userId') || elt.senderId == localStorage.getItem('receiverId') && (elt.receiverId == localStorage.getItem('userId') || elt.receiverId == localStorage.getItem('receiverId')))
               }
               )
            )
         }

      })
   }, [])

   return (
      <div id='scrollBar' className=' flex flex-col  h-[68vh] overflow-x-auto ' >
         {
            messageContext.userMessages.map((elt, index) => {
               if (elt.senderId == localStorage.getItem('userId')) {
                  return (
                     <Message key={index} message={elt.message} />
                  )
               } else {
                  return (
                     <Message1 key={index} message={elt.message} />
                  )
               }
            })
         }
      </div>
   )
}


const Chat = () => {
   const navigate = useNavigate()
   const messageContext = useContext(MessageContext)

   useEffect(() => {
      if (localStorage.getItem('token')) {
         fetch(VITE_USER_HOST_NAME + '/getMessages/' + localStorage.getItem('userId'), {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
         }).then(data => data.json())
            .then(data => {
               messageContext.setAllMessages(data.messages);
            })
            .then(() => {
               console.log('All messages : ', messageContext.allMessages)
            })

      } else {
         navigate('/')
      }
   }, [])
   return (
      <div className=' flex bg-white w-[100vw] pl-2 sm:pl-4 sm:pr-4 items-center justify-between flex-wrap ' >
         <SideMenu />
         <Users />
         <div className={messageContext.showConversation ? " flex flex-col w-[96vw]  sm:w-[60vw] justify-between bg-black bg-opacity-10 p-5 pt-2 rounded-lg h-[95vh]  " : " flex flex-col items-center justify-center w-[60vw] bg-black bg-opacity-10 p-5 pt-2 rounded-lg h-[95vh]"} >
            {messageContext.showConversation ? <ReceiverUser /> : ''}
            <AllMessages />
            {messageContext.showConversation ? <SendMessage /> : <p className=' font-extralight text-xs ' >No Conversation</p>}
         </div>
      </div>
   )
}


export default memo(Chat)