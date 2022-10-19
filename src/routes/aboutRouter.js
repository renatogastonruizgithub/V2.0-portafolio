const express = require('express')
const router=express.Router()
const {get,create,Delete,update}=require('../controllers/aboutController')



router.get('/About',get)
router.post('/createAbout',create)
router.delete('/deleteAbout/:id',Delete)
router.put('/updateAbout/:id',update)


module.exports=router