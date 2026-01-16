import React from "react";
import Button from "../components/Button";
import Particles from "../components/magicui/Particles";
import TypeWriter from "typewriter-effect";
import myImage from "../assets/myImage.png";
import resume from "../assets/ansar-resume.pdf";

const stacks = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
];

const description =
  "I’m a motivated full-stack developer with a strong focus on modern web development. I build responsive, user-friendly interfaces and reliable backend systems, writing clean and scalable code. I enjoy solving real-world problems and continuously improving my skills through practical projects.";

const AboutPage = () => {
  return (
    <>
      <div
        data-aos="zoom-out"
        duration="800"
        id="aboutPage"
        className="min-h-screen flex justify-between relative overflow-hidden aboutPage font-mono mt-10 px-24"
      >
        <Particles
          className="absolute inset-0 -z-20"
          quantity={200}
          ease={80}
          vx={0.1}
          vy={0.1}
          color="#64FFDA"
          refresh
        />

        {/* AboutPage Text Part */}
        <div className="w-full px-5 sm:w-3/5 flex flex-col aboutTextPart">
          <div className="text-xl lg:text-3xl text-[#64FFDA] ml-2">
            Hi, I am
          </div>

          <div className="font-bold name dark:text-white text-[#100f0f] text-3xl sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]">
            Ansarullah Khan
          </div>

          {/* Type Writer */}
        <div className="text-lg w-full typeWriter sm:text-[20px] lg:text-[33px] dark:text-white text-[#100f0f] flex gap-2 justify-center sm:justify-start">
  <span className="whitespace-nowrap inline-block">I'm a</span>
  <span className="text-[#64FFDA] font-semibold">
    <TypeWriter
      options={{
        strings: stacks,
        autoStart: true,
        loop: true,
      }}
    />
  </span>
</div>


          <div className="dark:text-[#8892B0] text-[#100f0f] text-md sm:text-lg lg:text-xl my-5 max-w-3xl text-justify">
            {description}
          </div>

          <div className="flex gap-4">
            <a href={resume} download>
              <Button text={"Download Resume"} classes={`transparentButton`} />
            </a>
          </div>
        </div>

        {/* Image Part */}
        <div className="mt-12">
          <img
            src={myImage}
            alt=""
            className="w-66 bg-center bg-no-repeat bg-cover h-66 rounded-full shadow-[0_0px_10px_5px_#64FFDA50]"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
