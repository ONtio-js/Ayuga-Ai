import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <div className='text-center capitalize text-red-600 bg-red-200/50 p-2 rounded-full'>{message}</div>
  )
}

export default ErrorComponent