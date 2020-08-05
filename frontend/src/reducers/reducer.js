const initialState = {
  transactions: [],
  hasError: false,
  totalInflow: 0,
  totalOutflow: 0,
  isMoneyIncrease: null,
  isLoading: true,
  filterIsIncome: 0,
  transName: "",
  amount: "",
  date: "",
  transactionsFiltered: [],
  user: null,
  expenseCategories: [
    "Entertainment",
    "Groceries",
    "Restaurants",
    "Housing",
    "Miscellaneous",
  ],
  incomeCategories: ["Chequing", "Savings"],
};

const monthMapping = new Map([
  ["All", ""],
  [("January", "01")],
  ["February", "02"],
  ["March", "03"],
  ["April", "04"],
  ["May", "05"],
  ["June", "06"],
  ["July", "07"],
  ["August", "08"],
  ["September", "09"],
  ["October", "10"],
  ["November", "11"],
  ["December", "12"],
]);

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_SUCCESS":
      return {
        ...state,
        expenseCategories: [
          ...state.expenseCategories,
          ...action.payload.expenses,
        ],
        incomeCategories: [
          ...state.incomeCategories,
          ...action.payload.incomes,
        ],
        user: {
          ...state.user,
          name: action.payload.name,
          url: action.payload.url,
        },
        isLoading: false
      };
    case "LOADING_PAGE":
      return {
        ...state,
        isLoading: true
      };
    case "ITEMS_GET_SUCCESS":
      // ADD IN HERE TODO ========================================
      return {
        ...state,
        transactions: JSON.parse(action.payload),
        transactionsFiltered: JSON.parse(action.payload),
        isLoading: false
      };
    case "DELETE_TRANS_SUCCESS":
      const filteredTrans = state.transactions.filter(function (el) {
        // delete twice to completely wipe out that id
        return el.id !== action.payload;
      });
      const filteredTransFilt = state.transactionsFiltered.filter(function (
        el
      ) {
        return el.id !== action.payload;
      });
      return {
        ...state,
        transactions: filteredTrans,
        transactionsFiltered: filteredTransFilt,
        isLoading: false
      };
    case "TRANS_POST_SUCCESS":
      const transObj = JSON.parse(action.payload.config.data);
      return {
        ...state,
        transactions: [...state.transactions, transObj], // same logic as above comment
        transactionsFiltered: [...state.transactions, transObj],
        isLoading: false
      };
    case "TRANS_UPLOAD_SUCCESS":
      return {
        ...state,
        transactions: [...state.transactions].concat(action.payload),
        transactionsFiltered: [...state.transactions].concat(action.payload),
      };
    case "ADD_EXPENSE_SUCCESS":
      return {
        ...state,
        expenseCategories: [...state.expenseCategories, action.payload],
      };

    case "ADD_INCOME_SUCCESS":
      return {
        ...state,
        incomeCategories: [...state.incomeCategories, action.payload],
      };
    case "ITEMS_GET_FAILURE":
      return {
        ...state,
        hasError: true,
        isLoading: false
      };
    case "TRANS_POST_FAILURE":
      return {
        ...state,
        hasError: true,
        isLoading: false
      };

    case "DELETE_TRANS_FAILURE":
      return {
        ...state,
        hasError: true,
        isLoading: false
      };
    case "ADD_EXPENSE_FAILURE":
      return {
        ...state,
        hasError: true,
        isLoading: false
      };
    case "ADD_INCOME_FAILURE":
      return {
        ...state,
        hasError: true,
        isLoading: false
      };
    case "USER_FAILURE":
      return {
        ...state,
        hasError: true,
        isLoading: false
      };
    case "FILTER_CHANGE":
      const type = action.payload.filterType;
      const month =
        action.payload.month === ""
          ? ""
          : monthMapping.get(action.payload.month);
      const year = action.payload.year.toString();
      let filteredTransactions = state.transactions;
      if (type === "exp") {
        filteredTransactions = filteredTransactions.filter(function (el) {
          return el.isMoneyIncrease == false;
        });
      } else if (type === "inc") {
        filteredTransactions = filteredTransactions.filter(function (el) {
          return el.isMoneyIncrease == true;
        });
      }
      if (month !== "") {
        filteredTransactions = filteredTransactions.filter(function (el) {
          return el.date.slice(5, 7) === month;
        });
      }
      if (year !== "" && year !== "All") {
        filteredTransactions = filteredTransactions.filter(function (el) {
          return el.date.slice(0, 4) === year;
        });
      }
      return {
        ...state,
        transactionsFiltered: filteredTransactions,
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      let copy = Object.assign({}, state);
      copy.user = null;
      return copy;

    default:
      return state;
  }
}
