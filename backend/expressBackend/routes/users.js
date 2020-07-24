var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cors = require('cors');
router.use(cors())
var connectionString = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-fsdyt.mongodb.net/transactionDB?retryWrites=true&w=majority'
mongoose.connect(connectionString);
var conn = mongoose.connection;
const userTransactionSchema = require("../models/userTransaction");

router.put('/:id', function(req, res) {
  let id = req.params.id;
  conn.createCollection(id).then(response =>{
    res.send('Login Success');
  }).catch(err => {
    console.log(err);
  })
});

router.get('/:id/transactions', (req, res) => {
  let id = req.params.id;
  conn.db.collection(id, function(err, collection){
    collection.find({}).toArray(function(err, data){
      let transactionData = JSON.stringify(data)
      res.json(transactionData)
    })
  });
});

module.exports = router;
