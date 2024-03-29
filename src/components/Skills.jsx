import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Typescript from '../assets/typescript_original_logo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#01161e] text-[#EFF6E0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#EB5F28]'>Skills</p>
              <p className=' py-4'>These are the technologies I've grown quite fond of.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#AEC3B0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#AEC3B0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#AEC3B0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Typescript} alt="Typescript icon" />
                  <p className='my-4'>TYPESCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#AEC3B0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#AEC3B0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#AEC3B0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              </div>
          </div>
      </div>
  )
}

export default Skills