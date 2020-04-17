const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    fullName : {
        type : String
    }, 
    email  : {
        type : String
    },
    contact : [
        {
            name : {
                type : String
            },
            email : {
                type : String
            },
            subject : {
                type : String
            },
            body : {
                type : String
            }
        }
    ]
})

const Admin = mongoose.model('Admin',adminSchema)

module.exports = Admin