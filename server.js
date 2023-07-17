const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const port=process.env.PORT|| 4000

const connectDB= require('./config/connectDB')
connectDB()


app.use('/userAPI',require('./Routes/userRoute'))


app.listen(port,(err)=>err?console.log(err):console.log(`app running on port ${port}`))
 