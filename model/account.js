const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    accountId: {
        type: String,
        maxLength:[4,'account id max length of 4'],
    },
    customerName: {
        type: String,
        maxLength:[20,'cutomer name max length of 20'],
    },
    contactNumber: {
        type: String,
        maxLength:[10,'Contact no. max length of 10'],
    }
})
module.exports = mongoose.model('Account', accountSchema)