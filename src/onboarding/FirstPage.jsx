import React from 'react'
import { robot } from '../assets/onboarding'
import { FaStar } from 'react-icons/fa';
import { IoTriangle } from 'react-icons/io5';
import useOnboardingContex from '../Hooks/UseOnboardingContex';

const FirstPage = () => {
	const {title} = useOnboardingContex();
  return (
		<div className='relative flex items-end w-full justify-center mt-16'>
			<img
				src={robot}
				alt='robot'
				width={260}
			/>
			<div className='relative bg-[rgb(0,0,0)] max-w-[500px] py-16 px-20 rounded-b-[50%] rounded-t-[50%] text-white text-center'>
				{title
					? 'Welcome John, I will be using your answers to questions, feedbacks and game plays to give you proper guidiance'
					: 'Hi there! Welcome to AYUGA, I am your buddy, trained to help you make great decisions. I will tell you why being here is the best decision you’ve ever made!'}
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

export default FirstPage