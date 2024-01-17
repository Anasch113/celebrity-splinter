import React, { useState , useEffect, useRef} from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {


  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideshowTimer, setSlideshowTimer] = useState(null);
  const sliderRef = useRef(null);


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed as needed (e.g., 2000 milliseconds for a 2-second delay)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setCurrentIndex(next),
    arrows: false,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed as needed (e.g., 2000 milliseconds for a 2-second delay)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (current, next) => setCurrentIndex(next),
    arrows: true,
  };

  const openModal = (image, index) => {
    setModalOpen(true);
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalOpen(false);
  };






  const images = ["https://www.exoticshunter.com/imagetag/487/main/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1696979385.jpg",

  "https://www.exoticshunter.com/imagetag/487/2/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1696979385.jpg", 

  "https://www.exoticshunter.com/imagetag/487/3/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1696979385.jpg",


  "https://www.exoticshunter.com/imagetag/487/5/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


  "https://www.exoticshunter.com/imagetag/487/6/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg", 




  "https://www.exoticshunter.com/imagetag/487/7/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",



  "https://www.exoticshunter.com/imagetag/487/8/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",



  "https://www.exoticshunter.com/imagetag/487/9/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",

  "https://www.exoticshunter.com/imagetag/487/10/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",

  "https://www.exoticshunter.com/imagetag/487/11/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",

  "https://www.exoticshunter.com/imagetag/487/12/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",

  "https://www.exoticshunter.com/imagetag/487/13/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


  "https://www.exoticshunter.com/imagetag/487/14/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",



  "https://www.exoticshunter.com/imagetag/487/15/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


  "https://www.exoticshunter.com/imagetag/487/16/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",



 "https://www.exoticshunter.com/imagetag/487/17/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg", 


 "https://www.exoticshunter.com/imagetag/487/18/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",



 "https://www.exoticshunter.com/imagetag/487/19/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",



 "https://www.exoticshunter.com/imagetag/487/20/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",



 "https://www.exoticshunter.com/imagetag/487/21/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


 "https://www.exoticshunter.com/imagetag/487/22/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


 "https://www.exoticshunter.com/imagetag/487/23/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


 "https://www.exoticshunter.com/imagetag/487/24/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/25/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/26/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/27/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/28/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/29/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",

"https://www.exoticshunter.com/imagetag/487/30/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/31/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",



"https://www.exoticshunter.com/imagetag/487/32/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/33/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/34/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/35/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg",


"https://www.exoticshunter.com/imagetag/487/36/f/Used-2021-Rolls-Royce-Black-Badge-Cullinan-w-Warranty-Until-2025-Shooting-Star-Headliner-Theatre-Config+Tables-1697207402.jpg"

]



 






  


    





  return (
    <div className='w-full h-full   pt-10 flex flex-col items-center justify-center max-[700px]:pt-24'>
<div className='w-2/3 flex items-center justify-center flex-col max-[700px]:w-full'>




      <div className='w-full  max-[700px]:w-full'>
       
      
      
      <Slider   {...settings}>
      
      
        {


          images.map((image, index) => (
            
          
            <img 
              className=' w-full h-[620px] max-[700px]:h-auto'
              src={image}
              alt="img"
              style={{ display: index === currentIndex ? 'flex' : 'none' }}
              onClick={() => openModal(image, index)} />
            
             
              
          
          ))
      
        }
     
     
    
        
         </Slider>
        
         <Modal open={modalOpen} onClose={closeModal} center styles={{ modal: { maxWidth: '90%', width: '90%', margin: 0 } }}>
     
          <Slider className='w-full text-center' {...settings2} initialSlide={currentIndex}>
            {images.map((image, index) => (
              <div key={index}>
                <img className='w-2/3  ' src={image} alt={`Image ${index}`} />
              </div>
            ))}
          
          </Slider>
         
       
      </Modal>

      </div>
      <div className='flex justify-between w-full font-lulo text-xl max-[700px]:w-full max-[700px]:flex-col max-[700px]:items-center mt-4 max-[700px]:text-sm max-[700px]:gap-2'>
        <p>2021 ROLLS ROYCE CULLINAN </p>
        <p>$1495/day</p>
      </div>
      </div>
    </div>
  )
}

export default Banner
