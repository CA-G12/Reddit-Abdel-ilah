const {getPostQuery} = require("../database/query");

const getPost = (req,res) => {
    getPostQuery().then(data => res.json(data.rows)).catch()
}

module.exports = getPost;