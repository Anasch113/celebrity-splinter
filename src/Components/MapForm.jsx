import React from 'react'

const MapForm = () => {
  return (
    <div className='w-full flex items-center justify-center pt-2 max-[700px]:px-5'>
        <div className='w-2/3 max-[700px]:w-full'>

        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03609235!2d-74.30933268632423!3d40.697539959410896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1705147996183!5m2!1sen!2s " height={300} style={{ border: '0', }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
</div>
    </div>
  )
}


export default MapForm;