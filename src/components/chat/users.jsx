import { useEffect } from 'react'
import { useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import { MessageContext } from '../../App'





const users = () => {
   const messageContext = useContext(MessageContext)

   useEffect(() => {
      fetch(import.meta.env.VITE_USER_HOST_NAME + '/users', {
         method: 'GET',
         headers: {
            "Content-Type": "application/json"
         },
      }).then((data) => data.json())
         .then((data) => {
            console.log(data);
            messageContext.setAllUsers(data.users)
         })
   }, [])

   const getUserMessages = async (receiverId) => {
      localStorage.setItem('receiverId', receiverId)
      await fetch(import.meta.env.VITE_USER_HOST_NAME + '/getMessages/' + localStorage.getItem('userId') + "/" + receiverId, {
         method: 'GET',
         headers: {
            "Content-Type": "application/json"
         }
      }).then(data => data.json())
         .then(data => { messageContext.setAllMessages(data.messages); console.log(data) })
   }

   return (
      <div className="flex flex-col justify-start gap-10 pt-9 pb-10 w-[25vw] h-[100vh] " >
         <div className=' flex items-center justify-between ' >
            <p className=' font-bold text-lg ' >
               Chat
            </p>
            <BsSearch />
         </div>
         <div className=' flex flex-col gap-3 ' >
            {
               messageContext.allUsers.map((elt, index) => {
                  return (
                     <div key={index} className={elt == messageContext.userReceiver ? "flex  hover:bg-opacity-90 scale-105 cursor-pointer bg-person_background p-4 rounded-lg justify-start gap-3" : "flex bg-black bg-opacity-10 hover:bg-opacity-20 hover:scale-105 cursor-pointer  p-4 rounded-lg justify-start gap-3"}
                        onClick={() => {
                           messageContext.setUserReceiver(elt)
                           messageContext.setShowConversation(true)
                           getUserMessages(elt._id)
                        }}
                     >
                        <img className=' rounded-full w-10' src={elt.image} />
                        <div>
                           <p className=' text-sm font-bold ' >{elt.userName}</p>
                           <p className=' text-xs ' >{elt.userEmail}</p>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default users