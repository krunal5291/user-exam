
const { Router } = require('express')
const { get, deleteUser, updateUser, singupPage, loginPage } = require("../controllers/user.controller")
const isValid = require('../middlewares/dataValid')
let userRoute = Router()
userRoute.get('/test', get)
userRoute.delete('/:id', deleteUser)
userRoute.patch("/:id", updateUser)
userRoute.get("/signup", singupPage)
userRoute.get('/login', loginPage)
module.exports = userRoute
