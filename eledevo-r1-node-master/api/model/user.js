const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name : {
        type : String
    },
    code : {
        type : String
    }, 
    codeSubject : {
        type : String
    }
    
})

module.exports = mongoose.model('Item' , itemSchema)