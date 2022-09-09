const connection = require("../config/connection")

const getPostQuery = () => {
    return connection.query('select * from posts')
}
module.exports = getPostQuery