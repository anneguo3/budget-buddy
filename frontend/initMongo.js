db = db.getSiblingDB("transactionDB");
db.messages.insertMany([
    { id: 1, date: Date("2018-07-14") , name: "Purchased Item", price: '10.00', isMoneyIncrease: false },
    { id: 2, date: Date("2017-08-14"), name: "Car Loan Payment", price: '25.00', isMoneyIncrease: false  },
    { id: 3, date: Date("2019-03-14"), name: "Payroll", price: '511.00', isMoneyIncrease: true }
])
