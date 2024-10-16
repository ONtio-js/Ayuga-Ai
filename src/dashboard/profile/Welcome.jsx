import React, { useState } from 'react';
import { welcome } from '../../assets/profile';
import ButtonComponent from '../../components/ButtonComponent';
import Logo from '../../components/Logo';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
	const [current, setCurrent] = useState(1);
	const navigate = useNavigate();
	console.log(current);
	return (
		<div className=' min-w-full min-h-screen px-20 py-10'>
			<Logo />
			<div className='flex items-center w-full justify-center flex-col'>
				<div
					className={`bg-background2  bg-no-repeat bg-contain p-20 `}
				>
					<img
						src={welcome}
						width={250}
						alt='computer operator'
					/>
				</div>
				<h4 className='capitalize font-[500]  text-xl'>
					Create Your AYUGA Profile
				</h4>
				<p className='max-w-[600px] text-center py-3'>
					Tell us a little about yourself. Your interests, hobbies,
					and dreams will help us tailor your experience to your
					unique personality
				</p>
			</div>
			<div className='w-full flex justify-center absolute left-0 bottom-10 '>
				{current == 0 && (
					<ButtonComponent
						onclick={() => navigate('/create-profile')}
						title={"let's go!!!"}
						style={
							'bg-yellow capitalize drop-shadow-4xl px-10 py-4 rounded-3xl shadow-lg font-bold  '
						}
					/>
				)}

				{(current > 0) & (current < 4) && (
					<div className='max- w-[700px] flex justify-between items-center'>
						<ButtonComponent
							onclick={() => navigate('/dashboard')}
							title={'skip'}
							style={
								'capitalize border border-2 border-black px-12 py-4 rounded-full text-xl font-semibold'
							}
						/>
						<ButtonComponent
							onclick={
								current == 1
									? () => navigate('/create-profile')
									: () => setCurrent(current + 1)
							}
							title={'continue'}
							style={
								'capitalize bg-yellow px-12 py-4 border drop-shadow-4xl  border-yellow text-xl font-semibold rounded-full'
							}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Welcome;
