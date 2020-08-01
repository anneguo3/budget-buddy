var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cors = require('cors');
router.use(cors())
const passw = require('./pass')
const connectionString = "mongodb+srv://" + passw + "@sandbox-fsdyt.mongodb.net/transactionDB?retryWrites=true&w=majority";
mongoose.connect(connectionString);
const User = require('../models/user');

router.put('/new', function(req, res) {
  req = req.body;
  User.updateOne(
    {googleID: req.googleID},
    {googleID: req.googleID,
      name: req.name,
      email: req.email,
      image: req.image,
      income: [],
      expenses: [],
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

router.get('/', (req, res) => {
  User.find({googleID: req.body.googleID})
  .then(result => {
    console.log(result[0])
    res.send(result[0]);
  })
  .catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
})


router.put('/expenses', (req, res) => {
  User.find({googleID: req.body.googleID})
  .then(result => {
    let list = result.categories ? result.categories : [];
    list.includes(categories) ? null : list.push(req.body.category);
    User.updateOne({googleID: req.body.googleID},
      {categories: list})
    .then(result => {
      res.sendStatus(200);
    })
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

router.put('/income', (req, res) => {
  User.find({googleID: req.body.googleID})
  .then(result => {
    let list = result.categories ? result.categories : [];
    list.includes(categories) ? null : list.push(req.body.category);
    User.updateOne({googleID: req.body.googleID},
      {categories: list})
    .then(result => {
      res.sendStatus(200);
    })
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

router.delete('/expense', (req, res) => {
  User.find({googleID: req.body.googleID})
  .then(result => {
    let list = result.categories;
    list.filter(category !== req.body.category);
    User.updateOne({googleID: req.body.googleID},
      {categories: list})
    .then(result => {
      res.sendStatus(200);
    })
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

router.delete('/income', (req, res) => {
  User.find({googleID: req.body.googleID})
  .then(result => {
    let list = result.categories;
    list.filter(category !== req.body.category);
    User.updateOne({googleID: req.body.googleID},
      {categories: list})
    .then(result => {
      res.sendStatus(200);
    })
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})


module.exports = router;
