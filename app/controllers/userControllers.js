const User = require('../models/user')
const Candidate = require('../models/candidates')
const Director = require('../models/director')
const OtherCandidate = require('../models/otherCandidate')
const Admin = require('../models/admin')

module.exports.register = (req,res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user)=>{
            if(user.role == "candidate"){
                const candidate = new Candidate()
                candidate.user = user._id
                candidate.email = user.email
                candidate.save()
                    .then((candidate)=>{
                            res.json(user)
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
            }
            else if(user.role == "director"){
                const director = new Director()
                director.user = user._id
                director.email = user.email
                director.save()
                    .then((director)=>{
                        res.json(user)
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
            }
            else if(user.role == "otherCandidate"){
                const otherCandidate = new OtherCandidate()
                otherCandidate.user = user._id
                otherCandidate.email = user.email
                otherCandidate.save()
                    .then((otherCandidate)=>{
                        res.json(user)
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
            }
            else if(user.role == "admin"){
                const admin = new Admin()
                admin.user = user._id
                admin.email = user.email
                admin.fullName = user.username
                admin.save()
                    .then((admin)=>{
                        res.json(user)
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.login = (req,res) => {
    const body = req.body
    User.findByCredentials(body.email,body.password)
        .then((user)=>{
           return user.generateToken()
        })
        .then((token)=>{
            res.json({
                token : token
            })
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const {user} = req
    User.findOne({
        _id : user._id
    })
        .then((user)=>{
            res.json({
                _id : user._id,
                username : user.username,
                email : user.email,
                role : user.role
            })
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.logout = (req,res) => {
    const {user,token} = req
    User.findOneAndUpdate({
        _id : user._id
    },{$pull : {tokens : {token : token}}})
        .then((user)=>{
            res.json('successfully logged out')
        })
        .catch((err)=>{
            res.json(err)
        })
}