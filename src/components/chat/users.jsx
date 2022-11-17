import { BsSearch } from 'react-icons/bs'
const usersItems = [
   {
      name: 'Josh',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
   },
   {
      name: 'Sabine',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
   },
   {
      name: 'Linda',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
   },
   {
      name: 'Sam',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
   },
   {
      name: 'Josh',
      image: 'https://api.lorem.space/image/face?w=150&h=150',
      lastMessage: 'Hello my bro, How is it ?'
   },
   
]

const users = () => {
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
               usersItems.map((elt) => {
                  return (
                     <div className=' flex bg-black bg-opacity-10 p-4 rounded-lg justify-start gap-3 ' >
                        <img className=' rounded-full w-10' src={elt.image} />
                        <div>
                           <p className=' text-sm font-bold ' >{elt.name}</p>
                           <p className=' text-xs ' >{elt.lastMessage}</p>
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