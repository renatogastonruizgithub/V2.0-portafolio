const express = require('express')
const router=express.Router()
const {get}=require('../controllers/PortafolioController')



router.get('/portafolio',get)
/* router.post('/createProject',create)
router.delete('/deleteProject/:id',Delete)
router.put('/updateProject/:id',update) */


module.exports=router