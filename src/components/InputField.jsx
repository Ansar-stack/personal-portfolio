import React from 'react'

const InputField = ({placeholder, id, accept,  type = "text", handleChanges=()=>{}, value, name, classes}) => {
  return (
              <input
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                accept={accept}
                onChange={handleChanges}
                type={type}
                className={`${classes} outline-0 border w-full border-[#8892B0] px-3 py-2 rounded-md placeholder:text-[#8892B0] text-[#8892B0]`}
              ></input>
  )
}

export default InputField