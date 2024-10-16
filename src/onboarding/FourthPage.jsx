import React from 'react'
import { book, eclipse, lady } from '../assets/onboarding';
import { FaStar } from 'react-icons/fa';

const FourthPage = () => {
  return (
		<div className='flex items-center w-full justify-center flex-col'>
			<div className={`bg-background2  bg-no-repeat bg-contain p-20 `}>
				<img
					src={lady}
					width={250}
					alt='computer operator'
				/>
			</div>
			<h4 className='capitalize font-[500]  text-xl'>Find your spark</h4>
			<p className='max-w-[600px] text-center py-3'>
				Ignite your curiosity and discover what truly sets your soul on
				fire. With AYUGA, you'll find the inspiration and guidance you
				need to achieve your dreams
			</p>
			<img
				src={eclipse}
				alt='trophy'
				className='absolute bottom-32 right-24'
			/>
			<img
				src={book}
				alt='trophy'
				className='absolute top-40 left-32'
			/>
			<div className='flex items-center gap-2 mt-5'>
				<span className='block bg-white h-2 w-6 rounded-full'></span>
				<span className='block bg-white h-2 w-6 rounded-full'></span>
				<span className='block bg-yellow h-2 w-9 rounded-full'></span>
			</div>

			<span className='absolute  left-60 bottom-36'>
				<FaStar
					size={30}
					color='yellow'
					fill='black'
				/>
			</span>
			<span className='absolute  right-60 top-40'>
				<FaStar
					size={30}
					color='yellow'
					fill='#FFD700'
				/>
			</span>
		</div>
  );
}

export default FourthPage