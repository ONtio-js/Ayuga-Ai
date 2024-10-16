import React from 'react'
import { bg1, bg2, user1, user2, user3, user4 } from '../assets/auth'
import { FaStar } from 'react-icons/fa';
import Register from './Register';

const AuthLayout = ({children}) => {
  return (
		<div className='  grid grid-cols-2 gap-x-5 p-8 h-screen'>
			<div className='bg-primaryColor relative h-[100%] flex items-center justify-center rounded-lg'>
				<img
					src={bg1}
					alt=''
					className='absolute bottom-0 right-0 rounded-b-lg'
				/>
				<img
					src={bg2}
					alt=''
					className='absolute top-0 left-0 rounded-t-lg'
				/>
				<div className='relative'>
					<img
						src={user1}
						alt='user1'
						className='absolute -top-20 -right-10'
					/>
					<img
						src={user2}
						alt='user1'
						className='absolute -top-20 -left-10'
					/>
					<img
						src={user3}
						alt='user1'
						className='absolute top-10 -right-24'
					/>
					<img
						src={user4}
						alt='user1'
						className='absolute top-10 -left-24'
					/>
					<div className='w-48 h-48 bg-black/40 rounded-3xl flex items-center justify-center'>
                    
                    <FaStar fill='white' size={50}/></div>
				</div>
			</div>
			<div className='p-10'>
                {children}
            </div>
		</div>
  );
}

export default AuthLayout