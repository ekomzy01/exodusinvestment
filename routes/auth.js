const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')

const router = express.Router()

router.post('/', 
[
    check('email', 'pleade enter a valid email').isEmail(), 
    check('password', 'Password is required').exists()
], 
async (req, resp) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return resp.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;
    
    try {
        let user = await User.findOne({email})
        if(!user){
            return resp.status(400).json({msg: "Invalid Credentials"})
        }
        const isMatch = await bcrypt.compare(password, user.password )
        if(!isMatch){
            return resp.status(400).json({msg: "invalid Credentials"})
        }

        const payload = {
            user: {
                id: user.id,
                username: user.username

            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {expiresIn:3600 }, (err, token) => {
            if(err) throw err;
            return resp.json({token})
            
        })
    } catch (err) {
        console.error(err.message)
        resp.status(500).send('Server Error')
    }

    }),


router.get('/', auth, async (req, resp) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        resp.json(user)
    } catch (err) {
        console.log(err.message)
        resp.status(500).send('Server Error')
    }
});


module.exports = router