const express=require('express')
const dotenv= require('dotenv').config()
const port=process.env.PORT || 7000
const config = require('./config/config')
const { errorHandler }=require('./middleware/errorMiddleware')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/incubation',require('./routes/incubationRoutes'))
app.use('/api/adminHome',require('./routes/adminRoutes'))
app.use('/api/slots',require('./routes/slotRoute'))

app.use(errorHandler)
app.listen(port,()=>console.log(`Server started on port ${port}`))
