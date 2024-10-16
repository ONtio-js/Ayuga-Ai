import React from 'react'
import { bgvector, coperator, trophy } from '../assets/onboarding';
import { FaStar } from 'react-icons/fa';

const SecondPage = () => {
  return (
		<div className='flex items-center w-full justify-center flex-col'>
			<div className={`bg-background2  bg-no-repeat bg-contain p-20 `}>
				<img
					src={coperator}
					width={250}
					alt='computer operator'
				/>
			</div>
			<h4 className='capitalize font-[500]  text-xl'>
				your adventure starts here!
			</h4>
			<p className='max-w-[600px] text-center py-3'>
				AYUGA is your educational personal guide to discovering your
				passions and future goals. Get ready for a fun and exciting
				journey of self-discovery!
			</p>
			<img
				src={trophy}
				alt='trophy'
				className='absolute top-32 left-32'
			/>
			<div className='flex items-center gap-2 mt-5'>
				<span className='block bg-yellow h-2 w-9 rounded-full'></span>
				<span className='block bg-white h-2 w-6 rounded-full'></span>
				<span className='block bg-white h-2 w-6 rounded-full'></span>
			</div>
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

export default SecondPage