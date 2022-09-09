const connection = require("../config/connection")

const loginup = (username) => {
    return connection.query('select * from users where username = $1  ',[username])
}

module.exports = loginup;