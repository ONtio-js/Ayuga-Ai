export const authValidation = (credential) => {
	let errorMessage = '';
	const { email, password, confirmPassword } = credential;
	if (!email && !password) {
		errorMessage = 'all field are required';
	} else if (
		!email &&
		!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
	) {
		errorMessage = 'valid email address is required';
	} else if (
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
			password
		)
	) {
		errorMessage =
			'Minimum of 8 characters \nat least one letter \nat least one number \nat least one special character';
	} else if (confirmPassword && password !== confirmPassword) {
		errorMessage = 'reconfirm your password';
	}
	return errorMessage;
};
