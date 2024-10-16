import React, { useState } from 'react';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { Link, Navigate } from 'react-router-dom';
import { HandleUserRegistration } from '../data/data';
import ErrorComponent from './ErrorComponent';
import Loading from './Loading';

const UserRegister = () => {
	const [credentials, setcredentials] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
    const [loading,setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

	const onsubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setLoading(true)
		const message = await HandleUserRegistration(credentials);
        if(typeof message == 'object'){
            setLoading(false)
            return <Navigate to={'/dashboard'}/>
        }else{
            setErrorMessage(message)
            setLoading(false)
        }
        console.log(message)
	};

	return (
		<>
			<h3 className='font-semibold py-6'>user information</h3>
            {errorMessage && <ErrorComponent message={errorMessage} />}
            {loading && <Loading />}
			<form onSubmit={onsubmit}>
				<InputComponent
					name={'email'}
					label={'email address'}
					type={'email'}
					placeholder={'enter your email address'}
					onChange={(e) => {
						setcredentials({
							...credentials,
							email: e.target.value,
						});
					}}
					value={credentials.email}
				/>
				<div className='grid grid-cols-2 gap-4'>
					<InputComponent
						name={'password'}
						label={'password'}
						type={'password'}
						placeholder={'enter password'}
						onChange={(e) => {
							setcredentials({
								...credentials,
								password: e.target.value,
							});
						}}
						value={credentials.password}
					/>
					<InputComponent
						name={'confirm_password'}
						label={'confirm password'}
						type={'password'}
						placeholder={'confirm password'}
						onChange={(e) => {
							setcredentials({
								...credentials,
								confirmPassword: e.target.value,
							});
						}}
						value={credentials.confirmPassword}
					/>
				</div>
				<div className='w-full flex items-center justify-center py-10'>
					<ButtonComponent
						title={'sign up'}
						type={'submit'}
						style={
							'bg-yellow capitalize drop-shadow-4xl px-16 py-3 rounded-3xl shadow-lg font-bold  '
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
};

export default UserRegister;
