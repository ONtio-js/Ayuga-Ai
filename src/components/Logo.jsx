import React from 'react'
import { Navigate } from 'react-router-dom';

const Logo = () => {
  return <h1 className='risque-regular uppercase text-[32px] cursor-pointer' onClick={() => Navigate('/dashboard')}>ayuga</h1>;
}

export default Logo