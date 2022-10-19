const express = require('express')
const router=express.Router()
const {create,update,Delete,get}=require('../controllers/projectsController')



router.get('/getProjects',get)
router.post('/createProject',create)
router.delete('/deleteProject/:id',Delete)
router.put('/updateProject/:id',update)


module.exports=router