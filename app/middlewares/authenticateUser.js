const User = require('../models/user')

const authenticateUser = (req,res,next) => {
    const token = req.header('x-auth')
    User.findByToken(token)
        .then((user)=>{
            if(user){
                req.user = user
                req.token = token
                next()
            }
            else{
                res.json('invalid token ')
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = authenticateUser