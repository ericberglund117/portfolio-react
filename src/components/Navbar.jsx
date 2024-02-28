import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/eblogo.png';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#01161e] text-gray-300">
           <div>
             <img src={Logo} alt="Logo" style={{width: '50px'}} />
           </div> 

           {/* menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

           {/* hamburger */}
           <div onClick ={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes /> }
           </div>

           {/* mobil menu */}
           <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#01161e] flex flex-col justify-center items-center'}> 
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>
           </ul>

           {/* social icons */}
           <div className= "hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0C66C2]">
                    <a className=" flex justify-between items-center w-full text-gray-300" href="www.linkedin.com/in/eric-berglund117">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a className=" flex justify-between items-center w-full text-gray-300" href="www.linkedin.com/in/eric-berglund117">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EB5F28]">
                    <a className=" flex justify-between items-center w-full text-gray-300" href="www.linkedin.com/in/eric-berglund117">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#124559]">
                    <a className=" flex justify-between items-center w-full text-gray-300" href="www.linkedin.com/in/eric-berglund117">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
           </div>
        </div>
    )
}

export default Navbar