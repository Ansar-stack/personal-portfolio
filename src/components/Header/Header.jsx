import React from "react";
import MobileHeader from "./MobileHeader";
import { LuHexagon } from "react-icons/lu";
import ThemeMode from "./ThemeMode";
const Header = () => {
  return (
    <>
      <header className="flex px-10 shadow-sm justify-between z-50 items-center sticky top-0 w-full dark:bg-[#0A192F] bg-white text-[#64FFDA] h-[80px]">
        {/* Logo */}
        <a href="/">
          <div className=" flex justify-center items-center hover:-translate-y-0.5 transition-all ease-in duration-200">
            <LuHexagon className="" size={40} />
            <span className="font-mono absolute font-semibold">AK</span>
          </div>
        </a>
        {/* Desktop Navbar */}
        <nav>
          <ul className="hidden md:flex gap-7  dark:text-[#8892B0] text-[#100f0f] list-items font-mono">
            {[
              { anc: "About", href: "aboutPage" },
              { anc: "Projects", href: "projectPage" },
              { anc: "Skill", href: "skillPage" },
              { anc: "Contact", href: "contactPage" },
            ].map((elem, index) => {
              return (
                <li className="cursor-pointer" key={index}>
                  <a
                    className="hover:text-[#64FFDA] text-lg"
                    onClick={() =>
                      document
                        .getElementById(elem.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span className="text-[#64FFDA] pr-1">0{index + 1}.</span>
                    {elem.anc}
                  </a>
                </li>
              );
            })}
            <ThemeMode />
          </ul>
          {/* Mobile Navbar */}
          <MobileHeader />
        </nav>
      </header>
    </>
  );
};

export default Header;
