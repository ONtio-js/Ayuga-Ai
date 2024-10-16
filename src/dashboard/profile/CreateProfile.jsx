import React, { useReducer, useState } from 'react';
import AuthLayout from '../../auth/AuthLayout';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { Link, useNavigate } from 'react-router-dom';
import SelectComponent from '../../components/SelectComponent';

const CreateProfile = () => {
	const [details, setDetail] = useState({
		page: 1,
	});
	const navigate = useNavigate();
	return (
		<AuthLayout>
			<h4 className='capitalize font-semibold  py-2 text-lg'>
				create your account
			</h4>
			<p className='text-black/70'>Set up your Profile</p>
			{details.page == 1 && (
				<>
					<h3 className='font-semibold py-6'>user information</h3>
					<form onSubmit={(e) => e.preventDefault()}>
						<SelectComponent
							label={
								'What are your favourite hobbies or activities?'
							}
							options={['choose your answer']}
						/>
						<SelectComponent
							label={
								'What subjects do you enjoy learning about in school?'
							}
							options={['choose your answer']}
						/>
						<SelectComponent
							label={
								'What kind of impact do you want to make on the world?'
							}
							options={['choose your answer']}
						/>
						<SelectComponent
							label={'How would you describe yourself?'}
							options={['choose your answer']}
						/>
						<SelectComponent
							label={'What are your biggest strengths?'}
							options={['choose your answer']}
						/>
						<div className='w-full flex items-center justify-center py-10'>
							<ButtonComponent
								onclick={() =>
									setDetail({ ...details, page: 2 })
								}
								title={'continue'}
								style={
									'bg-yellow capitalize drop-shadow-4xl px-12 py-3 rounded-3xl shadow-lg font-bold  '
								}
							/>
						</div>
					</form>
				</>
			)}
			{details.page == 2 && (
				<form onSubmit={(e) => e.preventDefault()}>
					<h4 className='font-[500] text-lg'>How old are you?</h4>
					<div>
						<div className='flex items-center gap-x-4 py-4'>
							<input
								type='radio'
								name='age'
							/>
							12 to 14
						</div>

						<div className='flex items-center gap-x-4 py-2'>
							<input
								type='radio'
								name='age'
							/>
							15 to 19
						</div>
						<div className='flex items-center gap-x-4 py-4'>
							<input
								type='radio'
								name='age'
							/>
							20 to 25
						</div>
					</div>
					<div className='w-full flex items-center justify-center pt-56'>
						<ButtonComponent
							onclick={() => setDetail({ ...details, page: 3 })}
							title={'continue'}
							style={
								'bg-yellow capitalize drop-shadow-4xl px-12 py-3 rounded-3xl shadow-lg font-bold  '
							}
						/>
					</div>
				</form>
			)}
			{details.page == 3 && (
				<form>
					<h4 className='font-[500] text-lg'>Gender?</h4>
					<div>
						<div className='flex items-center gap-x-4 py-4'>
							<input
								type='radio'
								name='gender'
							/>
							Male
						</div>

						<div className='flex items-center gap-x-4 py-2'>
							<input
								type='radio'
								name='gender'
							/>
							Female
						</div>
						<div className='flex items-center gap-x-4 py-4'>
							<input
								type='radio'
								name='gender'
							/>
							I'd rather not say
						</div>
						<div className='flex items-center gap-x-4 '>
							<input
								type='text'
								placeholder='Others .....................'
								className='placeholder:text-black/90 w-full'
							/>
						</div>
					</div>
					<div className='w-full flex items-center justify-center pt-56'>
						<ButtonComponent
							onclick={() => navigate('/dashboard')}
							title={'continue'}
							style={
								'bg-yellow capitalize drop-shadow-4xl px-12 py-3 rounded-3xl shadow-lg font-bold  '
							}
						/>
					</div>
				</form>
			)}
		</AuthLayout>
	);
};

export default CreateProfile;
