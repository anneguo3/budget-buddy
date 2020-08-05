const initialState = {
      totalInflow: 0,
      totalOutflow: 0,
      spendGoal: -999,
      saveGoal: -999
}

export default function aggregateReducer(state = initialState, action) {
      switch(action.type) {
            case 'INIT_TOTALS':
                  if (action.payload.isMoneyIncrease) {
                        return {
                              ...state,
                              totalInflow: state.totalInflow + Number(action.payload.amount),
                        };
                  } else {                  
                        return {
                              ...state,
                              totalOutflow: state.totalOutflow + Number(action.payload.amount)
                        };
                  }
            case 'INCREASE_INFLOW':
                  return { 
                        ...state,
                        totalInflow: state.totalInflow + Number(action.payload.amount)
                    };
            case 'INCREASE_OUTFLOW':
                  return { 
                        ...state,
                        totalOutflow: state.totalOutflow + Number(action.payload.amount)
                    };
            case 'HANDLE_DELETE':
                  if (action.payload.isMoneyIncrease) {
                        return {
                              ...state,
                              totalInflow: state.totalInflow - Number(action.payload.amount),
                        };
                  } else {                  
                        return {
                              ...state,
                              totalOutflow: state.totalOutflow - Number(action.payload.amount)
                        };
                  }
            case 'CREATE_SPEND_GOAL':
                  return {
                        ...state,
                        spendGoal: action.payload.amount
                  }
            case 'CREATE_SAVE_GOAL':
                  return {
                        ...state,
                        saveGoal: action.payload.amount
                  }
            default:
                  return state;
      }
}