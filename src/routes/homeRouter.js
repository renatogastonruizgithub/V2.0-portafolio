const express = require('express')
const router=express.Router()
const {get,create,Delete,update}=require('../controllers/homeController')



router.get('/home',get)
router.post('/createHome',create)
router.delete('/deleteHome/:id',Delete)
router.put('/updateHome',update)


module.exports=router