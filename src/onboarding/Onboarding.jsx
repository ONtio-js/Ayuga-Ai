import React, { useContext, useState } from 'react'
import ButtonComponent from '../components/ButtonComponent';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import { useNavigate } from 'react-router-dom';
import OnboardingContext from '../Context/OnboardingContext';

const Onboarding = () => {
    const {page, setPage} = useContext(OnboardingContext);
	const navigate = useNavigate();
  return (
		<div className='bg-primaryColor min-w-full min-h-screen px-20 py-10'>
			<h1 className='risque-regular uppercase text-[32px]'>ayuga</h1>
			{page == 0 && <FirstPage />}
			{page == 1 && <SecondPage />}
			{page == 2 && <ThirdPage />}
			{page == 3 && <FourthPage />}
			{page == 4 && <FifthPage />}
			<div className='w-full flex justify-center absolute left-0 bottom-10 '>
				{page == 0 && (
					<ButtonComponent
						onclick={() => setPage(page + 1)}
						title={"let's go!!!"}
						style={
							'bg-yellow capitalize drop-shadow-4xl px-10 py-4 rounded-3xl shadow-lg font-bold  '
						}
					/>
				)}

				{(page > 0) & (page < 4) && (
					<div className='max- w-[700px] flex justify-between items-center'>
						<ButtonComponent
							onclick={() => setPage(page - 1)}
							title={'back'}
							style={
								'capitalize border border-2 border-black px-10 py-2 rounded-full text-xl font-semibold'
							}
						/>
						<ButtonComponent
							onclick={() => setPage(page + 1)}
							title={'next'}
							style={
								'capitalize bg-yellow px-10 py-2 border drop-shadow-4xl  border-yellow text-xl font-semibold rounded-full'
							}
						/>
					</div>
				)}

				{page > 3 && (
					<ButtonComponent
						onclick={() => navigate('/register')}
						title={"register"}
						style={
							'bg-yellow capitalize drop-shadow-4xl px-10 py-4 rounded-3xl shadow-lg font-bold'
						}
					/>
				)}
			</div>
		</div>
  );
}

export default Onboarding