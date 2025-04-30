const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app  = express();



app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))

const User_api = require('./API/UserApi')


// let todos = [];

mongoose.connect('mongodb+srv://kowsukisri:root@cluster0.qpsp5al.mongodb.net/backend-mern')

.then((connection)=>{
    if(connection){
        console.log("Connected");
        
    }
})
.catch((err)=>{
    console.log(err);
    
})


app.use('/Users' , User_api)

// To create port
// const port = 1200;
app.listen(4001 ,()=>{
    console.log('server starting');
    
})




