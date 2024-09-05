const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

let users = [];
//Mongo db
mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
.then(() => console.log("Mongodb connected"))
.catch(err => console.log(err));

app.post('/signup', (req, res) => {
    const {email, password} = req.body;
    const userExists = users.find(user => user.email === email);
    if(userExists) {
        return res.status(400).json({
            message: "User already exists"
        });
    }
    users.push({email, password} );
    res.status(200).json({message: 'User registered successfully'});
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if(!user) {
        return res.status(400).json({message: "Invalid credential!"});
    };
    res.status(200).json({message: "User Logged in successfully"});
})

app.post('/logout', (req, res) => {
    res.json({message: "User logged out successfully"});
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is running in port: ", PORT);
})
