import React, { useContext, useEffect, useState } from 'react'
import { FaAddressBook, FaFacebook, FaMoon } from 'react-icons/fa';
import {FiMoon} from 'react-icons/fi'
const ThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ==='false'?false:true);
    useEffect(()=>{
        document.documentElement.classList.toggle('dark', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
  return (
    <button
     name="theme"
     onClick={()=>setTheme(!theme)}
     className='outline-0 border dark:border-gray-200 w-34 sm:w-32 px-2 cursor-pointer text-[#100f0f] dark:text-[#8892B0] rounded-full py-0.5 self-center'>
        {theme?`🌞Light Mode`: `🌙Dark Mode`}
    </button>
)
}

export default ThemeMode