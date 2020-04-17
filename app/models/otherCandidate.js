const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OtherCandidateSchema = new Schema({
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
    talentIn : {
        type : String
    },
    email : {
        type : String,
    },
    profile : {
        type : String,
        enum : ['empty','filled'],
        default : 'empty'
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
    experience : {
        type : String,
        maxlength : 2
    }
})

const OtherCandidate = mongoose.model('OtherCandidate',OtherCandidateSchema)

module.exports = OtherCandidate