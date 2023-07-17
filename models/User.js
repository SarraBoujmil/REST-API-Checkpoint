const mongoose= require('mongoose')

const {Schema}=mongoose
const user= new Schema({
name:{type:String,required:true},
age:Number,
email:String
})

module.exports= mongoose.model('user',user)