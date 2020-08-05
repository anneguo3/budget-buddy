var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cors = require('cors');
router.use(cors())
const passw = require('./pass')
const connectionString = "mongodb+srv://" + passw + "@sandbox-fsdyt.mongodb.net/transactionDB?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const User = require('../models/user');

router.put('/new', function(req, res) {
  req = req.body;
  User.updateOne(
    {googleID: req.googleID},
    {googleID: req.googleID,
      name: req.name,
      email: req.email,
      image: req.image
    },
    {upsert: true})
  .then(response => {
    console.log('Stored user succesfully in users collection')
    res.sendStatus(200)
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});

router.get('/:id', (req, res) => {
  User.findOne({googleID: req.params.id})
  .then(result => {
    console.log(result)
    res.send(result);
  })
  .catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
})

router.put('/category', (req, res) => {
  User.findOne({googleID: req.body.googleID})
  .then(result => {
    let income = req.body.income
    let expense = req.body.expense
    let expenses = result["expenses"]
    let incomes = result["incomes"]
    expense && !expenses.includes(expense) ? expenses.push(expense) : null
    income && !incomes.includes(income) ? incomes.push(income) : null
    result.save();
  })
  .then(() => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
});

router.put('/spendGoal', (req, res) => {
  User.updateOne({googleID: req.body.googleID},
    {spendGoal: req.body.amount})
  .then(() => {
    console.log('Successful add of spend goal')
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('Error adding spend goal: '+err);
    res.sendStatus(500);
  })
});

router.put('/saveGoal', (req, res) => {
  console.log("req")
  console.log(req)
  User.updateOne({googleID: req.body.googleID},
    {saveGoal: req.body.amount})
  .then(() => {
    console.log('Successful add of save goal')
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('Error adding save goal: '+err);
    res.sendStatus(500);
  })
});

module.exports = router;
