import React from 'react'
import logo from "/cs-logo.png"
const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center py-20'>
      

      <div className='w-2/3 flex flex-col items-center gap-10 max-[700px]:w-full'>

<div className='flex items-center justify-between w-full max-[700px]:flex-col '>
<img src={logo} className='w-72'></img>
<p className='text-text-gray-other font-lulo text-lg max-[700px]:text-center max-[700px]:mt-3'>Outstanding Service, Guaranteed</p>
</div>


<div className='flex flex-row justify-center items-center gap-10'>
<div className='flex flex-col items-center font-proxima text-sm '>
<p>Long Island, New York City</p>
    <p>ceo@mallcom.com</p>
    <p>516-761-7598</p>

    <p className='text-lg font-poppins pt-10 max-[700px]:text-center'>© 2024 All Rights Reserved by Celebrity Sprinter</p>
</div>
   

    

   

</div>

      </div>
    </div>
  )
}

export default Footer
