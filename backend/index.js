const express = require('express');
const app= express();
const mongoose = require('mongoose');
const dotenv=require('dotenv')
const cors = require('cors')
const authdetails = require('./router/redirecter')

dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then((data)=>{
    console.log('database created');
}).catch((err)=>{
    console.log('error occured',err)
})

app.use(express.json());
app.use('/',authdetails);

app.listen(8001,()=>{
    console.log('Voila, App is live!')
})