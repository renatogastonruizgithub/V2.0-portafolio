const express = require('express')
const router=express.Router()
const {create,Delete,update,get}=require('../controllers/skillsController.js')



router.get('/getSkill',get)
router.post('/createSkill',create)
router.delete('/deleteSkill/:id',Delete)
router.put('/updateSkill/:id',update)


module.exports=router