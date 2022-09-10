const jwt = require('jsonwebtoken')

const checkLoginController = (req,res) => {
    const { token } = req.cookies
    jwt.verify(token, 'dfbdjgbskdgbjkrgbskjg', (err, decoded) => {
        if (err) return res.json(err)
        res.json(decoded)
    })
}
module.exports = checkLoginController