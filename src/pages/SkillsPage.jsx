import React, { useState } from "react";
import Heading from "../components/Heading";
import SkillCard from "../components/SkillCard";
import { DiMysql } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
const skills = [
  {
    title: "Frontend",
    skill: [
      {
        icon: <BiLogoHtml5 size={35} color="#64FFDA" />,
        skill: "HTML",
        level: 100,
      },
      {
        icon: <BiLogoCss3 size={35} color="#64FFDA" />,
        skill: "CSS",
        level: 100,
      },
      {
        icon: <BiLogoTailwindCss size={35} color="#64FFDA" />,
        skill: "Tailwind CSS",
        level: 100,
      },
      {
        icon: <BiLogoBootstrap size={35} color="#64FFDA" />,
        skill: "Bootstrap",
        level: 60,
      },
      {
        icon: <BiLogoJavascript size={35} color="#64FFDA" />,
        skill: "JavaScript",
        level: 98,
      },
      {
        icon: <BiLogoReact size={35} color="#64FFDA" />,
        skill: "ReactJs",
        level: 95,
      },
      {
        icon: <TbBrandNextjs size={35} color="#64FFDA" />,
        skill: "NextJS",
        level: 50,
      },
    ],
  },
  {
    title: "Backend",
    skill: [
      {
        icon: <BiLogoNodejs size={35} color="#64FFDA" />,
        skill: "NodeJs",
        level: 100,
      },
      {
        icon: <BiLogoNodejs size={35} color="#64FFDA" />,
        skill: "ExpressJs",
        level: 100,
      },
      {
        icon: <BiLogoMongodb size={35} color="#64FFDA" />,
        skill: "MongoDb",
        level: 100,
      },
      {
        icon: <DiMysql size={35} color="#64FFDA" />,
        skill: "MySQL",
        level: 80,
      },
    ],
  },
];
const SkillsPage = () => {
  return (
    <div id="skillPage" className="font-mono px-3 sm:px-20 my-12">
      <Heading number={"04."} text={"Skills"} />
      <div className="mt-5 flex flex-wrap  gap-5  justify-center">
        {skills.map((elem, index) => (
          <SkillCard key={index} skills={elem.skill} title={elem.title} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
