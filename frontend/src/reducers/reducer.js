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
            if (action.payload.isMoneyIncrease) {
                return { 
                    ...state,
                    transactions: [...state.transactions, action.payload],
                };
            } else {
                return { 
                    ...state,
                    transactions: [...state.transactions, action.payload],
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