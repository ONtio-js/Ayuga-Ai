import React from 'react'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import UserRegister from '../components/UserRegister';

const Register = () => {
  return (
		<AuthLayout>
			<>
				<h4 className='capitalize font-semibold  py-2 text-lg'>
					create your account
				</h4>
				<p className='text-black/70'>Register your account</p>

				<UserRegister />
			</>
		</AuthLayout>
  );
}

export default Register