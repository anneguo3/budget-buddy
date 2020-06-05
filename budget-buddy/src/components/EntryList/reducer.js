import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        value: [
            { date: '06/02/2020', name: "Purchased Item", price: '10.00', isMoneyIncrease: false },
            { date: '09/02/2020', name: "Car Loan Payment", price: '25.00', isMoneyIncrease: false  },
            { date: '06/01/2019', name: "Payroll", price: '511.00', isMoneyIncrease: true }]
    },
    reducers: { // For future steps
        //addList: (state, action) => {
       //     state.value.push({ content: action.payload, details: [], visible: false })
       // },
       // clearAll: (state, action) => {
       //     state.value = [];
        //}
    },
});

// export const { addList, clearAll } = listSlice.actions; // For future steps

export const selectList = state => state.list.value;

export default listSlice.reducer;
