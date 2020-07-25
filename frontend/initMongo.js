db = db.getSiblingDB("transactionDB");
db.transactions.insertMany([
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aaa", userID: "104785270587704181495", date: "2020-07-24" , name: "Purchased Item", amount: '39.99', isMoneyIncrease: false, category: "Restaurants" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aab", userID: "104785270587704181495",date: "2020-01-24" , name: "Income", amount: '79.99', isMoneyIncrease: true, category: "Savings" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aac", userID: "104785270587704181495",date: "2020-03-21" , name: "Purchased Item Jacket", amount: '100.33', isMoneyIncrease: false, category: "Miscellaneous" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aad", userID: "104785270587704181495", date: "2020-03-03" , name: "Cheesecake Factory", amount: '29.99', isMoneyIncrease: false, category: "Restaurants" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aae", userID: "104785270587704181495",date: "2020-03-21" , name: "Income Work", amount: '98.00', isMoneyIncrease: true, category: "Savings" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aaf", userID: "104785270587704181495",date: "2020-03-39" , name: "Win Lottery", amount: '40.00', isMoneyIncrease: true, category: "Chequing" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aag", userID: "104785270587704181495",date: "2020-01-21" , name: "H-mart", amount: '34.29', isMoneyIncrease: false, category: "Restaurants" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aah", userID: "104785270587704181495",date: "2020-02-21" , name: "Steal parent's money", amount: '50.00', isMoneyIncrease: true, category: "Savings" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aai", userID: "104785270587704181495",date: "2020-09-21" , name: "Vancouver Zoo", amount: '50.99', isMoneyIncrease: false, category: "Miscellaneous" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aaj", userID: "104785270587704181495",date: "2020-10-21" , name: "Superstore", amount: '59.39', isMoneyIncrease: false, category: "Groceries" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aak", userID: "104785270587704181495",date: "2020-11-16" , name: "Purchased Item Extra", amount: '18.77', isMoneyIncrease: false, category: "Restaurants" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aal", userID: "104785270587704181495",date: "2020-11-21" , name: "Income", amount: '99.99', isMoneyIncrease: true, category: "Savings" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aam", userID: "104785270587704181495",date: "2020-12-21" , name: "Purchased Item Extra", amount: '19.99', isMoneyIncrease: false, category: "Restaurants" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aan", userID: "104785270587704181495",date: "2020-12-21" , name: "Income Chequing", amount: '80.40', isMoneyIncrease: true, category: "Chequing" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aao", userID: "104785270587704181495",date: "2020-06-21" , name: "Purchased Item Gucci", amount: '36.99', isMoneyIncrease: false, category: "Entertainment" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aap", userID: "104785270587704181495",date: "2020-06-14" , name: "Purchased Item Paintball", amount: '89.99', isMoneyIncrease: false, category: "Entertainment" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aaq", userID: "104785270587704181495",date: "2020-06-05" , name: "Spaghetti Factory", amount: '60.99', isMoneyIncrease: false, category: "Restaurants" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aar", userID: "104785270587704181495",date: "2020-10-13" , name: "Build patio", amount: '100.99', isMoneyIncrease: false, category: "Housing" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aas", userID: "104785270587704181495",date: "2020-04-14" , name: "Build a deck", amount: '89.99', isMoneyIncrease: false, category: "Housing" },
    { id: "0af6430b-68dc-401b-8f6c-d8f3da235aat", userID: "104785270587704181495",date: "2020-05-05" , name: "Loan RBC", amount: '80.00', isMoneyIncrease: true, category: "Chequing" }
])
