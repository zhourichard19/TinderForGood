import axios from 'axios';

const LoginService = data => (
	axios.post('http://localhost:4000/User/registration/login', data)
		.then(res => res.status).catch(error => {console.error(error)})
)

export default LoginService;
