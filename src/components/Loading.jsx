import React from 'react'
import { spinner } from '../assets/auth'

const Loading = () => {
  return (
    <div className='flex items-center justify-center pt-2'>
        <img src={spinner} alt="loader" width={36} className=' animate-spin ' />
    </div>
  )
}

export default Loading