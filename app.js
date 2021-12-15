const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
// const mongoose = require('mongoose');
// mongoose.connect()


app.use("/user", userRoutes);

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It workssss!'
    });
});


app.get('/get', (req, res)=>{
    res.send("Welcome to your server")
    })




module.exports = app;


    