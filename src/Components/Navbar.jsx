import React from 'react'
import Logo from "../assets/cs-logo.png"
const Navbar = () => {
  return (
    <div className='w-full flex   items-center justify-center gap-4  bg-bg-color z-50 fixed   ' >
       

        <div className='flex items-center justify-center  w-2/3 max-[700px]:w-full py-7 max-[700px]:py-2 '>

   

    

    
    <ul className='flex items-center justify-center w-full gap-5 max-[700px]:flex-col max-[700px]:text-center '>

    <span className='text-3xl w-56 text-text-white text-center max-[700px]:text-2xl max-[700px]:w-32'>
       <img src={Logo} alt="img" />
    </span>

    <div className=' flex items-center justify-center'>

<p className='text-text-gray-nav font-lulo text-lg max-[700px]:text-xs max-[700px]:mb-5 max-[700px]:text-center'>CALL/TEXT NOW: <a target='_main' href='tel:5167617598' className='text-text-purple-color underline font-lulo text-lg'> 516-761-7598</a></p>
        </div>
   
    </ul>
       

    </div>

        </div>
      
   
  )
}

export default Navbar
