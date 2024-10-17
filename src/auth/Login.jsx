import React, { useContext, useState } from 'react'
import AuthLayout from './AuthLayout'
import InputComponent from '../components/InputComponent';
import { Link, Navigate } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import { handleUserLogin } from '../data/data';
import ErrorComponent from '../components/ErrorComponent';
import Loading from '../components/Loading';
import UserContext from '../Context/UserContext';

const Login = () => {
	const [credentials,setcredentials] = useState({
		email:'',
		password:''
	})
	const [loading,setLoading] = useState(false);
	const [errorMessage,setErrorMessage] = useState('')
	const {user,setUser} = useContext(UserContext);
	const [redirect,setRedirect] = useState(false);


	const onsubmit = async (e) => {
		e.preventDefault();
		setErrorMessage('')
		setLoading(true)
		const message = await handleUserLogin(credentials);
		if(typeof message == 'object'){
			setUser(message);
			setLoading(false);
			setRedirect(true);
		}else{
			setErrorMessage(message);
			setLoading(false)
		}
		console.log(message)
	}
	if(redirect){
		return <Navigate to={'/dashboard'} />
	}
  return (
		<AuthLayout>
			<>
				<h4 className='capitalize font-semibold  py-2 text-lg'>
					Login your account
				</h4>
				<p className='text-black/70'>Login your account</p>
				<h3 className='font-semibold py-6'>user information</h3>
				{errorMessage && <ErrorComponent message={errorMessage}/>}
				{loading && <Loading />}
				<form
					onSubmit={onsubmit}
				>
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
					<InputComponent
						name={'password'}
						label={'password'}
						type={'password'}
						placeholder={'enter your password'}
						onChange={(e) => {
							setcredentials({
								...credentials,
								password: e.target.value,
							});
						}}
						value={credentials.password}
					/>
					<Link to={'/reset-password'} className='text-yellow pt-6 text-right block font-[500] pr-4'>
						{' '}
						Forgot Password ?
					</Link>
					<div className='w-full flex items-center justify-center py-5'>
						<ButtonComponent
							title={'sign in'}
							style={
								'bg-yellow capitalize drop-shadow-4xl px-16 py-3 rounded-3xl shadow-lg font-bold  '
							}
						/>
					</div>
					<p className='pt-10'>
						Don't have an account? {'  '}
						<Link
							to={'/register'}
							className='text-yellow pl-1'
						>
							{' '}
							Sign up
						</Link>
					</p>
				</form>
			</>
		</AuthLayout>
  );
}

export default Login