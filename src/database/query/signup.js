const connection = require("../config/connection")

const signupQuery = ({ username, email, password }) => {
    return connection.query('insert into users (username , email, password) values ($1,$2,$3) RETURNING *'
    ,[username, email, password])
}

module.exports = signupQuery;