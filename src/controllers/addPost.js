const { addPostQuire } = require("../database/query")

const addPost = (req, res) => {
    const { userId, content } = req.body
    console.log({ userId, content })
    addPostQuire({ userId, content }).then(data => res.json(data) )
}
module.exports = addPost