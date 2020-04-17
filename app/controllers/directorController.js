const Director = require('../models/director')

module.exports.showAll = (req,res) => {
    Director.find()
        .then((director)=>{
            const newMovies = director.map(direct=>{
                if(direct.newMovie.added == "added"){
                    return {id:direct._id,director : direct.fullname,newMovie : direct.newMovie}
                }
            })
            res.json(newMovies)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.getAllDirectorInfo = (req,res) => {
    Director.find()
        .then((director)=>{
            const directors = director.map(direct=>{
                if(direct.newMovie.added == "added"){
                    return {id : direct._id,name:direct.fullname,email : direct.email,mobile:direct.mobile,age:direct.age,gender:direct.gender,address:direct.address,experience:direct.experience,totalMovies:direct.totalMovies}
                }
            })
            res.json(directors)
        })
        .catch((err)=>{
            res.json(err)
        })
}


module.exports.add = (req,res) => {
    const {user} = req
    const body = req.body
    Director.findOneAndUpdate({
        user : user._id
    },body,{new:true,runValidators:true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}  

module.exports.show = (req,res) => {
    const {user} = req
    Director.findOne({
        user : user._id
    })
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.addCandidates = (req,res) => {
    const body = req.body
    const id = req.params.id
    Director.findOneAndUpdate({
        _id : id
    },{$push : {candidates : {candidate : body.candidate,name : body.name,age : body.age,email : body.email,mobile : body.mobile,gender : body.gender}}},{new:true,runValidators : true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })

}

module.exports.addOtherCandidates = (req,res) => {
    const body = req.body
    const id = req.params.id
    Director.findOneAndUpdate({
        _id : id
    },{$push : {otherCandidates  : {otherCandidate : body.otherCandidate,name : body.name,age : body.age,email : body.email,mobile : body.mobile,gender : body.gender,talentIn : body.talentIn}}},{new:true,runValidators : true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.addPlanCandidates = (req,res) => {
    const body = req.body
    const {user} = req
    Director.findOneAndUpdate({
        user : user._id
    },{$push : {planCandidates: {candidate : body.candidate,name : body.name,age : body.age,email : body.email,mobile : body.mobile,gender : body.gender}}},{new:true,runValidators : true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })

}

module.exports.addPlanOtherCandidates = (req,res) => {
    const body = req.body
    const {user} = req
    Director.findOneAndUpdate({
        user : user._id
    },{$push : {planOtherCandidate : {otherCandidate : body.otherCandidate,name : body.name,age : body.age,email : body.email,mobile : body.mobile,gender : body.gender,talentIn : body.talentIn}}},{new:true,runValidators : true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.removePlanCandidate = (req,res) => {
    const id = req.params.id
    const {user} = req
    Director.findOneAndUpdate({
        user : user._id
    },{$pull : {planCandidates : {candidate : id}}},{new : true,runValidators : true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.removePlanOtherCandidate = (req,res) => {
    const id = req.params.id
    const {user} = req
    Director.findOneAndUpdate({
        user : user._id
    },{$pull : {planOtherCandidate  : {otherCandidate : id}}},{new : true,runValidators : true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.getAllPlans = (req,res) => {
    Director.find()
        .then((director)=>{
            const plans = director.map(direct=>{
                if(direct.newMovie.added == "added"){
                    return {id:direct._id,director : direct.fullname,newMovie : direct.newMovie,planCandidates : direct.planCandidates,planOtherCandidate : direct.planOtherCandidate}
                }
            })
            res.json(plans)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.updatePlanStatus = (req,res) => {
    const id = req.params.id
    const body = req.body
    Director.findOneAndUpdate({
        _id : id,
        'planCandidates._id' : body.planId
    },{'planCandidates.$.status' : 'accepted'},{new: true,runValidators : true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.updateOtherPlanStatus = (req,res) => {
    const id = req.params.id
    const body = req.body
    Director.findOneAndUpdate({
        _id : id,
        'planOtherCandidate._id' : body.planId
    },{'planOtherCandidate.$.status' : 'accepted'},{new: true,runValidators : true})
        .then((director)=>{
            res.json(director)
        })
        .catch((err)=>{
            res.json(err)
        })
}
