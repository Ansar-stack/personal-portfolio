import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Social = () => {
  const socialLinks = [
    { href: "#", icon: <FaLinkedin/> },
    { href: "https://github.com/Ansar-stack/", icon: <FaGithub/> },
    { href: "#", icon: <FaInstagram/> },
    { href: "#", icon: <FaTwitter/> },
  ];
  return (
    <div className=" hidden sm:flex justify-between dark:text-[#8892B0] text-[#100f0f] w-full font-mono text-lg fixed top-[70%]">
      {/* Social Links */}
      <div
        className="flex items-center gap-14 rotate-90 absolute -left-40"
      >
        <div
        data-aos="fade-up-left"
        data-aos-duration="800"
        className="flex gap-10">
        {socialLinks.map((elem, index) => (
          <a
            key={index}
            className="-rotate-90 hover:text-[#64FFDA]  hover:-translate-x-1 transition-all duration-200 ease-in"
            href={elem.href}
          >
            {elem.icon}
          </a>
        ))}
        </div>
        {/* Line */}
        <div className="w-38 h-0.5  dark:bg-[#8892B0] bg-[#100f0f] rounded-full"></div>
      </div>
      {/* Email */}
      <div className="flex items-center gap-5 rotate-90 absolute -right-40">
        <a
          data-aos="fade-down-left"
        data-aos-duration="800"
          className="hover:text-[#64FFDA] hover:-translate-x-1 transition-all duration-200 ease-in tracking-wider"
          href="mailto:ansar.stack@gmail.com"
        >
          ansar.stack@gmail.com
        </a>
        {/* Line */}
        <div className="w-38 h-0.5 dark:bg-[#8892B0] bg-[#100f0f] rounded-full    "></div>
      </div>
    </div>
  );
};

export default Social;
