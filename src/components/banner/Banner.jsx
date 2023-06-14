import { motion } from 'framer-motion'
import React from 'react'

const Banner = () => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className='top-13 relative'
>
  <div
    className='top-26 flex rounded-lg justify-center z-[-5] absolute w-full overflow-hidden h-[690px] bg-fixed bg-center bg-cover mb-96'
    style={{
      backgroundImage: "url('./images/bannerrr.jpeg')",
      zIndex: -1,
    }}
  >
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 opacity-40'></div>
    <svg className='absolute bottom-[-60px] h-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='bg-white' fill="#fff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
</motion.div>
  )
}

export default Banner