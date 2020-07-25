const initialState = {
      totalChequing: 0,
      totalSavings: 0,
      totalEntertainment: 0,
      totalGroceries: 0,
      totalRestaurants: 0,
      totalHousing: 0,
      totalMiscellaneous: 0
};

export default function categoryReducer(state = initialState, action) {
      switch(action.type) {
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