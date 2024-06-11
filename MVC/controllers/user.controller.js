const User = require("../models/User.model");

const deleteUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(id, req.body)

    res.send(data)

}



const loginPage = (req, res) => {
    res.render('login',{title: "testing"})
}
const singupPage = (req, res) => {

    res.render("signup")
}
module.exports = { getUsers, createUser, updateUser, deleteUser, get, singupPage, loginPage }