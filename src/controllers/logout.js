const logout = (req, res) => {
    res.clearCookie('token').send('Cookie cleared');
}
module.exports = logout