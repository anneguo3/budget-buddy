const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    googleID: String,
    email: String,
    name: String,
    image: String,
    expenses: Array,
    incomes: Array
});
  
module.exports = mongoose.model("users", userSchema);
