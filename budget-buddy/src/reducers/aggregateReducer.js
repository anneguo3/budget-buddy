const initialState = {
      totalInflow = 0,
      totalOutflow = 0
}

export default function aggregateReducer(state = initialState, action) {
      switch(action.type) {
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
            default:
                  return state;
      }
}