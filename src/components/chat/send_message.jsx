

import { AiOutlineSend } from 'react-icons/ai'
import { useState } from 'react'
import { MessageContext } from '../../App'
import { useContext } from 'react'


const SendMessage = (props) => {
   const messageContext = useContext(MessageContext)
   const [inputMessage, setInputMessage] = useState(null)

   const handleSend = () => {
      messageContext.setAllMessages(messageContext.allMessages.concat([{ name: 'Josh', message: inputMessage }]));
   }

   return <div className=" flex self-center  gap-[1vw] fixed bottom-10  " >
      <input
         className=" w-[80vw]  outline-none border-[1px] rounded-full bg-gray-300 p-5 "
         type="text"
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
         className=" flex items-center justify-center rounded-full h-16 w-16 bg-person_background active:bg-message_background "
         onClick={(e) => {
            handleSend()
            e.target.value = ''
         }} >
         <AiOutlineSend
            size={30}
            color='#ffffff' />
      </button>
   </div>
}

export default SendMessage