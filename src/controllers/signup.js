const { signupQuery } = require("../database/query");

const signupController = (req, res) => {
    console.log(23)
    const {username,email,password} = req.body
    signupQuery({ username, email, password }).then(data => res.json(data)).catch(err => res.json(err))
}
module.exports = signupController;