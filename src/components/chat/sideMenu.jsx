import { RiLogoutCircleLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { VscAccount, VscSettingsGear } from 'react-icons/vsc'
import { GrHomeRounded } from 'react-icons/gr'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const menuItems = [
   {
      name: 'Dashboard',
      icon: <GrHomeRounded size={20} color='#000000' />,
   },
   {
      name: 'message',
      icon: <AiOutlineMessage size={23} color='#000000' />,
   },
   {
      name: 'settings',
      icon: <VscSettingsGear size={20} color='#000000' />,
   }
]


const sideMenu = () => {
   const [selectedMenu, setSelectedMenu] = useState('message')
   const navigate = useNavigate()

   const logOut = () => {
      localStorage.clear()
      navigate('/')
      window.location.reload()
   }

   return (
      <div className=' flex flex-col bg-black  w-24 bg-opacity-10 justify-between items-center h-[100vh] pb-10'>

         <div className=' flex flex-col gap-2 h-[50%] justify-center  ' >
            {
               menuItems.map((elt, index) => {
                  return (
                     <div key={index} className={elt.name == selectedMenu ? "cursor-pointer w-14 h-14 flex justify-center items-center rounded-full bg-person_background " : "cursor-pointer w-14 h-14 flex justify-center items-center rounded-full hover:bg-person_background hover:bg-opacity-20 "}
                        onClick={() => {
                           setSelectedMenu(elt.name)
                        }}
                     >
                        {elt.icon}
                     </div>
                  )
               })
            }
         </div>

         <div className=' flex justify-center items-center flex-col gap-10 ' >
            {/* <VscAccount
               className='cursor-pointer'
               size={30}
               color='#000000' /> */}
            <div className=' flex  flex-col gap-3 justify-center items-center pt-6 ' >
               <img className=' rounded-full w-10 ' src={localStorage.getItem('imageUrl')} alt="" />
               <div className=' text-center leading-5 font-bold ' >{localStorage.getItem('userName')}
               </div>
            </div>
            <RiLogoutCircleLine
               className='cursor-pointer'
               size={20}
               color='#000000'
               onClick={logOut}
            />
         </div>
      </div>

   )
}

export default sideMenu