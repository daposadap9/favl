import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import TransitionEffect from '../components/transition/TransitionEffect'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Favl = () => {

  const [clubs, setclubs] = useState([])
  
  useEffect(()=>{
    const BASE_URL = 'http://15.228.21.51:5000/club'
    const URL = BASE_URL
    axios.get(URL)
    .then((res)=>{
      setclubs(res.data)
      console.log(res.data)
    })
    .catch((err)=>console.log(err))
  },[])
  return (
    <>
    <TransitionEffect/>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration: 1}}
      className="App relative m-auto h-full pl-4 pr-4 pb-4
      miniMobile:max-w-screen-miniMobile miniMobile:bg-transparent
      mobile:max-w-screen-mobile mobile:bg-transparent
      midMobile:max-w-screen-midMobile midMobile:bg-transparent
      miniTablet:max-w-screen-miniTablet miniTablet:bg-transparent
      tablet:max-w-screen-tablet tablet:bg-transparent
      laptop:max-w-screen-laptop laptop:bg-transparent 
      midDesktop:max-w-screen-midDesktop midDesktop:bg-transparent overflow-hidden
     mt-[699px]"
    >
      <h1 className='text-center text-3xl mt-20 text-blue-500 font-bold'>Clubes</h1>
      <div className='flex justify-evenly gap-10 mt-16'>
      <div className="bg-slate-200 p-4 mt-6 rounded-md min-w-[45%] max-w-[45%] shadow-lg">
      {
        clubs.map((club)=>
        <div key={club.nombre} className='mt-3 bg-slate-200 rounded-md flex justify-center flex-col gap-1 border-2 border-zinc-8S00 overflow-hidden px-5 py-2 shadow-lg'>
          <div className='p-2 bg-slate-200 flex justify-center font-bold border-b-2 border-b-slate-500 rounded-md shadow-lg'><h1>{club.nombre}</h1><div className='ml-2'><FontAwesomeIcon icon={faUsers} className='margin-left'></FontAwesomeIcon></div></div>
          <div>
            {club.logo? <div><img src="" alt="" /></div>:<div>{club.logo}</div>}
          </div>
          <div className='p-2 bg-slate-200 flex justify-center font-bold border-b-2 border-b-slate-500 rounded-md shadow-lg text-blue-500'><h1>{club.nombre_largo}</h1></div>
          <div className='p-2 bg-slate-200 flex justify-center font-bold border-b-2 border-b-slate-500 rounded-md shadow-lg text-blue-500'><h1>{club.nombre_largo}</h1></div>
        </div>)
      }
      </div>
      <div className='min-w-[45%] max-w-[45%] midMobile:max-w-[50%]'>
        <h1 className='text-3xl'>Texto de prueba</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam, provident deserunt vitae labore quam amet doloribus maxime. Voluptatum vel magni nulla officia sapiente, accusantium eaque minima at quibusdam? Corrupti.</p>
      </div>
      </div>
      
      
      
    </motion.div>
    </>
    
  )
}

export default Favl