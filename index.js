const express = require('express');
const app = express();

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
app.listen(4000);