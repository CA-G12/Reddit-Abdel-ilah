const connection = require("../config/connection")

const addPostQuire = ({ userId, content }) => {
    return connection.query('INSERT INTO posts(content,user_id) VALUES ($1,$2)',[content,userId])
}
module.exports = addPostQuire