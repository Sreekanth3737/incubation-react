const express=require('express')
const router=express.Router()
const {createIncubation,findCompany}=require('../controller/incubationController')

const {protect}=require('../middleware/authMiddleware')



router.post('/',protect,createIncubation)
router.get('/',protect,findCompany)




module.exports=router;