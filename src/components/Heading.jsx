import React from 'react'

const Heading = ({number, text, classes}) => {
  return (
    <h1 className={`${classes} text-center dark:text-white text-[#100f0f] text-4xl font-bold`}>
        <span className="text-[#64FFDA]">{number} </span>{text}
    </h1>
  )
}

export default Heading