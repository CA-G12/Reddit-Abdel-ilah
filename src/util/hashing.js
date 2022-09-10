const bcrypt = require('bcrypt');
const { loginup } = require('../database/query')
const bcrypting = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err)
        {
            res.json(err)
        } else
        {
            req.body.password = hash;
            next()
        }
    })

}
const compare = (req, res, next) => {
    loginup(req.body.username).then(data => {
        if (data.rowCount){
            bcrypt.compare(req.body.password, data.rows[0].password, (err, resalt) => {
                if (err)
                {
                    return res.json(err)
                } else if (resalt)
                {
                    req.body.data = data
                    next()
                } else
                {
                    res.json({ msg: 'password not matching' })
                }
            })
        } else{
            throw {msg:'don`t have account'}
        }
    }
    ).catch(err => res.json(err))
}
module.exports = { bcrypting, compare }
