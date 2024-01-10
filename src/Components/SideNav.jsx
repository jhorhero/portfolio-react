import { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io"

const SideNav = () => {
    const [nav,setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav);
        console.log('State Chande')
    }
  return (
    <div>
        <AiOutlineMenu size={25} onClick={handleNav}  className="absolute top-4 right-4 z-[99] md:hidden"/>
        {
            nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav} href="home" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20}/>
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={handleNav} href="#work" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineProject size={20}/>
                        <span className="pl-4">Work</span>
                    </a>
                    <a onClick={handleNav} href="#project" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <GrProjects  size={20}/>
                        <span className="pl-4">Project</span>
                    </a>
                    <a onClick={handleNav} href="#resume" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <IoMdPerson  size={20}/>
                        <span className="pl-4">Resume</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20}/>
                        <span className="pl-4">Contact</span>
                    </a>
                   
                </div>
            ) : (
                " "
            )}
            <div className="md:block hidden fixed top-[23%] z-10">
                <div className="flex flex-col ">
                    <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#home">
                        <AiOutlineHome size={20}/>
                    </a>
                    <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#work">
                        <AiOutlineProject size={20}/>
                    </a>
                    <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#project">
                        <GrProjects size={20}/>
                    </a>
                    <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#resume">
                        <IoMdPerson size={20}/>
                    </a>
                    <a className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" href="#contact">
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>

    </div>
  )
}

export default SideNav