const express = require('express')
const dotenv=require('dotenv')

//load ENV variables
dotenv.config({path:'./config/config.env'})

const app = express();

const PORT= process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server is running on port ${PORT}`)
);