import React from 'react'

const Button = ({onClick = ()=>{}, text, id,  classes, type = "button"}, enable) => {
  return (
    <button 
    id={id}
    disabled={enable}
    onClick={(e)=>onClick(e)}
    type={type}
    className={`px-6 font-semibold cursor-pointer py-2 rounded-md outline-0 ${classes}`}>{text}</button>
  )
}

export default Button