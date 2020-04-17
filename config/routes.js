const express = require('express')
const route = express.Router()
const userController = require('../app/controllers/userControllers')
const authenticateUser = require('../app/middlewares/authenticateUser')
const directorController = require('../app/controllers/directorController')
const candidateController = require('../app/controllers/candidateController')
const otherCandidateController = require('../app/controllers/otherCandidateController')
const adminControllers = require('../app/controllers/adminController')

route.post('/users/register',userController.register)
route.post('/users/login' ,userController.login)
route.get('/users/account',authenticateUser,userController.show)
route.delete('/users/logout',authenticateUser,userController.logout)

route.get('/director/all',directorController.showAll)
route.get('/director/all/profile',directorController.getAllDirectorInfo)
route.get('/director/allPlans',directorController.getAllPlans)

route.post('/director',authenticateUser,directorController.add)
route.put('/director',authenticateUser,directorController.add)
route.get('/director',authenticateUser,directorController.show)
route.post('/director/addCandidate/:id',directorController.addCandidates)
route.post('/director/addOtherCandidate/:id',directorController.addOtherCandidates)

route.post('/director/planCandidate',authenticateUser,directorController.addPlanCandidates)
route.post('/director/planOtherCandidate',authenticateUser,directorController.addPlanOtherCandidates)
route.delete('/director/removePlanCandidate/:id',authenticateUser,directorController.removePlanCandidate)
route.delete('/director/removePlanOtherCandidate/:id',authenticateUser,directorController.removePlanOtherCandidate)
route.put('/director/planCandidate/:id',directorController.updatePlanStatus)
route.put('/director/planOtherCandidate/:id',directorController.updateOtherPlanStatus)

route.post('/candidate',authenticateUser,candidateController.post)
route.put('/candidate',authenticateUser,candidateController.post)
route.get('/candidate',authenticateUser,candidateController.show)
route.post('/candidate/addMovie',authenticateUser,candidateController.addMovie)

route.post('/otherCandidate',authenticateUser,otherCandidateController.add)
route.put('/otherCandidate',authenticateUser,otherCandidateController.add)
route.get('/otherCandidate',authenticateUser,otherCandidateController.show)
route.post('/otherCandidate/addMovie',authenticateUser,otherCandidateController.addMovie)


route.get('/admin',authenticateUser,adminControllers.show)
route.get('/admin/director',adminControllers.allDirectors)
route.get('/admin/candidate',adminControllers.allCandidates)
route.get('/admin/otherCandidate',adminControllers.allOtherCandidate)
route.delete('/admin/director/:id',adminControllers.removeDirector)
route.delete('/admin/candidate/:id',adminControllers.removeCandidate)
route.delete('/admin/otherCandidate/:id',adminControllers.removeOtherCandidate)
route.post('/admin/feedback',adminControllers.addFeedBack)


module.exports = route 