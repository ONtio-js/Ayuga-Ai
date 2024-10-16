import React from 'react'
import { robot } from '../assets/onboarding';
import { FaStar } from 'react-icons/fa';
import { IoTriangle } from 'react-icons/io5';

const FifthPage = () => {
  return (
		<div className='relative flex items-end w-full justify-center mt-16'>
			<img
				src={robot}
				alt='robot'
				width={260}
			/>
			<div className='relative bg-[rgb(0,0,0)] min-w-[500px] max-w-[500px] py-20 px-20 rounded-b-[50%] rounded-t-[50%] text-white text-center'>
				Ready to join the fun!!!
				<span className='absolute top-8 left-0 rotate-[80deg] -z-1'>
					<IoTriangle
						color='black'
						size={60}
					/>
				</span>
			</div>
			<span className='absolute -bottom-32 left-64'>
				<FaStar
					size={30}
					color='yellow'
					fill='#FFD700'
				/>
			</span>
			<span className='absolute -top-0 right-[22rem]'>
				<FaStar
					size={30}
					color='#000'
					fill='#FFD700'
				/>
			</span>
			<span className='absolute -bottom-16 right-48'>
				<FaStar
					size={30}
					color='black'
					fill='black'
				/>
			</span>
		</div>
  );
}

export default FifthPage