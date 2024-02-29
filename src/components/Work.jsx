import React from 'react'
import Jimmychips from '../assets/projects/jimmychips.png'
import Matrimania from '../assets/projects/matrimaniaDash.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#01161e] bg-[#AEC3B0]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#01161e] border-[#EB5F28]'>Work</p>
                <p className='py-6'>Check out some of my work</p>
            </div>

            {/* work container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* card item */}
                <div style={{backgroundImage: `url(${Jimmychips})`}} className='shaddow-lg shaddow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EFF6E0] tracking-wider'>
                            React JS Application
                        </span>
                       <div className='pt-8 text-center'>
                            <a href='https://jimmychipsgolf.com/' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#598392] text-[#EFF6E0] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/ericberglund117/jimmy-chips' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#598392] text-[#EFF6E0] font-bold text-lg'>Code</button>
                            </a>
                       </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Matrimania})`}} className='shaddow-lg shaddow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#EFF6E0] tracking-wider'>
                            React JS Application
                        </span>
                       <div className='pt-8 text-center'>
                            <a href='https://github.com/ericberglund117/matrimania-client' target='_blank' rel='noopener noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#598392] text-[#EFF6E0] font-bold text-lg'>Code</button>
                            </a>
                       </div>
                    </div>
                </div>
            </div>
        
        </div>
    
    </div>
  )
}

export default Work