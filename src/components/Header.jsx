import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <ul className='flex justify-center items-center text-white gap-4 sticky w-full h-12 bg-blue-600'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/favl">Home</Link>
        </li>
        <li>
            <Link to="/favl">Home</Link>
            
        </li>
        <li>
            <Link to="/favl">Home</Link>
        </li>
        <li>
            <Link to="/favl">Home</Link>
            
        </li>
        <li>
            <Link to="/favl">Home</Link>
            
        </li>
        <li>
            <Link to="/favl">Home</Link>
            
        </li>
    </ul>
    </>
  )
}

export default Header