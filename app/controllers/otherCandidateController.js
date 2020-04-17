const  OtherCandidate = require('../models/otherCandidate')

module.exports.add = (req,res) => {
    const {user} = req
    const body = req.body
    OtherCandidate.findOneAndUpdate({
        user : user._id
    },body,{new:true,runValidators:true})
        .then((otherCandidate)=>{
            res.json(otherCandidate)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const {user} = req
    OtherCandidate.findOne({
        user : user._id
    })
        .then((otherCandidate)=>{
            res.json(otherCandidate)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.addMovie = (req,res) => {
    const {user} = req
    const body = req.body
    OtherCandidate.findOneAndUpdate({
        user : user._id
    },{$push : {movieApplied : {movieName : body.movieName,director:body.director,language : body.language,producerName : body.producerName,movieType :body.movieType,required : body.required}}},{new:true,runValidators:true})
        .then((candidate)=>{
            res.json(candidate)
        })
        .catch((err)=>{
            res.json(err)
        })

}