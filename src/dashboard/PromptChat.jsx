import React, { useContext, useState } from 'react';
import { IoIosPaper } from 'react-icons/io';
import { BsFillSendFill } from 'react-icons/bs';
import UserContext from '../Context/UserContext';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import BeanEater from '../components/BeanEater';

const PromptChat = () => {
	const { user } = useContext(UserContext);
	console.log(user);
	const [prompt, setPrompt] = useState({
        question:'',
        loading:false
    });

	const handlePromt = async () => {
        setPrompt({...prompt,loading:true})
		const authUser = jwtDecode(user.access_token);
		console.log(authUser.user_id);
		try {
			const data = await axios.post(
				'https://ayuga.onrender.com/api/v1/guidance/chat',
				{
					student_id: authUser.user_id,
					question: prompt.question,
				},
				{
					headers: {
						Authorization: 'Bearer ' + user.access_token,
					},
				}
			);
			console.log(data);
		} catch (error) {
            if(error.response.status == 404 || error.response.status == 500){
                setPrompt({...prompt,loading:false})
            }
			console.log(error);
		}
	};
	return (
		<div>
			<div className='grid grid-cols-3 gap-x-10'>
				<div className='p-5 bg-gray-200/50 rounded-md h-[580px]'>
					<h1 className='semibold capitalize text-xl border-b border-gray-500 pb-2'>
						recent
					</h1>

					<div className='flex flex-col items-center my-20'>
						<IoIosPaper size={32} />
						<p>No recent chats</p>
					</div>
				</div>
				<div className='col-span-2 px-10'>
					<div className='h-[85%] pt-10 overflow-y-scroll scrollbar-hide'>
						{prompt.question == '' ? (
							<h3 className='text-5xl font-bold '>
								hello, John
								<br />
								How may i help you today
							</h3>
						) : (
							<>
								<div className='bg-primaryColor/60 px-5 py-3 rounded-t-2xl rounded-bl-2xl w-5/6 float-right'>
									hello i want to know how my life will be
									better in 2 years times taking my present
									input as case study
								</div>
								<div className='bg-gray-200 px-5 py-3 my-3 rounded-t-2xl rounded-br-2xl float-left w-5/6'>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Harum libero excepturi
									commodi voluptatem, dolorum perspiciatis
									odit sunt! Velit nobis magni pariatur porro
									nulla necessitatibus labore saepe vitae
									maiores sit reiciendis vero fugit,
									consequatur architecto voluptatum voluptatem
									quisquam officia adipisci eum ratione est
									ullam libero corrupti
								</div>
							</>
						)}

						{/* chat area  */}
					</div>

					<div
						className={`w-full mt-5 border px-5 py-3 rounded-full border-gray-400 flex items-center justify-between`}
					>
						<input
							type='text'
							placeholder='Enter your Prompt here'
							className='w-full outline-none boreder-none'
							onChange={(e) =>
								setPrompt({
									...prompt,
									question: e.target.value,
								})
							}
						/>
						{prompt.loading ? (
							<BeanEater />
						) : (
							<BsFillSendFill
								size={24}
								opacity={0.7}
								onClick={handlePromt}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PromptChat;
