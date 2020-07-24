import axios from "axios";

export function itemsGetSuccess(itemData) {
  return {
    type: "ITEMS_GET_SUCCESS",
    payload: itemData
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

export function filterChange(stringFilt) {
  return {
      type: 'FILTER_CHANGE',
      payload: stringFilt
  };
}

export function itemsFetchData() {
  return (dispatch) => {
    axios
      .get("http://localhost:9000/transactions")
      .then((response) => {
        if (response.status !== 200 && response.status !== 304) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((responseFinal) => dispatch(itemsGetSuccess(responseFinal.data)))
      .catch((err) => {
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

        return response;
      })
      .then((response) => dispatch(deleteTransactionSuccess(id)))
      .catch(() => dispatch(deleteTransactionFailure()));
  };
}

export function addTransactionItem(id, name, amount, isInc, category, date) {
  let postObject = {
    id: id,
    name: name,
    amount: amount,
    isMoneyIncrease: isInc,
    category: category,
    date: date,
  };

  return (dispatch) => {
    axios
      .post("http://localhost:9000/transactions", postObject)
      .then((response) => {
        if (response.status !== 201) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => console.log(response))
      .then((response) => dispatch(transactionPostSuccess(postObject)))
      .catch(() => dispatch(transactionPostFailure()));
  };
}
