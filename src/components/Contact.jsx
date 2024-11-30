import React from 'react'
import { FaEnvelope, FaGlobe, FaPhone, FaPhoneAlt, FaUserAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
        <div className='container mx-auto'>
            <div className='md:w-/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>

            {/* left side */}
            <div className='space-y-8'>
                <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an appointment</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        <FaUserAlt className='text-primary'/>

                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>24 Hours Services</h3>
                            <p>We are providing 24 hours of service.</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        <FaEnvelope className='text-primary'/>

                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>Expert Therapist</h3>
                            <p>We have the best doctors and therapists at your service..</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        <FaPhoneAlt className='text-primary'/>

                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>High Quality Care</h3>
                            <p>We are bounded to provide a high quality service for you.</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                        <FaGlobe className='text-primary'/>

                        </div>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                            <p>You can trust our service at any cost.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                <h3 className='text-2xl font-bold mb-4'>Book Appointment</h3>
                <form className='space-y-8'>
                    <div className='flex sm:flex-row flex-col gap-4'>
                        <input type="text" placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                        <input type="email" placeholder='Email Address' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                    </div>

                    <div className='flex sm:flex-row flex-col gap-4'>
                        <input type="tel" placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                        <input type="text" placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                    </div>
                    <textarea 
                    rows="5"
                    placeholder='Write your message' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' ></textarea>

                    <button
                    type='submit'
                    className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/90'
                    >Send Message</button>
                </form>

            </div>


            </div>
        </div>
    </div>
  )
}

export default Contact