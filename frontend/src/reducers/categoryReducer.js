const initialState = {
      expenseCategories: [],
      incomeCategories: []
};

export default function categoryReducer(state = initialState, action) {
      switch(action.type) {
            case 'INIT_EXPENSE':
                  let expenseExists = state.expenseCategories.indexOf(action.payload) > -1
                  if (!expenseExists) {
                        console.log(action.payload)
                        return {
                              ...state,
                              expenseCategories: [...state.expenseCategories, action.payload]
                        };
                  }
                  return state;
            case 'INIT_INCOME':
                  let incomeExists = state.incomeCategories.indexOf(action.payload) > -1
                  if (!incomeExists) {
                        return {
                              ...state,
                              incomeCategories: [...state.incomeCategories, action.payload]
                        };
                  }
                  return state;
            case 'RESET_CATEGORIES':
                  return {
                        ...state,
                        expenseCategories: [],
                        incomeCategories: []
                  };
            default:
                  return state;
      }
}