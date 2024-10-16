import axios from "axios";
import { authValidation } from "../Helper/AuthValidation";

export const HandleUserRegistration = async (credentials) => {
	let message = authValidation(credentials);
	if (message == '') {
		try {
			const {data} = await axios
				.post(
					'https://ayuga.onrender.com/api/v1/auth/sign-up',
					credentials
				);
                message = data;
		} catch (error) {
			if(error.response.status == 400){
                message = "Email already registered"
            }
		}
	}
    return message;
};
export const handleUserLogin = async (credentials) => {
    let message = authValidation(credentials);
    const {email,password} = credentials;
    if(!message){
      try {
          const { data } = await axios.post(
				`https://ayuga.onrender.com/api/v1/auth/sign-in/`,
				{
					username: email,
					password: password,
				},
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			);
            message = data;
      } catch (error) {
        if(error.response.status == 400){
            message = "Email is not registered with us"
        }
        console.log(error.response.data)
      }
        
    }
    return message;
}