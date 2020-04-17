const Director = require('../models/director')
const Candidate = require('../models/candidates')
const OtherCandidate = require('../models/otherCandidate')
const User = require('../models/user')
const Admin = require('../models/admin')

module.exports.show = (req,res) => {
    const {user} = req
    Admin.findOne({
        user : user._id
    })
        .then((admin)=>{
            res.json(admin)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.allDirectors = (req,res) => {
    Director.find()
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.allCandidates = (req,res) => {
    Candidate.find()
        .then((candidate)=>{
            res.json(candidate)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.allOtherCandidate = (req,res) => {
    OtherCandidate.find()
        .then((otherCandidate)=>{
            res.json(otherCandidate)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.removeDirector = (req,res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then((director)=>{
            if(director._id){
                Director.findOneAndDelete({
                    user : director._id
                })
                .then((director)=>{
                    res.json(director)
                })
                .catch((err)=>{
                    res.json(err)
                })
            }
            else{
                res.json({
                    message : 'not found'
                })
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.removeCandidate = (req,res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then((candidate)=>{
            if(candidate._id){
                Candidate.findOneAndDelete({
                    user : candidate._id
                })
                .then((candidate)=>{
                    res.json(candidate)
                })
                .catch((err)=>{
                    res.json(err)
                })
            }
            else{
                res.json({
                    message : 'not found'
                })
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.removeOtherCandidate = (req,res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then((otherCandidate)=>{
            if(otherCandidate._id){
                OtherCandidate.findOneAndDelete({
                    user : otherCandidate._id
                })
                .then((otherCandidate)=>{
                    res.json(otherCandidate)
                })
                .catch((err)=>{
                    res.json(err)
                })
            }
            else{
                res.json({
                    message : 'not found'
                })
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.addFeedBack = (req,res) => {
    const body = req.body
    Admin.findOneAndUpdate({
        _id : "5e8ebca86bb4f40d384d4d32"
    },{$push : {contact : {name : body.name,email:body.email,subject:body.subject,body:body.body}}},{new:true,runValidators:true})
    .then((admin)=>{
        res.json(admin)
    })
    .catch((err)=>{
        res.json(err)
    })
}