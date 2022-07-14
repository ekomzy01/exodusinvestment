const express = require('express') 
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const Coins = require('../models/Coins')
const auth = require('../middleware/auth')



const router = express.Router()

router.get('/', auth, async (req, resp) => {
    try {
        const coins = await Coins.find({user: req.user.id})
        resp.json(coins)
    } catch (err) {
        console.log(err.message)
        resp.status(500).send("Server Error")
    }
})


router.post('/', [auth, [
    check("coin", "Coin is required").not().isEmpty()
]], async (req, resp) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return resp.status(400).json({errors: errors.array()})
}
const {coin, amount_of_coin} = req.body


try {
    const newCoin = new Coins({
        coin,
        amount_of_coin,
        user: req.user.id
    })

    const coins = await newCoin.save()
    resp.json(coins)
} catch (err) {
    console.error(err.message)
    resp.status(500).send("Server Error")
}
})
router.delete('/', (req, resp) => resp.send('God is good'))
router.put('/:id', auth, async (req, resp) => {
    const { coin, amount_of_coin } = req.body

    const coinField = {}
    if(coin) coinField.coin = coin
    if(amount_of_coin) coinField.amount_of_coin = amount_of_coin

    try {
        const cryto = await Coins.findById(req.params.id)

        if(!cryto){
            resp.status(404).json({msg: "Coin not found"})
        }

        if(cryto.user.toString() !== req.user.id) {
            resp.status(401).json({msg: 'Not authorized'})
        }


        cryto = await Coins.findByIdAndUpdate(req.params.id, {$set: coinField}, {new: true})
        resp.json(cryto)
    } catch (err) {
        console.error(err.message)
    resp.status(500).send("Server Error")
    }
})


module.exports = router