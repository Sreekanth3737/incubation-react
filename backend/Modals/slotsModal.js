const mongoose = require('mongoose')

const slotScheema=mongoose.Schema({
    
},
{
    timestamps:true
}
)

module.exports=mongoose.model('Slots',slotScheema)
