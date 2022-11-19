import { RiLogoutCircleLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { VscAccount, VscSettingsGear } from 'react-icons/vsc'
import { GrHomeRounded } from 'react-icons/gr'

const menuItems = [
   {
      name: 'Dashboard',
      icon: <GrHomeRounded size={20} color='#000000' />,
   },
   {
      name: 'Dashboard',
      icon: <AiOutlineMessage size={23} color='#000000' />,
   },
   {
      name: 'Dashboard',
      icon: <VscSettingsGear size={20} color='#000000' />,
   }
]

const sideMenu = () => {
   return (
      <div className=' flex flex-col  w-14 justify-between items-center h-[100vh] pb-10'>
         <div className=' flex flex-col gap-2 pt-52' >
            {
               menuItems.map((elt, index) => {
                  return (
                     <div key={index} className="cursor-pointer w-14 h-14 flex justify-center items-center rounded-full hover:bg-person_background " >
                        {elt.icon}
                     </div>
                  )
               })
            }
         </div>

         <div className=' flex justify-center items-center flex-col gap-10 ' >
            <VscAccount className='cursor-pointer' size={30} color='#000000' />
            <RiLogoutCircleLine className='cursor-pointer' size={20} color='#000000' />
         </div>
      </div>

   )
}

export default sideMenu