const bcrypt = require('bcrypt');
const {loginup} = require('../database/query')
const bcrypting = (req, res, next) => {
    console.log(req.body.password)
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err)
        {
            console.log(45)
            res.json(err)
        } else
        {
            req.body.password = hash;
            next()
        }
    })
    
}
const compare = (req, res, next) => {
    console.log(req.body)
    loginup(req.body.username).then(data =>
        
        bcrypt.compare(req.body.password, data.rows[0].password, (err, resalt) => {
            if (err)
            {   console.log(1)
                return res.json(err)
            } else if(resalt)
            {   
                console.log(2)
                req.body.data = data
                next()
            } else
            {
                console.log(3)
                throw 'password not matching'                
            }
        })
    
    ).catch(err => res.json({msg:err}))
}
module.exports = { bcrypting, compare }
