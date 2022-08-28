require('dotenv').config();

const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

app.use(express.json());

// users object
let users = [
    {
        id: 1,
        username: 'ZacharyM',
    },
    {
        id: 2,
        username: 'RodgersM',
    }
]

// URL routes
app.get('/users', (req,res) => {
    res.json(users);
})

// autheticate users
app.post('/login', (req,res) => {
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);

    res.json({ accessToken: accessToken });
})


app.listen(4000);