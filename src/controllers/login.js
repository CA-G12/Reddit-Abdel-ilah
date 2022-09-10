const jwt = require('jsonwebtoken')
const loginController = (req, res) => {
    const token = jwt.sign(req.body.data.rows[0], 'dfbdjgbskdgbjkrgbskjg')
    res.cookie('token', token).json({msg:'login Successfully'})
}
module.exports = loginController;