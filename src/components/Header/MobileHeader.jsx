import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import ThemeMode from "./ThemeMode";
const MobileHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <LuMenu
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="text-[#64FFDA] block md:hidden"
        size={35}
      />
      <ul
        className={`${
          isNavOpen ? `flex flex-col dark:bg-[#0A192F] bg-white` : `hidden`
        } w-[50vw] h-screen absolute top-0 right-0 transition-all duration-600 ease-in-out md:hidden gap-6 dark:text-[#8892B0] text-[#100f0f] list-items -mono`}
      >
        <LuX
          onClick={() => setIsNavOpen(false)}
          className="text-[#64FFDA] self-end mr-10 mt-4"
          size={33}
        />
        {[
          { anc: "About", href: "aboutPage" },
          { anc: "Projects", href: "projectPage" },
          { anc: "Skill", href: "skillPage" },
          { anc: "Contact", href: "contactPage" },
        ].map((elem, index) => {
          return (
            <li
              key={index}
              className={`text-center ${index == 0 && `mt-10`} cursor-pointer`}
            >
              <a
                className="hover:text-[#64FFDA] flex flex-col"
                onClick={() => {
                  document
                    .getElementById(elem.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsNavOpen(false);
                }}
              >
                <span className="text-[#64FFDA] text-sm ">0{index + 1}.</span>
                {elem.anc}
              </a>
            </li>
          );
        })}
        <ThemeMode />
      </ul>
    </>
  );
};

export default MobileHeader;
