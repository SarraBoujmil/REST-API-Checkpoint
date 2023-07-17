const express= require('express')
const {addUser,getAllUsers, getUserById, getUserByAge, UpdateUserById, deleteUser}= require('../controllers/userController')

const Router= express.Router()

Router.post('/addUser',addUser)
Router.get('/getAllUsers',getAllUsers)
Router.get('/getUserById/:id',getUserById)
Router.get('/getUserByAge',getUserByAge)
Router.put('/updateUserById/:id',UpdateUserById)
Router.delete('/deleteUserById/:id',deleteUser)


module.exports=Router