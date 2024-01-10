import LiquidFillGauge from 'react-liquid-gauge';
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiVercel } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const MySkill = () => {
  return (
    <div id="skill" className="max-w-[1040px] h-screen m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center py-7 text-[#001b5e]"> My Skill</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2  gap-12">
            {/* React Js */}
             <div className='max-w-[150] w-full flex flex-col items-center'>
              <div className=''>
              <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={100}
                    height={100}
                    value={90}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                   
                    riseAnimation
                    waveAnimation
                    waveFrequency={5}
                    waveAmplitude={4}
                    gradient
                    circleStyle={{ fill: 'rgb(255, 0, 0)'} }
                
                      waveStyle={{
                      fill: 'rgb(255, 0, 0)'
                  }}
                  textStyle={{
                      fill: '#444',
                      fontFamily: 'Arial'
                  }}
                
                
                  
                />
              </div>
              <div className='flex items-center mt-2 gap-2'>
                {/* icon  */}
                <div className='bg-blue-200 px-1 py-1 rounded-lg'> 
                <FaReact size={25} className='text-blue-600'/>
               </div>
               
                <h1>React Js </h1>
              </div>
              </div>  
            {/* MongoDB Js */}
             <div className='max-w-[150] w-full flex flex-col items-center'>
              <div className=''>
              <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={100}
                    height={100}
                    value={80}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                   
                    riseAnimation
                    waveAnimation
                    waveFrequency={5}
                    waveAmplitude={4}
                    gradient
                    circleStyle={{ fill: 'rgb(255, 0, 0)'} }
                
                      waveStyle={{
                      fill: 'rgb(255, 0, 0)'
                  }}
                  textStyle={{
                      fill: '#444',
                      fontFamily: 'Arial'
                  }}
                  
                />
              </div>
              <div className='flex mt-2 items-center gap-2'>
                {/* icon  */}
               <div className='bg-green-200 px-1 py-1 rounded-lg'> 
               <DiMongodb size={25} className='text-green-600'/>
               </div>
                <h1>MongoDB</h1>
              </div>
              </div>  
            {/* Express JS */}
             <div className='max-w-[150] w-full flex flex-col items-center'>
              <div className=''>
              <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={100}
                    height={100}
                    value={65}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                   
                    riseAnimation
                    waveAnimation
                    waveFrequency={5}
                    waveAmplitude={4}
                    gradient
                    circleStyle={{ fill: 'rgb(255, 0, 0)'} }
                
                      waveStyle={{
                      fill: 'rgb(255, 0, 0)'
                  }}
                  textStyle={{
                      fill: '#444',
                      fontFamily: 'Arial'
                  }}
                  
                />
              </div>
              <div className='flex mt-2 items-center gap-2'>
                {/* icon  */}
               <div className='bg-gray-500 px-1 py-1 rounded-lg'> 
               <SiExpress size={25} className='text-white'/>
               </div>
                <h1>ExpressJS</h1>
              </div>
              </div>  
            {/* JavaScript */}
             <div className='max-w-[150] w-full flex flex-col items-center'>
              <div className=''>
              <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={100}
                    height={100}
                    value={85}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                   
                    riseAnimation
                    waveAnimation
                    waveFrequency={5}
                    waveAmplitude={4}
                    gradient
                    circleStyle={{ fill: 'rgb(255, 0, 0)'} }
                
                      waveStyle={{
                      fill: 'rgb(255, 0, 0)'
                  }}
                  textStyle={{
                      fill: '#444',
                      fontFamily: 'Arial'
                  }}
                  
                />
              </div>
              <div className='flex mt-2 items-center gap-2'>
                {/* icon  */}
               <div className=' px-1 py-1 rounded-lg'> 
               <SiJavascript size={30} className='rounded-lg bg-black text-yellow-500'/>
               </div>
                <h1>JavaScript</h1>
              </div>
              </div> 

               {/*Tailwind CSS*/}
             <div className='max-w-[150] w-full flex flex-col items-center'>
              <div className=''>
              <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={100}
                    height={100}
                    value={95}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                   
                    riseAnimation
                    waveAnimation
                    waveFrequency={5}
                    waveAmplitude={4}
                    gradient
                    circleStyle={{ fill: 'rgb(255, 0, 0)'} }
                
                      waveStyle={{
                      fill: 'rgb(255, 0, 0)'
                  }}
                  textStyle={{
                      fill: '#444',
                      fontFamily: 'Arial'
                  }}
                
                
                  
                />
              </div>
              <div className='flex items-center mt-2 gap-2'>
                {/* icon  */}
                <div className='bg-gray-700 px-1 py-1 rounded-lg'> 
                <SiTailwindcss size={25} className='text-blue-500'/>
               </div>
               
                <h1>Tailwind CSS </h1>
              </div>
              </div>  


               {/*Firebase*/}
             <div className='max-w-[150] w-full flex flex-col items-center'>
              <div className=''>
              <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={100}
                    height={100}
                    value={93}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                   
                    riseAnimation
                    waveAnimation
                    waveFrequency={5}
                    waveAmplitude={4}
                    gradient
                    circleStyle={{ fill: 'rgb(255, 0, 0)'} }
                
                      waveStyle={{
                      fill: 'rgb(255, 0, 0)'
                  }}
                  textStyle={{
                      fill: '#444',
                      fontFamily: 'Arial'
                  }}
                
                
                  
                />
              </div>
              <div className='flex items-center mt-2 gap-2'>
                {/* icon  */}
                <div className='bg-gray-700 px-1 py-1 rounded-lg'> 
                <IoLogoFirebase size={25} className='text-yellow-500'/>
               </div>
               
                <h1>Firebase</h1>
              </div>
              </div>  
               {/*vercel*/}
             <div className='max-w-[150] w-full flex flex-col items-center'>
              <div className=''>
              <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={100}
                    height={100}
                    value={80}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                   
                    riseAnimation
                    waveAnimation
                    waveFrequency={5}
                    waveAmplitude={4}
                    gradient
                    circleStyle={{ fill: 'rgb(255, 0, 0)'} }
                
                      waveStyle={{
                      fill: 'rgb(255, 0, 0)'
                  }}
                  textStyle={{
                      fill: '#444',
                      fontFamily: 'Arial'
                  }}
                
                
                  
                />
              </div>
              <div className='flex items-center mt-2 gap-2'>
                {/* icon  */}
                <div className='bg-gray-700 px-1 py-1 rounded-lg'> 
                <SiVercel size={25} className='text-white p-1'/>
               </div>
               
                <h1>vercel</h1>
              </div>
              </div>  
               {/*Node JS*/}
             <div className='max-w-[150] w-full flex flex-col items-center'>
              <div className=''>
              <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={100}
                    height={100}
                    value={85}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                   
                    riseAnimation
                    waveAnimation
                    waveFrequency={5}
                    waveAmplitude={4}
                    gradient
                    circleStyle={{ fill: 'rgb(255, 0, 0)'} }
                
                      waveStyle={{
                      fill: 'rgb(255, 0, 0)'
                  }}
                  textStyle={{
                      fill: '#444',
                      fontFamily: 'Arial'
                  }}
                
                
                  
                />
              </div>
              <div className='flex items-center mt-2 gap-2'>
                {/* icon  */}
                <div className='bg-gray-700 px-1 py-1 rounded-lg'> 
                <FaNodeJs size={25} className='text-green-500 p-'/>
               </div>
               
                <h1>Node JS</h1>
              </div>
              </div>  
            
               
            </div>
    </div>
  )
}

export default MySkill