// import { animated, useSpring } from "react-spring";
import { items } from '../../request/request';
import {motion} from 'framer-motion';
import { useState } from 'react';




export default function Cards(){




    const [positionIndexes,setPositionIndexes] = useState([0,1,2,3,4,5,6,7]);

    const handleNext = () =>{
        setPositionIndexes((prevIndexes)=>{
            const updatedIndexes = prevIndexes.map((prevIndex)=>(prevIndex+1)%7);
            return updatedIndexes
        })
    }
  

    const imageVariants = {
        center: {x: '0%',scale: 1, zIndex:5},
        left1: {x: '-55%',scale: 0.7, zIndex:4},
        left2: {x: '-115%',scale: 0.4, zIndex:2},
        left: {x: '-92%',scale: 0.5, zIndex:3},
        right: {x: '75%',scale: 0.5, zIndex:3},
        right1: {x: '45%',scale: 0.7, zIndex:4},
        right2: {x: '95%',scale: 0.4, zIndex:2},
    }
  
    const positions=[
        'left2',
        'left1',
        'left',
        'center',
        'right',
        'right1',
        'right2',

    ]

    return(
        <div className=' pl-40 flex justify-center h-screen'>
           {items.map((item,index)=>(
                <motion.div 
                className='pt-24  '
                key={index} 
                {...item}
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{duration:0.5}}
                style={{width:'30%', position:'absolute'}} 
                >
            
            
            <div className=" max-w-sm pt-4 px-4 pb-12 backdrop-blur-sm bg-white/10 rounded-lg shadow-slate-400">
                <div className='flex justify-between'>
                    <svg className="h-12 w-12 text-green-400 " fill='none' width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="4" className='fill-green-400' />
                    </svg>

                    <svg className="h-8 w-8 text-yellow-400 fill-yellow-400"   viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                </div>


                <div className=''>
                    <svg className="h-32 w-32 text-white m-auto"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className='text-white pb-5 '>{item.name}{ item.family}</p>
                </div>
                <div className='flex justify-between px-10'>
                    <div className='w-32 h-32 p-2 rounded-full backdrop-blur-sm bg-white/10 flex flex-col justify-center'>
                    <h2 className='text-5xl text-yellow-600'>{item.remainingsession}</h2>
                    <h2 className='text-white'>جلسه باقی مانده</h2>
                 
                </div>
                <div className='w-32 h-32 rounded-full backdrop-blur-sm bg-white/10 flex flex-col justify-center'>
                  <h2 className='text-5xl text-green-600'>{item.improve}</h2>
                  <h2 className='text-white'>درصد پیشرفت</h2> 
                </div>
                
                </div>
                <div className='w-32 h-32 rounded-full backdrop-blur-sm bg-white/10 flex flex-col justify-center m-auto'>
                  <h2 className='text-red-600 text-5xl' >{item.version}</h2>
                  <h2 className='text-white'>ورژن</h2>
                </div>
            </div>  
            
        </motion.div>
        ))}
         <button className='text-white bg-gray-500  rounded-md py-2 px-4 '   onClick={handleNext}>next</button>
        </div>
    )
}