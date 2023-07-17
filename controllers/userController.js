const { set } = require('mongoose')
const user= require('../models/User')


// add user method

const addUser=async(req,res)=>{
    
try {
    const newUser= new user(req.body)
    const User= await newUser.save()
    return res.status(200).json({message:'user added succesfully',User})
    
} catch (error) {
    return res.status(400).json(error.message)
}  
}
//get all users
const getAllUsers= async(req,res)=>{
    try {
        const allUsers= await user.find()
        return res.status(200).json(allUsers)
    } catch (error)
      { return res.status(400).json(error.message)
         }
}
// get a user by id
const getUserById= async(req,res)=>{
    try {
        const User= await user.findById(req.params.id) 
        return res.status(200).json(User)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const getUserByAge=async(req,res)=>{
try {
    const User= await user.findOne({age:req.body.age})
    return res.status(200).json(User)
} catch (error) {
    return res.status(400).json(error.message)
    
}

}
// update user
const UpdateUserById=async(req,res)=>{
    try {
        const UpdatedUser= await user.findByIdAndUpdate(req.params.id,{$set:{email:req.body.email}},{new:true})
        return res.status(200).json(UpdatedUser)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}
// delete user
const deleteUser=async(req,res)=>{
    try {
        await user.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"user ddeleted!"})
    } catch (error) 
    {return res.status(400).json(error.message)       
    }
}
module.exports={addUser,getAllUsers,getUserById,getUserByAge,UpdateUserById,deleteUser}