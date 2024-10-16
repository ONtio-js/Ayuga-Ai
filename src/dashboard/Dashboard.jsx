import React from 'react'
import Layout from './Layout'
import { reader } from '../assets/onboarding';

const Dashboard = () => {
  return (
		<Layout>
			<div>
				<h1 className='font-bold text-2xl'>Daily Quiz</h1>
				<div>
					<div className='bg-[black]'></div>
					<div className='bg-[white]'>
						<div>
							<h2>learn words</h2>
							<p>400 new words</p>
							<button className='bg-yellow px-10 py-2 font-semibold capitalize rounded-full'>
								start
							</button>
						</div>
            <img src={reader} width={160} alt="" srcset="" />
					</div>
				</div>
			</div>
		</Layout>
  );
}

export default Dashboard