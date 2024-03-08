import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaMedium } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/eblogo.png';
import { Link } from 'react-scroll'
import Resume from '../assets/Resume_EricB.pdf'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#01161e] text-[#EFF6E0]">
           <div>
             <img src={Logo} alt="Logo" style={{width: '50px'}} />
           </div> 

           {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                       Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                       About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                       Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                       Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                       Contact
                    </Link>
                </li>
            </ul>

           {/* hamburger */}
           <div onClick ={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes /> }
           </div>

           {/* mobil menu */}
           <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#01161e] flex flex-col justify-center items-center'}> 
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                       Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                       About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                       Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link  onClick={handleClick} to="work" smooth={true} duration={500}>
                       Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                       Contact
                    </Link>
                </li>
           </ul>

           {/* social icons */}
           <div className= "hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0C66C2]">
                    <a className=" flex justify-between items-center w-full text-[#AEC3B0] font-bold" href="https://www.linkedin.com/in/eric-berglund117/" target='_blank' rel='noopener noreferrer' >
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a className=" flex justify-between items-center w-full text-[#AEC3B0] font-bold" href="https://github.com/ericberglund117" target='_blank' rel='noopener noreferrer'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EFF6E0]">
                    <a className=" flex justify-between items-center w-full text-[#01161e] font-bold"  href='https://medium.com/@ericberglund117' target='_blank' rel='noopener noreferrer'>
                        Blog <FaMedium size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EB5F28]">
                    <a className=" flex justify-between items-center w-full text-[#01161e] font-bold"  href='mailto:edberglund117@gmail.com' >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#598392]">
                    <a className=" flex justify-between items-center w-full text-[#01161e] font-bold" href={Resume} target='_blank' rel='noopener noreferrer'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
           </div>
        </div>
    )
}

export default Navbar