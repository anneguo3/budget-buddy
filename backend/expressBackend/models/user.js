const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    googleID: String,
    email: String,
    name: String,
    image: String
});
  
module.exports = mongoose.model("users", userSchema);
