const jwt = require('jsonwebtoken')
const loginController = (req, res) => {
    console.log(req.body.data)
    const token = jwt.sign(req.body.data.rows[0], 'dfbdjgbskdgbjkrgbskjg')
    res.cookie('token', token).send('login Successfully')
}
module.exports = loginController;