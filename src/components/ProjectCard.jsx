import React from 'react'
import Button from '../components/Button'
const ProjectCard = ({image, title, description, githubURL, liveURL, stack = ["MongoDB", "React", "Express", "Node"] }) => {
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="800"
    className='w-92 sm:w-84 hover:shadow-[0_0_10px_0px_#64FFDA50] bg-transparent border  dark:border-[#64FFDA] border-gray-700 rounded-lg  transition-all ease-in  hover:shadow-[#64FFDA] hover:-translate-y-1 duration-300 projectCard p-3 sm:p-5 font-mono'>
        {/* Image Section */}
        <img
        src={image}
        className={`w-full h-40 bg-no-repeat bg-center bg-cover rounded-lg shadow-sm shadow-[#64FFDA]`}>
        </img>
        <div>
           <h2 className='dark:text-white text-[#100f0f] text-xl mt-2 font-semibold'>{title}</h2>
           {/* Stack Div */}
           <div className='flex flex-wrap'>
                {stack.map((elem, index)=>(
                    <div 
                    className='dark:text-[#64ffda] text-white bg-[#356459] text-sm px-3 py-0.5 mr-1 rounded-full mt-1 stackBg'
                    key={index}>{elem.toUpperCase()}</div>
                ))}
           </div>
           {/* Desctiption */}
           <div className='min-h-16.25'>
               <p className='text-sm leading-4 mt-1 dark:text-[#8892B0] text-[#100f0f]'>{description}</p> 
           </div>
           {/* Call to action */}
           <div className='flex buttons justify-between mt-2'> 
                <a href={githubURL}>
                    <Button text={'View Code'} type='button' classes={'transparentButton'} />
                </a>
                <a href={liveURL}>
                    <Button text={'Live App'} type='button' classes={'transparentButton'}/>
                </a>
           </div>
        </div>
    </div>
  )
}

export default ProjectCard