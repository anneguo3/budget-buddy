const initialState = {
    transactions: [],
    hasError: false,
    totalInflow: 0, 
    totalOutflow: 0,
    isMoneyIncrease: null,
    filterIsIncome: 0,
    transName: '',
    amount: '',
    date: '',
    transactionsFiltered: []
};

/*
 updateTotalInflow: (state, action) => {
                  state.value.totalInflow += Number(action.payload);
            },
            updateTotalOutflow: (state, action) => {
                  state.value.totalOutflow += Number(action.payload);
            },
            */


export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case 'ITEMS_GET_SUCCESS':
            // ADD IN HERE TODO ========================================
            return {
                ...state,
                transactions: JSON.parse(action.payload)
            };
        case 'DELETE_TRANS_SUCCESS':
            console.log(action.payload)
            console.log(state.transactions)
            const filteredTrans = state.transactions.filter(function(el) {
                return el.id !== action.payload
            })
            return { 
                ...state,
                transactions: filteredTrans
            };
        case 'TRANS_POST_SUCCESS':
            // aggregateReducer is usurped here with the branching logic of totalInflow and totalOutflow
            if (action.payload.isMoneyIncrease) {
                return { 
                    ...state,
                    transactions: [...state.transactions, action.payload],
                    totalInflow: state.totalInflow + Number(action.payload.amount)
                };
            } else {
                return { 
                    ...state,
                    transactions: [...state.transactions, action.payload],
                    totalOutflow: state.totalOutflow + Number(action.payload.amount)
                };
            }

        case 'ITEMS_GET_FAILURE':
            return {
                ...state,
                hasError: true
            };
        case 'TRANS_POST_FAILURE':
            return {
                ...state,
                hasError: true
            };

        case 'DELETE_TRANS_FAILURE':
            return {
                ...state,
                hasError: true
            };

        case 'FILTER_CHANGE':
            console.log("filterChange")
            console.log(action.payload)
            if (action.payload === "all") {
                return { 
                    ...state,
                    transactionsFiltered: [...state.transactions]
                };
            } else if (action.payload === "exp") {
                const filteredTrans = state.transactions.filter(function(el) {
                    return el.isMoneyIncrease == false;
                })
                return { 
                    ...state,
                    transactionsFiltered: filteredTrans
                };
            } else {
                const filteredTrans = state.transactions.filter(function(el) {
                    return el.isMoneyIncrease == true;
                })
                return { 
                    ...state,
                    transactionsFiltered: filteredTrans
                };
            }

        default:
            return state;
    }
}