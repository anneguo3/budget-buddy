var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cors = require('cors');
router.use(cors())
var connectionString = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-fsdyt.mongodb.net/transactionDB?retryWrites=true&w=majority'
mongoose.connect(connectionString);
var conn = mongoose.connection;
const User = require('../models/user');

router.put('/new', function(req, res) {
  req = req.body;
  console.log(req)
  User.updateOne(
    {googleID: req.googleID},
    {googleID: req.googleID,
      name: req.name,
      email: req.email,
      image: req.image
    },
    {upsert: true})
  .then(response =>{
    console.log('Stored user succesfully in users collection')
    res.sendStatus(200)
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});


module.exports = router;
