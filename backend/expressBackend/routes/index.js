var express = require("express");
var router = express.Router();
var cors = require("cors");
var mongoose = require("mongoose");
const Transaction = require("../models/transaction");
const passw = require('./pass')

router.use(cors());
var connectionString =
  "mongodb+srv://"+passw.pass+"@sandbox-fsdyt.mongodb.net/transactionDB?retryWrites=true&w=majority";

mongoose.connect(connectionString);

var conn = mongoose.connection;
var transactionData = "";
conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", function () {
  conn.db.collection("transactions", function (err, collection) {
    collection.find({}).toArray(function (err, data) {
      transactionData = JSON.stringify(data);
    });
  });
});

/* GET home page. */
router.get("/transactions/:id", function (req, res, next) {
  conn.db.collection("transactions", function (err, collection) {
    collection.find({userID: req.params.id}).toArray(function (err, data) {
      transactionData = JSON.stringify(data);
    });
  });
  res.json(transactionData);
});

/* POST request */

router.post("/transactions", (req, res, next) => {
  console.log(req.body);
  const trans = new Transaction({
    _id: new mongoose.Types.ObjectId(),
    id: req.body.id,
    userID: req.params.id,
    date: req.body.date,
    name: req.body.name,
    amount: req.body.amount,
    isMoneyIncrease: req.body.isMoneyIncrease,
    category: req.body.category,
  });
  trans
    .save()
    .then((result) => {
      console.log(result);
      console.log("post success");
      res.status(201).json({
        message: "Handling POST requests to /transactions",
        createdMessage: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

/* DELETE Request */

router.delete("/transactions", (req, res, next) => {
  const idPassed = req.body.id;
  console.log(idPassed);
  Transaction.remove({ id: idPassed })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
