import React, { useContext, useReducer, useState } from 'react';
import AuthLayout from '../../auth/AuthLayout';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { Link, useNavigate } from 'react-router-dom';
import SelectComponent from '../../components/SelectComponent';
import axios from 'axios';
import UserContext from '../../Context/UserContext';

const CreateProfile = () => {
	const [details, setDetail] = useState({
		page: 1,
		hobbies: '',
		subjects: [],
		impacts: '',
		decsription: '',
		strength: '',
		age: '',
		gender: '',
	});
	const {user} = useContext(UserContext);
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const data = await axios.post('');
			console.log(details);
		} catch (error) {}
	};
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
							options={[
								'choose your answer',
								'reading books',
								'solving puzzle',
								'playing music',
								'playing video game',
							]}
							onchange={(e) =>
								setDetail({
									...details,
									hobbies: e.target.value,
								})
							}
						/>
						<SelectComponent
							label={
								'What subjects do you enjoy learning about in school?'
							}
							options={[
								'choose your answer',
								'mathematics',
								'physics',
								'biology',
								'government',
								'music and arts',
								'',
							]}
							onchange={(e) =>
								setDetail({
									...details,
									subjects: e.target.value,
								})
							}
						/>
						<SelectComponent
							label={
								'What kind of impact do you want to make on the world?'
							}
							options={[
								'choose your answer',
								'create a revolutionary change',
								'create a solution partaining to hunger',
								'technological advancement solution',
							]}
							onchange={(e) =>
								setDetail({
									...details,
									impacts: e.target.value,
								})
							}
						/>
						<SelectComponent
							label={'How would you describe yourself?'}
							options={[
								'choose your answer',
								'multitalented',
								'enthusiastic personnel',
							]}
							onchange={(e) =>
								setDetail({
									...details,
									decsription: e.target.value,
								})
							}
						/>
						<SelectComponent
							label={'What are your biggest strengths?'}
							options={[
								'choose your answer',
								'coding',
								'singing',
								'dancing',
							]}
							onchange={(e) =>
								setDetail({
									...details,
									strength: e.target.value,
								})
							}
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
								onChange={(e) =>
									setDetail({
										...details,
										age: e.target.value,
									})
								}
								value={'12-14'}
							/>
							12 to 14
						</div>

						<div className='flex items-center gap-x-4 py-2'>
							<input
								type='radio'
								name='age'
								value={'15-19'}
								onChange={(e) =>
									setDetail({
										...details,
										age: e.target.value,
									})
								}
							/>
							15 to 19
						</div>
						<div className='flex items-center gap-x-4 py-4'>
							<input
								type='radio'
								name='age'
								onChange={(e) =>
									setDetail({
										...details,
										age: e.target.value,
									})
								}
								value={'20-25'}
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
				<form onSubmit={handleSubmit}>
					<h4 className='font-[500] text-lg'>Gender?</h4>
					<div>
						<div className='flex items-center gap-x-4 py-4'>
							<input
								type='radio'
								name='gender'
								onChange={(e) =>
									setDetail({
										...details,
										gender: e.target.value,
									})
								}
								value={'Male'}
							/>
							Male
						</div>

						<div className='flex items-center gap-x-4 py-2'>
							<input
								type='radio'
								name='gender'
								value={'Female'}
								onChange={(e) =>
									setDetail({
										...details,
										gender: e.target.value,
									})
								}
							/>
							Female
						</div>
						<div className='flex items-center gap-x-4 py-4'>
							<input
								type='radio'
								name='gender'
								value={'nil'}
								onChange={(e) =>
									setDetail({
										...details,
										gender: e.target.value,
									})
								}
							/>
							I'd rather not say
						</div>
						<div className='flex items-center gap-x-4 '>
							<input
								type='text'
								placeholder='Others .....................'
								className='placeholder:text-black/90 w-full'
								onChange={(e) =>
									setDetail({
										...details,
										gender: e.target.value,
									})
								}
								value={details.gender}
							/>
						</div>
					</div>
					<div className='w-full flex items-center justify-center pt-56'>
						<ButtonComponent
							// onclick={() => navigate('/dashboard')}
							title={'continue'}
							style={
								'bg-yellow capitalize drop-shadow-4xl px-12 py-3 rounded-3xl shadow-lg font-bold  '
							}
							type={'submit'}
						/>
					</div>
				</form>
			)}
		</AuthLayout>
	);
};

export default CreateProfile;
