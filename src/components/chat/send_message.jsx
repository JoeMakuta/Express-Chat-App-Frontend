import { AiOutlineSend } from 'react-icons/ai'
import { useState } from 'react'
import { MessageContext } from '../../App'
import { useContext } from 'react'
// import { getUserMessages } from './users'


const SendMessage = (props) => {
   const messageContext = useContext(MessageContext)
   const [inputMessage, setInputMessage] = useState(null)

   const handleSend = async () => {
      // messageContext.setAllMessages(messageContext.allMessages.concat([{ name: 'Josh', message: inputMessage }]));
      await fetch(import.meta.env.VITE_USER_HOST_NAME + '/newMessage', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(
            {
               senderId: localStorage.getItem('userId'),
               receiverId: localStorage.getItem('receiverId'),
               message: inputMessage
            }
         )
      })
   }

   return <div className=" flex gap-3 items-center fixed bottom-10 right-14  " >
      <input
         className=" sm:w-[52vw] outline-none  rounded-xl bg-white p-4   "
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