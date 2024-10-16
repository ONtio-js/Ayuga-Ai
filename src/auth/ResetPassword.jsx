import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import InputComponent from '../components/InputComponent';
import { Link } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';

const ResetPassword = () => {
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
  return (
		<AuthLayout>
			<div>
				<form onSubmit={onsubmit}>
					<InputComponent
						name={'password'}
						label={'new password'}
						type={'password'}
						placeholder={'enter your password'}
						onChange={(e) => {
							setPassword(password);
						}}
						value={password}
					/>
					<InputComponent
						name={'confirmpassword'}
						label={'confirm password'}
						type={'password'}
						placeholder={'confirm your password'}
						onChange={(e) => {
							setConfirmPassword(confirmPassword);
						}}
						value={password}
					/>
					<div className='w-full flex items-center justify-center py-5'>
						<ButtonComponent
							title={'submit'}
                            type={'submit'}
							style={
								'bg-yellow capitalize drop-shadow-4xl px-16 py-3 rounded-3xl shadow-lg font-bold  '
							}
						/>
					</div>
					<p className='pt-10'>
						Have an account ? {'  '}
						<Link
							to={'/login'}
							className='text-yellow pl-1'
						>
							{' '}
							Login
						</Link>
					</p>
				</form>
			</div>
		</AuthLayout>
  );
}

export default ResetPassword