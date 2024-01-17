import React, { useState, useEffect } from 'react'
import paymentlogo from "../assets/payment-logo.png"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import "../styles/paypalform.css"
import { FaPlus } from "react-icons/fa";
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import emailjs from "@emailjs/browser";

const PaypalForm = () => {





  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderId, setOrderId] = useState(false);
  const [dataForm, setDataForm] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: null,
    endDate: null,
    startTime: '12:00 AM',
    endTime: '12:00 AM',
    vehicle: '',
    deliveryAddress: '',
    insuranceCard: null,
    licensePhoto: null,
  });






  const timeOptions = [
    '12:00 AM', '12:30 AM',
    '01:00 AM', '01:30 AM',
    '02:00 AM', '02:30 AM',
    '03:00 AM', '03:30 AM',
    '04:00 AM', '04:30 AM',
    '05:00 AM', '05:30 AM',
    '06:00 AM', '06:30 AM',
    '07:00 AM', '07:30 AM',
    '08:00 AM', '08:30 AM',
    '09:00 AM', '09:30 AM',
    '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM',
    '08:00 PM', '08:30 PM',
    '09:00 PM', '09:30 PM',
    '10:00 PM', '10:30 PM',
    '11:00 PM', '11:30 PM',
  ]; // Add more options as needed



  ///////////////////////Paypal Code///////////////////////////////////////////////////////////////////////

  const createOrder = (data, actions) => {

    return actions.order.create({
      purchase_units: [
        {
          description: 'Booking',
          amount: {
            currency_code: "USD",
            value: 1495
          },
        },


      ],

      application_context: {
        shipping_preference: "NO_SHIPPING"
      }
    }).then((orderID) => {
      setOrderId(orderId)
      return orderID
    })

  }
  const onApprove = (data, actions) => {

    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true)
    })
  }


  const onError = () => {
    setErrorMessage("An Error occurred  with your payments");
  }




  ///////////////////////Form Code ///////////////////////////////////////////////////////////////////////



  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    console.log("your form data:", formData);
    setShow(true);
   


    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_KEY,
      import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
      {
        from_name: formData.firstName,
        to_name: "Addict Gamer",
        from_email: formData.email,
        to_email: "skullb960@gmail.com",

        message: `

        Last Name : ${formData.lastName} 

        Email : ${formData.email} 

        Phone Number : ${formData.phone} 

                  Start Date Of Rental: ${formData.startDate}

                  End Date Of Rental: ${formData.endDate}

                  Start Time: ${formData.startTime}

                  End Time: ${formData.startDate}

                Vehicle: ${formData.vehicle}

                  Delivery Address: ${formData.deliveryAddress}

                  Insurance Card : ${formData.insuranceCard}
                  
                  License Card : ${formData.licensePhoto}
                  
                  
                  `

      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

  };


  const handleInputChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });

  };


  const handleStartTimeChange = (event) => {
    setFormData({
      ...formData,
      startTime: event.target.value,
    });
  };

  const handleEndTimeChange = (event) => {
    setFormData({
      ...formData,
      endTime: event.target.value,
    });
  };

  const handleStartDateChange = (date) => {
    setFormData({
      ...formData,
      startDate: date,
    });
  };

  const handleEndDateChange = (date) => {
    setFormData({
      ...formData,
      endDate: date,
    });
  };


  const handleVehicleChange = (event) => {
    setFormData({
      ...formData,
      vehicle: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFormData({
      ...formData,
      insuranceCard: selectedFile,
    });
    console.log('Selected Insurance Card File:', selectedFile);
  };

  const handleFileChange2 = (event) => {
    const selectedFile2 = event.target.files[0];
    setFormData({
      ...formData,
      licensePhoto: selectedFile2,
    });
    console.log('Selected License Photo File:', selectedFile2);
  };





  const hanldeConsole = () => {
    console.log("console working")
  }

  return (


    <PayPalScriptProvider options={{

      "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID
    }}>
      <div className='w-full flex items-center justify-center pt-8'>
        <div className='w-2/3 flex items-center justify-center flex-col max-[700px]:w-full'>

          <div className='flex flex-row items-center justify-between w-2/4 py-2 pb-5 max-[700px]:w-full max-[700px]:flex-col '>
            <p className='font-lulo max-[700px]:mb-5'>

              Checkout - SKU 0091
            </p>

            <div>
              <img className='img' src="https://static.wixstatic.com/media/19dbe6_a594a5ce13a1455dbdf0aad9f24bf86e~mv2.jpg/v1/fill/w_114,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/SecureSSL-800_edited.jpg" alt="SecureSSL-800_edited.jpg" width="91" height="36" fetchpriority="high" />
            </div>
          </div>




          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4 w-full'>

            <div className='flex flex-row gap-2 text-black justify-center items-center w-full max-[700px]:flex-col'>
              <input required value={formData.firstName}
                onChange={(e) => handleInputChange(e, 'firstName')} className='w-64 py-1 text-black  px-3 rounded-sm' type="text" placeholder='First Name' />

              <input required className='w-64 py-1 px-3 rounded-sm' type="text" placeholder='Last Name' value={formData.lastName}
                onChange={(e) => handleInputChange(e, 'lastName')} />
            </div>

            <div className='flex flex-row gap-2 justify-center text-black items-center max-[700px]:flex-col'>
              <input required className='w-64 py-1 px-3 rounded-sm' type="email" placeholder='Email' value={formData.email}
                onChange={(e) => handleInputChange(e, 'email')} />
              <input required className='w-64 py-1 px-3 rounded-sm' type="number" placeholder='Phone' value={formData.phone}
                onChange={(e) => handleInputChange(e, 'phone')} />
            </div>

            <div className='flex flex-row gap-2 justify-center items-center max-[700px]:flex-col'>
              <div className='relative'>
                <DatePicker
                  selected={formData.startDate}
                  onChange={handleStartDateChange}
                  placeholderText='Start date of Rental'
                  className='custom-datepicker-input'
                />
                <span className='absolute top-2 right-3 text-black'>
                  <FaRegCalendarAlt />
                </span>
              </div>

              <div className='relative'>
                <DatePicker
                  selected={formData.endDate}
                  onChange={handleEndDateChange}
                  placeholderText='End date of Rental'
                  className='custom-datepicker-input'

                />
                <span className='absolute top-2 right-3 text-black'>
                  <FaRegCalendarAlt />
                </span>
              </div>
            </div>



            <div className='flex flex-row gap-2 justify-center items-center max-[700px]:flex-col'>

              <select className='custom-time-input' value={formData.startTime} onChange={handleStartTimeChange}>
                <option value='' disabled>
                  {formData.startTime}
                </option>
                {timeOptions.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <select className='custom-time-input' value={formData.endTime} onChange={handleEndTimeChange}>
                <option value='' disabled>
                  {formData.endTime}
                </option>
                {timeOptions.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>


            <div className='flex flex-col w-2/4 items-center pt-5 gap-2 max-[700px]:w-full'>
              <p className='font-lulo pb-3 max-[700px]:w-full max-[700px]:text-center'>VEHICLE INFORMATION</p>

              <select className=' text-text-gray-dark text-sm font-heebo w-full py-2 px-2 rounded-sm outline-none max-[700px]:w-2/3' id='vehicle' value={formData.vehicle}
                onChange={handleVehicleChange}>
                <option className='text-text-gray-dark px-2 font-heebo text-sm'  >
                  Select your vehicle
                </option>
                <option className='text-black font-heebo' value='royalRoyce'>ROLLS ROYCE CULLINAN</option>
              </select>


            </div>



            <div className='flex flex-col w-2/4 items-center pt-5 gap-2 max-[700px]:w-full  max-[700px]:px-5'>
              <p className='font-lulo pb-3'>Delivery and pickup Information</p>

              <p className='font-heebo pb-2'>If delivery is selected for any of our vehicles, it is $199 each way plus taxes within 50 mi. or $299 each way within 100 mi of any of the provided addresses. A custom quote may be needed for deliveries in excess of this distance.</p>

              <input required value={formData.deliveryAddress} onChange={(e) => handleInputChange(e, 'deliveryAddress')} className='custom-info-input' placeholder='Enter Address For Curbside Delievrey & Pickup' type="text" />


            </div>



            <div className='flex flex-col w-2/4 items-center  pt-5 gap-2 max-[700px]:w-full'>
              <p className='font-lulo pb-3 max-[700px]:w-full max-[700px]:text-center'>Driver Information</p>


              <div className='custom-file-button'>
                <span className='custom-file-span'><span className='py-2 px-4 font-bold flex items-center gap-2 text-sm max-[700px]:py-2 max-[700px]:px-0'> ATTACH INSURANCE CARD <FaPlus /></span></span>
                <input
                  className='custom-card-input'
                  type='file'
                  accept='.pdf, .doc, .docx, .jpg, .jpeg, .png, .PNG'
                  onChange={handleFileChange}


                />
                {formData.insuranceCard ? (
                  <p className='text-text-gray-light text-sm py-3'>{formData.insuranceCard.name}</p>
                ) : <p className='font-heebo text-text-gray-dark text-sm py-3'>Must Have Full Coverage Driver Insurance</p>}

              </div>



              <div className='custom-file-button'>
                <span className='custom-file-span'><span className='py-2 px-4 font-bold flex items-center gap-2 text-sm max-[700px]:px-0 max-[700px]:py-2'> ATTACH PHOTO OF LICENSE <FaPlus /></span></span>
                <input
                  className='custom-card-input'
                  type='file'
                  accept='.pdf, .doc, .docx, .jpg, .jpeg, .png, '
                  name='licensePhoto'
                  onChange={handleFileChange2}

                />

                {formData.licensePhoto ? (
                  <p className='text-text-gray-light text-sm py-3'>{formData.licensePhoto.name}</p>
                ) :
                  <p className='font-heebo text-text-gray-dark text-sm py-3'>Must be 24 Years or Older to Rent</p>
                }

              </div>

            </div>

            {
              !show ? (
                <button type='submit' className='py-2 px-4 border-2 border-border-purple-color  rounded-sm w-2/6 text-center text-text-purple-color font-lulo hover:border-white hover:text-text-white  font-bold cursor-pointer max-[700px]:w-2/3'>Book Now</button>
              ) : null

            }




            {
              success ? (
                <p>Thanks for your Order. Please check your Email for paymant info</p>


              ) :
                null
            }

          </form>


          {
            show ? (
              <PayPalButtons onError={onError} style={{ layout: "vertical" }} createOrder={createOrder} onApprove={onApprove} />

            ) : null
          }



        </div>

      </div>
    </PayPalScriptProvider>

  )
}

export default PaypalForm
