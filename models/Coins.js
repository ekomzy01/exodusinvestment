const mongoose = require('mongoose')

const CoinSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    coin: {
        type: String,
        required: true
    },
    amount_of_coin: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('coin', CoinSchema)