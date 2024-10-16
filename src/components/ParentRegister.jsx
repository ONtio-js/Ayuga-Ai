import React from 'react'
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';

const ParentRegister = () => {
  return (
		<>
			<h3 className='font-semibold py-6'>parent information</h3>
			<form
				action=''
				method='post'
				className=''
			>
				<InputComponent
					name={'name'}
					label={'full name'}
					type={'text'}
					placeholder={'enter your full name'}
				/>
				<InputComponent
					name={'email'}
					label={'email address'}
					type={'email'}
					placeholder={'enter your email address'}
				/>
				<div className='flex items-center gap-x-2 pt-3'>
					<input type='checkbox' />
					<p>
						I consent and agree to{' '}
						<Link className='text-yellow capitalize'>
							terms & condition
						</Link>
					</p>
				</div>
				<div className='w-full flex items-center justify-center py-10'>
					<ButtonComponent
						onclick={() => navigate('/auth')}
						title={'sign up'}
						style={
							'bg-yellow capitalize drop-shadow-4xl px-12 py-[0.8rem] rounded-3xl shadow-lg font-bold  '
						}
					/>
				</div>
				<p>
					Already have an account?{' '}
					<Link
						to={'/login'}
						className='text-yellow'
					>
						Sign in
					</Link>
				</p>
			</form>
		</>
  );
}

export default ParentRegister