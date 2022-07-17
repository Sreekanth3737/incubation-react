const asyncHandler=require('express-async-handler')

const Booking=require('../Modals/bookingModel')
const user=require('../Modals/userModal')


//@description: set goals
// @route : POST /api/goals
// @access : private

const createIncubation=asyncHandler(async(req,res)=>{
    console.log(req.user.id);
    const{name,email, phone, city,address,state,company,teamBackground,companyProducts,
        solveProblems,uniqueSolution,valuePropsitionForCustomer,competitors,revenue,
         potentialMarketSizeProduct,marketingPlan,typeOfIncubation,buisnessProposal}=req.body
    console.log('777777777777777777777777777777777777777777777777777777777777');
    if(!req.body){
        res.status(400)
        throw new Error('please add a text fielduu')
    }
    const form=await Booking.create({
        name,email, phone, city,address,state,company,teamBackground,companyProducts,
        solveProblems,uniqueSolution,valuePropsitionForCustomer,competitors,revenue,
         potentialMarketSizeProduct,marketingPlan,typeOfIncubation,buisnessProposal,user:req.user.id
        
        
    })
    console.log(form);
    console.log('99999999999999999999999999999');
    res.status(200).json(form)
})

const findCompany=asyncHandler(async(req,res)=>{
    console.log('guyuygiugjk');
    console.log(req.user.id+'++++++++++++++');
    const company=await Booking.find({user:req.user.id})
    console.log(company);
   res.status(200).json(company)
})

// const getAllCompany=asyncHandler(async(req,res)=>{
//     const allCompany=await Booking.find({}).limit(5)
//     console.log(allCompany);
//     res.status(200).json(allCompany)
// })





module.exports={
    createIncubation,findCompany
}