import { TypeAnimation } from "react-type-animation";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object- scale-x-[-1]" src="https://images.unsplash.com/photo-1566957439355-1e61468f7e6e?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="w-full h-screen absolute left-0 top-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold texxt-gray-800">I'm Anas Sharif Jhor</h1>
                    <h2 className="text-gray-800 sm:text-3xl text-2xl pt-4">I'm a  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        2000,
        'Video Editor',
        2000,
        'Tech Enthusiast',
        2000
      ]}
      
      
      style={{ fontSize: '1em', display: 'inline-block',paddingLeft: '5px' }}
      repeat={Infinity}
    />

                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <FaTwitter   className="cursor-pointer " size={20} />
                        <FaFacebook  className="cursor-pointer " size={20} />
                        <FaInstagram className="cursor-pointer " size={20}  />
                        <FaLinkedin  className="cursor-pointer " size={20} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;