const mongoose = require('mongoose')

const UserData = new mongoose.Schema({
    Title:{
        required:true,
        type:String
    },
    Description:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Users' , UserData)