import React from 'react'
import { FaStar } from 'react-icons/fa';
import { dancing, moon } from '../assets/onboarding';

const ThirdPage = () => {
  return (
		<div className='flex items-center w-full justify-center flex-col'>
			<div className={`bg-background2  bg-no-repeat bg-contain p-20 `}>
				<img
					src={dancing}
					width={250}
					alt='computer operator'
				/>
			</div>
			<h4 className='capitalize font-[500]  text-xl'>
				Unleash your potentials
			</h4>
			<p className='max-w-[600px] text-center py-3'>
				AYUGA is more than just a tool, it is your personal cheerleader,
				helping you uncover your unique strengths and build a brighter
				tomorrow.
			</p>
			<img
				src={moon}
				alt='trophy'
				className='absolute top-16 right-24'
			/>
			<div className='flex items-center gap-2 mt-5'>
				<span className='block bg-white h-2 w-6 rounded-full'></span>
				<span className='block bg-yellow h-2 w-9 rounded-full'></span>
				<span className='block bg-white h-2 w-6 rounded-full'></span>
			</div>
			<span className='absolute  left-60 top-40'>
				<FaStar
					size={30}
					color='yellow'
					fill='black'
				/>
			</span>
			<span className='absolute  left-60 bottom-36'>
				<FaStar
					size={30}
					color='yellow'
					fill='black'
				/>
			</span>
			<span className='absolute  right-60 bottom-72'>
				<FaStar
					size={30}
					color='yellow'
					fill='black'
				/>
			</span>
		</div>
  );
}

export default ThirdPage