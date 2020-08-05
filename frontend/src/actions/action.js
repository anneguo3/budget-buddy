import axios from "axios";
import { initializeTotals } from "./aggregateAction";

export function getUserSuccess(user) {
  return {
    type: "USER_SUCCESS",
    payload: {
      name: user.name,
      url: user.image,
      expenses: user.expenses,
      incomes: user.incomes,
      saveGoal: user.saveGoal,
      spendGoal: user.spendGoal
    },
  };
}

export function getUserFailure() {
  return {
    type: "USER_FAILURE",
  };
}

export function itemsGetSuccess(itemData) {
  return {
    type: "ITEMS_GET_SUCCESS",
    payload: itemData,
  };
}

export function itemGetFailure() {
  return {
    type: "ITEMS_GET_FAILURE",
  };
}

export function deleteTransactionSuccess(id) {
  return {
    type: "DELETE_TRANS_SUCCESS",
    payload: id,
  };
}

export function deleteTransactionFailure() {
  return {
    type: "DELETE_TRANS_FAILURE",
  };
}

export function transactionPostSuccess(res) {
  return {
    type: "TRANS_POST_SUCCESS",
    payload: res,
  };
}

export function transactionPostFailure() {
  return {
    type: "TRANS_POST_FAILURE",
  };
}

export function filterChange(filterState) {
  return {
    type: "FILTER_CHANGE",
    payload: filterState,
  };
}

export function login(token, id) {
  return {
    type: "LOGIN",
    payload: {
      token: token,
      googleID: id,
    },
  };
}

export function logout() {
  return {
    type: "LOGOUT",
  };
}

export function addExpenseSuccess(expense) {
  return {
    type: "ADD_EXPENSE_SUCCESS",
    payload: expense,
  };
}

export function addExpenseFailure() {
  return {
    type: "ADD_EXPENSE_FAILURE",
  };
}

export function addIncomeSuccess(income) {
  return {
    type: "ADD_INCOME_SUCCESS",
    payload: income,
  };
}

export function addIncomeFailure() {
  return {
    type: "ADD_INCOME_FAILURE",
  };
}

export function loadingPage() {
  return {
    type: "LOADING_PAGE",
  };
}

export function transactionsUploadSuccess(transactions) {
  return {
    type: "TRANS_UPLOAD_SUCCESS",
    payload: transactions,
  };
}

export function createSaveSuccess(saveGoal) {
  return {
    type: "SAVE_GOAL_SUCCESS",
    payload: saveGoal,
  };
}

export function createSaveFailure() {
  return {
    type: "SAVE_GOAL_FAILURE",
  };
}

export function createSpendSuccess(spendGoal) {
  return {
    type: "SPEND_GOAL_SUCCESS",
    payload: spendGoal,
  };
}

export function createSpendFailure() {
  return {
    type: "SPEND_GOAL_FAILURE",
  };
}

// TODO
export function createSaveGoal(saveGoal, googleID) {
  return (dispatch) => {
    axios
      .put(`/users/saveGoal`, {
        saveGoal: saveGoal,
        googleID: googleID,
      })
      .then((response) => {
        if (response.status !== 200) {
          throw Error();
        }
        dispatch(createSaveSuccess(saveGoal));
      })
      .catch((err) => {
        console.log(err);
        dispatch(createSaveFailure());
      });
  };
}
// TODO
export function createSpendGoal(spendGoal, googleID) {
  return (dispatch) => {
    axios
      .put(`/users/spendGoal`, {
        spendGoal: spendGoal,
        googleID: googleID,
      })
      .then((response) => {
        if (response.status !== 200) {
          throw Error();
        }
        dispatch(createSpendSuccess(spendGoal));
      })
      .catch((err) => {
        console.log(err);
        dispatch(createSpendFailure());
      });
  };
}

export function addIncomeCategory(income, googleID) {
  return (dispatch) => {
    axios
      .put(`/users/category`, {
        income: income,
        googleID: googleID,
      })
      .then((response) => {
        if (response.status !== 200) {
          throw Error();
        }
        dispatch(addIncomeSuccess(income));
      })
      .catch((err) => {
        console.log(err);
        dispatch(addIncomeFailure());
      });
  };
}

export function addExpenseCategory(expense, googleID) {
  return (dispatch) => {
    axios
      .put(`/users/category`, {
        expense: expense,
        googleID: googleID,
      })
      .then((response) => {
        if (response.status !== 200) {
          throw Error();
        }
        dispatch(addExpenseSuccess(expense));
      })
      .catch((err) => {
        console.log(err);
        dispatch(addExpenseFailure());
      });
  };
}

export function fetchUserData(googleID) {

  return (dispatch) => {
    dispatch(loadingPage());
    axios
      .get(`/users/${googleID}`)
      .then((response) => {
        if (response.status !== 200 && response.status !== 304) {
          throw Error(response.statusText);
        }
        dispatch(getUserSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getUserFailure());
      });
  };
}

export function itemsFetchData(googleID) {

  return (dispatch) => {
    dispatch(loadingPage());
    axios
      .get(`/transactions/${googleID}`)
      .then((response) => {
        if (response.status !== 200 && response.status !== 304) {
          throw Error(response.statusText);
        }
        dispatch(itemsGetSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(itemGetFailure());
      });
  };
}

export function deleteTransaction(id) {

  return (dispatch) => {
    dispatch(loadingPage());
    axios
      .delete("/transactions", { data: { id: id } })
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(deleteTransactionSuccess(id));
      })
      .catch(() => {
        dispatch(deleteTransactionFailure());
      });
  };
}

export function addTransactionItem(
  id,
  name,
  amount,
  isInc,
  category,
  date,
  userID
) {

  console.log(userID);
  let postObject = {
    id: id,
    name: name,
    userID: userID,
    amount: amount,
    isMoneyIncrease: isInc,
    category: category,
    date: date,
  };
  return (dispatch) => {
    dispatch(loadingPage());
    axios
      .post("/transactions/", postObject)
      .then((response) => {
        if (response === 500) {
          throw Error(response.statusText);
        }
        dispatch(transactionPostSuccess(response));
      })
      .catch((err) => {
        dispatch(transactionPostFailure());
      });
  };
}

export function uploadTransactions(transactions) {
  return (dispatch) => {
    axios
      .post("/upload/", transactions)
      .then((response) => {
        if (response === 500) {
          throw Error(response.statusText);
        }
        dispatch(transactionsUploadSuccess(response.data.transactions));
      })
      .catch((err) => {
        dispatch(transactionPostFailure());
      });
  };
}
