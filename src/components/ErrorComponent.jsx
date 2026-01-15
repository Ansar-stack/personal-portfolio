import React from 'react'

const ErrorComponent = ({err, classes}) => {
  return (
    <div className={classes}>
    <p className='font-semibold text-red-600'>{err}</p>
    </div>
  )
}

export default ErrorComponent