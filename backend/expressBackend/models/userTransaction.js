const mongoose = require('mongoose');

const userTransactionSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId, id: String, date: String, name: String, amount: String, isMoneyIncrease: Boolean
});

module.exports = userTransactionSchema;