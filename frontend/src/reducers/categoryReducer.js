const initialState = {
      expenseCategories: [],
      incomeCategories: []
};

export default function categoryReducer(state = initialState, action) {
      switch(action.type) {
            case 'INIT_EXPENSE':
                  let expenseExists = state.expenseCategories.indexOf(action.payload) > -1
                  if (!expenseExists) {
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
                        }
                  }
                  return state;
            case 'ADD_TO_CATEG':
                  switch(action.payload.category) {
                        case 'Chequing':
                              return {
                                    ...state,
                                    totalChequing: state.totalChequing + Number(action.payload.amount)
                              }
                        case 'Savings':
                              return {
                                    ...state,
                                    totalSavings: state.totalSavings + Number(action.payload.amount)
                              }
                        case 'Entertainment':
                              return {
                                    ...state,
                                    totalEntertainment: state.totalEntertainment + Number(action.payload.amount)
                              }
                        case 'Groceries':
                              return {
                                    ...state,
                                    totalGroceries: state.totalGroceries + Number(action.payload.amount)
                              }
                        case 'Restaurants':
                              return {
                                    ...state,
                                    totalRestaurants: state.totalRestaurants + Number(action.payload.amount)
                              }
                        case 'Housing':   
                              return {
                                    ...state,
                                    totalHousing: state.totalHousing + Number(action.payload.amount)
                              }
                        case 'Miscellaneous':
                              return {
                                    ...state,
                                    totalMiscellaneous: state.totalMiscellaneous + Number(action.payload.amount)
                              }
                        default:
                              return state;
                  }
            case 'HANDLE_DELETE':
                  switch(action.payload.category) {
                        case 'Chequing':
                              return {
                                    ...state,
                                    totalChequing: state.totalChequing - Number(action.payload.amount)
                              }
                        case 'Savings':
                              return {
                                    ...state,
                                    totalSavings: state.totalSavings - Number(action.payload.amount)
                              }
                        case 'Entertainment':
                              return {
                                    ...state,
                                    totalEntertainment: state.totalEntertainment - Number(action.payload.amount)
                              }
                        case 'Groceries':
                              return {
                                    ...state,
                                    totalGroceries: state.totalGroceries - Number(action.payload.amount)
                              }
                        case 'Restaurants':
                              return {
                                    ...state,
                                    totalRestaurants: state.totalRestaurants - Number(action.payload.amount)
                              }
                        case 'Housing':
                              return {
                                    ...state,
                                    totalHousing: state.totalHousing - Number(action.payload.amount)
                              }
                        case 'Miscellaneous':
                              return {
                                    ...state,
                                    totalMiscellaneous: state.totalMiscellaneous - Number(action.payload.amount)
                              }
                        default:
                              return state;
                  }
            default:
                  return state;
      }
}