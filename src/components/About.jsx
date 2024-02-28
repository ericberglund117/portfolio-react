import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#AEC3B0] text-[#01161e]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#EB5F28]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Eric! Please take a look around.</p>
            </div>
            <div>
              <p>I am a proactive, detail-oriented Frontend Engineer with a background in
                education and software development. I have experience in Quality Assurance Automation for B2B SaaS applications
                and building user-focused applications. I have a passion for continuous learing, 
                demonstrated through my independent study of new technologies, and strong communication 
                skills developed through teaching and collaborating with developers.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About