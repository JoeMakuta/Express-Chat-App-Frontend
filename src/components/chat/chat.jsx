import { useEffect, useState } from 'react'
import Message from './message'
import SendMessage from './send_message'
import { MessageContext } from '../../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Users from './users'
import SideMenu from './sideMenu'
import ReceiverUser from './ReceiverUser'
import io from 'socket.io-client'

const { VITE_USER_HOST_NAME } = import.meta.env

export let socket

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
         socket = io.connect(VITE_USER_HOST_NAME, {
            auth: {
               userId: localStorage.getItem('userId')
            }
         })
         socket.on('ioMessages', (dataMessage) => {
            console.log('The io messages ', dataMessage);
            messageContext.setAllMessages(messageContext.allMessages.concat(dataMessage))
         })
      } else {
         navigate('/')
      }
   }, [])

   return (
      <div className=' flex bg-white w-[100vw] pl-4 pr-4 items-center justify-between flex-wrap ' >
         <SideMenu />
         <Users />
         <div className={messageContext.showConversation ? " flex flex-col w-[60vw] justify-between bg-black bg-opacity-10 p-5 pt-2 rounded-lg h-[95vh]  " : " flex flex-col items-center justify-center w-[60vw] bg-black bg-opacity-10 p-5 pt-2 rounded-lg h-[95vh]"} >
            {messageContext.showConversation ? <ReceiverUser /> : ''}
            <div id='scrollBar' className=' flex flex-col  h-[68vh] overflow-x-auto ' >
               {
                  messageContext.userMessages.map((elt, index) => {
                     if (elt.senderId == localStorage.getItem('userId')) {
                        return (
                           <div key={index} className=" flex gap-[0.5vw] self-end mt-2 mb-2" >

                              <div className=" flex items-center justify-start h-fit  bg-person_background rounded-br-xl rounded-l-xl p-4 max-w-sm box-content text-white text-xs ">
                                 {elt.message}
                              </div>
                              <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-message_background text-white font-bold text-xl " >
                                 {localStorage.getItem('userName').charAt(0).toUpperCase()}
                              </div>
                           </div>
                        )
                     } else {
                        return (
                           <div key={index} className=" flex gap-[0.5vw] self-start mt-2 mb-2" >
                              <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-person_background  font-bold text-xl " >
                                 {messageContext.userReceiver.userName.charAt(0).toUpperCase()}
                              </div>
                              <div className=" flex items-center justify-start h-fit  bg-message_background rounded-bl-xl rounded-r-xl p-4 max-w-sm box-content text-white text-xs ">
                                 {elt.message}
                              </div>
                           </div>
                        )
                     }

                  })
               }
            </div>
            {messageContext.showConversation ? <SendMessage /> : <p className=' font-extralight text-xs ' >No Conversation</p>}
         </div>
      </div>
   )
}

export default Chat