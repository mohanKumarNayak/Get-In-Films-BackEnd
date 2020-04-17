const mongoose = require('mongoose')

const Schema = mongoose.Schema

const candidateSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    fullname : {
        type : String
    },
    mobile : {
        type : String,
        maxlength : 10
    },
    age : {
        type : String,
        maxlength : 2
    },
    address : {
        type : String
    },
    gender : {
        type : String,
        enum : ['male','female','others'],
    },
    experience : {
        type : String,
        maxlength : 2
    },
    email : {
        type : String,
    },
    movieApplied : [
        {
            movieName : {
                type : String
            },
            director : {
                type : String
            },
            language : {
                type : String
            },
            producerName : {
                type : String
            },
            movieType : {
                type : String
            },
            required : {
                type : String
            }
        }
    ],
    profile : {
        type : String,
        enum : ['empty','filled'],
        default : 'empty'
    },
    
})

const Candidate = mongoose.model('Candidate',candidateSchema)

module.exports = Candidate