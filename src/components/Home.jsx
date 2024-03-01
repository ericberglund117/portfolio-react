import React from 'react'
import {HiArrowNarrowRight} from  'react-icons/hi'
import { Link } from 'react-scroll'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#01161e]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#EB5F28]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#EFF6E0]'>Eric Berglund</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#AEC3B0]'>I'm a Frontend Software Engineer</h2>
            <p className='text-[#EFF6E0] py-4 max-w-[700px]'>Specializing in building and designing a user-focused digital experience. Currently, I'm working on 
                builing responsive web applications and learning backend technologies to become a Full-Stack developer.</p>
            <div>
                <button className='text-[#EFF6E0] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EB5F28] hover:border-[#EB5F28]'>
                    <li>
                        <Link to="about" smooth={true} duration={500}>This way</Link>
                    </li>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' /> 
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home;
