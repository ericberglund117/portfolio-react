import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#01161E] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/xboDVLdg' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#EB5F28] text-[#EFF6E0]'>Contact</p>
                <p className='text-[#EFF6E0] py-4'>Submit the form below or shoot me an email - edberglund117@gmail.com</p>
            </div>
            <input className='p-2 bg-[#EFF6E0]' type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-[#EFF6E0]' type='email' placeholder='Email' name='email'></input>
            <textarea className='bg-[#EFF6E0] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-[#01161E] border-2 bg-[#EFF6E0] hover:bg-[#EB5F28] hover:text-[#EFF6E0] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact