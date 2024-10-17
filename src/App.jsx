import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Onboarding from './onboarding/Onboarding';
import { OnboardingProvider } from './Context/OnboardingContext';
import { UserContextProvider } from './Context/UserContext';
import Register from './auth/Register';
import Welcome from './dashboard/profile/Welcome';
import CreateProfile from './dashboard/profile/CreateProfile';
import Login from './auth/Login';
import Dashboard from './dashboard/Dashboard';
import ResetPassword from './auth/ResetPassword';
import ForgotPassword from './auth/ForgotPassword';
import PromptChat from './dashboard/PromptChat';
import Layout from './dashboard/Layout';
function App() {
	return (
		<OnboardingProvider>
			<UserContextProvider>
				<Routes>
					<Route
						path='/'
						element={<Onboarding />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/welcome'
						element={<Welcome />}
					/>
					<Route
						path='/create-profile'
						element={<CreateProfile />}
					/>
					<Route
						path='/forgot-password'
						element={<ForgotPassword />}
					/>
					<Route
						path='/reset-password'
						element={<ResetPassword />}
					/>
					<Route
						path='/dashboard'
						element={<Layout />}
					/>
				</Routes>
			</UserContextProvider>
		</OnboardingProvider>
	);
}

export default App;
