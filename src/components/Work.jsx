import React from 'react'
import WorkImg from '../assets'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#01161e] bg-[#598392]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#01161e] border-[#EB5F28]'>Work</p>
                <p className='py-6'>Check out some of my work</p>
            </div>

            {/* work container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* card item */}
                <div className='shaddow-lg shaddow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div>
                        <span>

                        </span>
                       <div>
                            <a href='/'>
                                <button></button>
                            </a>
                            <a href='/'>
                                <button></button>
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