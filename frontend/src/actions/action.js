import axios from "axios";
import { initializeTotals } from "./aggregateAction";

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

export function itemsFetchData(googleID) {
  return (dispatch) => {
    axios
      .get(`http://localhost:9000/transactions/${googleID}`)
      .then((response) => {
        if (response.status !== 200 && response.status !== 304) {
          throw Error(response.statusText);
        }
        dispatch(itemsGetSuccess(response.data));
      }).catch((err) => {
        console.log(err)
        dispatch(itemGetFailure());
      });
  };
}

export function deleteTransaction(id) {
  return (dispatch) => {
    axios
      .delete("http://localhost:9000/transactions", { data: { id: id } })
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(deleteTransactionSuccess(id));
      }).catch(() => {
        dispatch(deleteTransactionFailure())
      });
  };
}

export function addTransactionItem(id, name, amount, isInc, category, date, userID) {
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
    axios.post("http://localhost:9000/transactions/", postObject)
    .then((response) => {
        if (response === 500) {
          throw Error(response.statusText);
        }
        dispatch(transactionPostSuccess(response));
      }).catch((err) => {
        dispatch(transactionPostFailure());
      });
  };
}
