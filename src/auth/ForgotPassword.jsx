import React, { useState } from 'react'

import AuthLayout from './AuthLayout'
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import Loading from '../components/Loading';

const ForgotPassword = () => {
    const [email, setEmail] =useState('');
    const [loading,setLoading] = useState(false)
    const onsubmit = (e) => {
        e.preventDefault();
        setLoading(true)
    }
  return (
		<AuthLayout>
			<div>
				<form onSubmit={onsubmit}>
                    <p className='text-center mt-20'>Kindly submit your registered Email address and password reset link will be sent directly to your inbox</p>
                    {loading && <Loading />}
					<InputComponent
						name={'email'}
						type={'email'}
						placeholder={'enter your email address'}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
					<div className='w-full flex items-center justify-center py-5'>
						<ButtonComponent
							title={'Request Reset Link'}
							style={
								'bg-yellow capitalize drop-shadow-4xl px-16 py-3 rounded-3xl shadow-lg font-bold  '
							}
						/>
					</div>
				</form>
			</div>
		</AuthLayout>
  );
}

export default ForgotPassword