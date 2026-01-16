import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";
import { projects } from "../projects";
const ProjectPage = () => {  
 return (
    <div 
    id="projectPage"
    className="w-full border-grape projectPage min-h-screen px-4 sm:px-20 font-mono mt-8 sm:mt-4">
      {/* Heading */}
      <Heading text={'Projects'} number={'02.'}/>
      {/* ProjectCards */}
      <div className="flex flex-wrap  gap-5 mt-5 justify-center">
      {projects.map((elem)=>(
        <ProjectCard key={elem.id} title={elem.title} description={elem.description}
        githubURL={elem.githubURL} liveURL={elem.liveURL} image={elem.image} stack={elem.stack}/>  
      ))}
      </div>
    </div>
  );
};

export default ProjectPage;
