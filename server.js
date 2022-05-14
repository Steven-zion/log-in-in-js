
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const user = require('/model/user')

mongoose.connect('mongodb:localhost:27017/login',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

//route
const app = express()
app.post('/api/register', async (req, res) =>{
    console.log(req.body)
    res.json({status: 'OK'})
})

app.listen(9999, () =>{
    console.log('server running at 9999');
})