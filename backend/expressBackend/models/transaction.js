const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  id: String,
  date: String,
  name: String,
  amount: String,
  isMoneyIncrease: Boolean,
  category: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
