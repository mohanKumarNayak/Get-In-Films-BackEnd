const mongoose = require('mongoose')

const Schema = mongoose.Schema

const directorSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    fullname : {
        type : String
    },
    age : {
        type : String
    },
    mobile : {
        type : String
    },
    address : {
        type : String
    },
    gender : {
        type : String,
        enum : ['male','female','others']
    },
    experience : {
        type : String,
        maxlength : 2
    },
    totalMovies : {
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
    newMovie : {
        movieName : {
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
        added : {
            type : String,
            enum : ['added','empty'],
            default : 'empty'
        },
        required : {
            type : String
        }
    },
    candidates : [
        {
            candidate : {
                type : Schema.Types.ObjectId,
                ref : 'Candidate'
            },
            name : {
                type : String
            },
            mobile : {
                type : String
            },
            age : {
                type : String
            },
            email : {
                type : String
            },
            gender : {
                type : String
            }
        }
    ],
    otherCandidates : [
        {
            otherCandidate : {
                type : Schema.Types.ObjectId,
                ref : 'OtherCandidate'
            },
            name : {
                type : String
            },
            mobile : {
                type : String
            },
            age : {
                type : String
            },
            email : {
                type : String
            },
            gender : {
                type : String
            },
            talentIn : {
                type : String
            }
        }
    ],
    planCandidates : [
        {
            candidate : {
                type : Schema.Types.ObjectId,
                ref : 'Candidate'
            },
            name : {
                type : String
            },
            mobile : {
                type : String
            },
            age : {
                type : String
            },
            email : {
                type : String
            },
            gender : {
                type : String
            },
            status : {
                type : String,
                enum : ['pending','accepted'],
                default : 'pending'
            }
        }
    ],
    planOtherCandidate : [
        {
            otherCandidate : {
                type : Schema.Types.ObjectId,
                ref : 'OtherCandidate'
            },
            name : {
                type : String
            },
            mobile : {
                type : String
            },
            age : {
                type : String
            },
            email : {
                type : String
            },
            gender : {
                type : String
            },
            talentIn : {
                type : String
            },
            status : {
                type : String,
                enum : ['pending','accepted'],
                default : 'pending'
            }
        }
    ]
})

const Director = mongoose.model('Director',directorSchema)

module.exports = Director