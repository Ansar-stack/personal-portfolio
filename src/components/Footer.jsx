import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
      { href: "#", icon: <FaLinkedin/> },
      { href: "#", icon: <FaGithub/> },
      { href: "#", icon: <FaInstagram/> },
      { href: "#", icon: <FaTwitter/> },
    ];
  return (
    <footer className='flex flex-col gap-2 justify-center items-center my-5 px-3'>
        <h4 className='text-[#64FFDA] font-semibold tracking-widest text-2xl'>Ansar Khan</h4>
        <div className='flex gap-8  sm:hidden'>
          {socialLinks.map((elem, index)=>(
            <a
            key={index}
            className="hover:text-[#64FFDA] text-[#8892B0] dark:text-[#100f0f] text-xl  hover:-translate-y-1 transition-all duration-200 ease-in"
            href={elem.href}
          >
            {elem.icon}
          </a>
          ))}
        </div>
        <p className='dark:text-[#8892B0] text-[#100f0f]  tracking-tight text-sm sm:text-lg allright text-center'>
            Copyright &copy; 2026 Ansarullah Khan | All Right Reserved
        </p>
    </footer>
  )
}

export default Footer