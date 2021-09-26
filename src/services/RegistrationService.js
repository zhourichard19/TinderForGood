import axios from 'axios';
import bcrypt from 'bcryptjs';

export const UserRegistration = data => {
    const password = data.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    data["password"] = hash;

    return axios.post('http://localhost:4000/User/register', data)
        .then(res => res.status).catch(error => {console.error(error)})
};

export const UsernameValidation = data => (
    axios.post('http://localhost:4000/User/validateUsername', data)
    .then(exist => exist.status).catch(error => {console.error(error)})
)