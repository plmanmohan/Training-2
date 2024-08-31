import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleOnchangeMail = (e) => {
        setEmail(e.target.value)
    }
    const handleOnchangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/login', {email, password});
            setMessage(response.data.message)
            console.log("Login: ", response.data.message)
        } catch(error) {
            console.log("Error: ", error.message);
        }
        
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}> 
                <input 
                    type="email"
                    placeholder="Email"
                    onChange={handleOnchangeMail}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    onChange={handleOnchangePassword}
                />
                <button type="submit">Login</button>
                <p>{message}</p>
            </form>
        </div>
    )
};

export default Login;