import axios from "axios";
import { useState } from "react";

const Logout = () => {
    const [message, setMessage] = useState('');
    const handleLogout = () => {
        try{
            const response = axios.post('http://localhost:5000/logout');
            setMessage(response.data.message);
        } catch(err) {
            console.log("Error: ", err.message);
        }
    }
    return (
        <div>
            <h1>Logout</h1>
            <button onClick={handleLogout}>Logout</button>
            <p>{message}</p>
        </div>
    )
}

export default Logout;