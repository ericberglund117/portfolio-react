import React from 'react'
import Headshot from '../assets/headshot.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#AEC3B0] text-[#01161e]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right text-4xl font-bold pl-4'>
                <p>Hi, I'm Eric</p>
              <div className='opacity-0 hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#01161e] tracking-wider'>
                        But you can call me Berg
                    </span> 
                </div>
            </div>
          <div>
            <img className='w-50 mx-auto pb-4 pr-4' src={Headshot} alt="Headshot" />
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#EB5F28]'>
              About
            </p>
          </div>
            <div>
              <p>I am a proactive, detail-oriented Frontend Engineer with a background in
                education and extensive testing experience as a QA Automation Engineer for a B2B SaaS application. 
                I enjoy contributing to open source projects and solving problems by building and contributing to helpful applications. 
                My passion for continuous learning is demonstrated through my independent study of new technologies
                and always asking the question "Why?". Throughout the years, I have developed strong communication 
                skills, the ability to adapt, and a patient perseverance thanks to teaching and collaborating with developers of all sorts.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About