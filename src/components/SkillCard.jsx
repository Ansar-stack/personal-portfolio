import React from 'react'

const SkillCard = ({title, skills =[]}) => {
  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="800"
    className=' w-92 sm:w-84 lg:w-100 p-5 hover:shadow-[0_0_10px_0px_#64FFDA50] bg-transparent border dark:border-[#64FFDA] border-gray-700 rounded-lg  transition-all duration-200 ease-in  hover:shadow-[#64FFDA] hover:-translate-y-1'>
        <div className='text-3xl mb-4 text-white text-center font-bold'>{title}</div>
        <div className='flex gap-3 justify-center flex-wrap'>
          {skills.map((element, index)=>(
            <div key={index} className='flex items-center cursor-pointer border border-[#8892B0] py-2 px-3 rounded-2xl'>
              {element.icon}
              <div className='dark:text-[#8892B0] text-[#100f0f] text-xl font-medium'>{element.skill}</div>
              <div className='text-[#64FFDA] ml-2'>{element.level}%</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default SkillCard