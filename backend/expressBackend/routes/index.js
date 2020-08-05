const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const mongoose = require("mongoose");
const Transaction = require("../models/transaction");
const passw = require("./pass");
const connectionString =
  "mongodb+srv://" +
  passw +
  "@sandbox-fsdyt.mongodb.net/transactionDB?retryWrites=true&w=majority";
mongoose.connect(connectionString);

/* GET home page. */
router.get("/transactions/:id", function (req, res) {
  Transaction.find({ userID: req.params.id }, (err, data) => {
    if (err) {
      res.sendStatus(500);
      console.log(`GET error for user #${req.params.id}: ${err}`);
      return;
    }
    console.log(`Succesful GET for user #${req.params.id}`);
    res.json(JSON.stringify(data));
  });
});

/* POST request */
router.post("/transactions", (req, res) => {
  const trans = new Transaction({
    _id: new mongoose.Types.ObjectId(),
    id: req.body.id,
    userID: req.body.userID,
    date: req.body.date,
    name: req.body.name,
    amount: req.body.amount,
    isMoneyIncrease: req.body.isMoneyIncrease,
    category: req.body.category,
  });
  trans.save({}, (err, result) => {
    if (err) {
      console.log(`POST Error for user #${req.body.userID}: ${err}`);
      res.status(500).json({
        error: err,
      });
      return;
    }
    console.log(`Succesful POST for user #${req.body.userID}`);
    res.status(201).json({
      message: "Handling POST requests to /transactions",
      createdMessage: result,
    });
  });
});

/* DELETE Request */
router.delete("/transactions", (req, res, next) => {
  const idPassed = req.body.id;
  Transaction.deleteOne({ id: idPassed }, (err) => {
    if (err) {
      console.log(`DELETE Error for entry #${idPassed}: ${err}`);
      res.status(500).json({
        error: err,
      });
    }
    console.log(`DELETE success for entry #${idPassed}`);
    res.send(idPassed);
  });
});

/* UPLOAD file to add to Request*/
router.post("/upload", (req, res, next) => {
  const transactions = req.body;
  Transaction.insertMany(transactions, (err, result) => {
    if (err) {
      console.log(`POST Error for user #${req.body.userID}: ${err}`);
      res.status(500).json({
        error: err,
      });
      return;
    }
    console.log(`Succesful POST for user #${req.body.userID}`);
    res.status(201).json({
      message: "Handling POST requests to /transactions",
      transactions: result,
    });
  });
});

module.exports = router;
