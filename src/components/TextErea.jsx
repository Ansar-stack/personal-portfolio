import React from 'react'

const TextErea = ({name, value, placeholder, handleChanges, classes, row, col}) => {
  return (
    <textarea
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={handleChanges}
    rows={row}
    cols={col}
    className={`${classes} outline-0 border w-full h-40 overflow-y-auto resize-none  px-3 py-2 rounded-md placeholder:text-[#8892B0] text-[#8892B0]`}
  />
  )
}

export default TextErea