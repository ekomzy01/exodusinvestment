const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, resp, next) {
    const token = req.header('x-auth-token')
    if(!token){
        return resp.status(401).json({msg: "No token, authorization not allowed"})
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (err) {
        resp.status(401).json({msg: "Token is not valid"})
    }
}