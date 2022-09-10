const getPost = require('./getPost');
const signupController = require('./signup')
const loginController = require('./login')
const checkLoginController = require('./checkLogin')
const logout = require('./logout')
const addPost = require('./addPost')
module.exports = {
    addPost,   getPost, signupController, loginController, checkLoginController, logout
}