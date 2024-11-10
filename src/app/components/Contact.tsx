import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-col-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                    drop a message, gimme a call by submitting form
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <AiOutlineMail size={30}/> almassiddiqui48@gmail.com
                </div>

                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <BsTelephone size={30}/> (021) 990-111
                </div>



            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-indigo-600' 
                    id='name'/>
                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-indigo-600' 
                    id='email'/>
                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='msg'>message</label>
                    <textarea
                    className=' bg-transparent border border-indigo-600' 
                    id='msg' rows={8}>
                        </textarea>
                </div>
                <button className='bg-indigo-500 p-2 px-6' data-aos="zoom-in-up">send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
