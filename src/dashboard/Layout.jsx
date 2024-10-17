import React, { createContext, useState } from 'react'
import Logo from '../components/Logo'
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import { robot } from '../assets/onboarding';
import { user1 } from '../assets/auth';
import { CiSearch } from 'react-icons/ci';
import Dashboard from './Dashboard';
import PromptChat from './PromptChat';
export const dashboardContext = createContext(null);
const Layout = ({children}) => {
	const [page,setPage] = useState(1);
  return (
		<div className='bg-primaryColor p-10 w-full h-screen grid grid-cols-4'>
			<div className='px-8 flex flex-col items-center gap-28'>
				<Logo />
				<div className='flex flex-col gap-y-10'>
					<ul className='flex flex-col gap-6'>
						<li
							className={`${page==1?'bg-[black] text-white':''} hover:bg-[black] hover:text-white flex items-center gap-4 px-4 py-6 rounded-3xl`}
							onClick={() => setPage(1)}
						>
							<RiDashboardHorizontalFill size={24} />
							Dashboard
						</li>
						<li
							onClick={() => setPage(2)}
							className={`${ page == 2?'bg-[black] text-white':''} hover:bg-[black] capitalize hover:text-white flex items-center gap-4 px-4 py-6 rounded-3xl`}
						>
							<FaGraduationCap size={24} />
							my learning
						</li>
						<li
							onClick={() => setPage(3)}
							className={`${page ==3?'bg-[black] text-white':''} hover:bg-[black] capitalize hover:text-white flex items-center gap-4 px-4 py-6 rounded-3xl`}
						>
							<FaUserCircle size={24} />
							my ayuga profile
						</li>
					</ul>
					<div className='px-2 py-8 flex flex-col items-center gap-4 bg-[white] rounded-3xl'>
						<div className='flex items-center'>
							<img
								src={robot}
								alt='robot'
								width={80}
							/>
							<div>
								<h4 className='font-bold capitalize text-lg'>
									dialy counsel
								</h4>
								<p className='text-[0.9rem]'>
									Everyday I am here! cheering you to success
								</p>
							</div>
						</div>
						<button
							onClick={() => setPage(4)}
							className='bg-yellow w-[150px] py-3 rounded-full font-semibold'
						>
							play
						</button>
					</div>
				</div>
			</div>
			<div className='bg-[white] col-span-3 rounded-3xl p-10'>
				<div className='flex justify-end '>
					<div className='flex items-center gap-4'>
						<div className='px-4 py-[0.3rem] flex items-center gap-5 border-2  rounded-xl border-gray-300'>
							<CiSearch
								size={26}
								color='gray'
							/>
							<input
								type='text'
								placeholder='Search Ayuga Ai ...'
								className='border-none outline-none placeholder:text-lg'
							/>
						</div>
						<img
							src={user1}
							alt='user_profile'
							srcset=''
						/>
					</div>
				</div>
				{page == 1 && <Dashboard />}
				{page == 4 && <PromptChat />}
			</div>
		</div>
  );
}

export default Layout