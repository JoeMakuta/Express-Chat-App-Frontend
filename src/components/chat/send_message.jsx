import { AiOutlineSend } from 'react-icons/ai'
import { useState } from 'react'
import { MessageContext } from '../../App'
import { useContext } from 'react'
// import { getUserMessages } from './users'
import { socket } from '../../App'



const SendMessage = (props) => {
   const messageContext = useContext(MessageContext)
   const [inputMessage, setInputMessage] = useState(null)

   const handleSend = async () => {



      await fetch(import.meta.env.VITE_USER_HOST_NAME + '/newMessage', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
         },
         body: JSON.stringify(
            {
               senderId: localStorage.getItem('userId'),
               receiverId: localStorage.getItem('receiverId'),
               message: inputMessage
            }
         )
      }).then(() => {
         socket.emit('message', {
            message: inputMessage,
            senderId: localStorage.getItem('userId'),
            receiverId: localStorage.getItem('receiverId'),
            socketId: socket.id
         });
         // messageContext.setUserMessages(messageContext.userMessages.concat(
         //    [
         //       {
         //          senderId: localStorage.getItem('userId'),
         //          message: inputMessage
         //       }
         //    ]));
      })

   }

   return <div className=" flex gap-3 mt-4 items-center " >
      <input
         placeholder='Write your message ...'
         className=" sm:w-[52vw] text-sm outline-none  rounded-xl bg-white p-4   "
         type="text"
         id='messageInput'
         onChange={(e) => {
            setInputMessage(e.target.value)
         }}
         onKeyPress={(e) => {
            if (event.key === 'Enter') {
               handleSend()
               e.target.value = ''
            }
         }}
      />
      <button
         className=" flex items-center justify-center rounded-full h-12 w-12 bg-person_background active:bg-message_background "
         onClick={(e) => {
            handleSend();
            document.getElementById('messageInput').value = ''
         }} >
         <AiOutlineSend size={20} color='#ffffff' />
      </button>
   </div>
}

export default SendMessage