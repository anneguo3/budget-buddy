// ============================= DEPRECATED ==========================

/*
import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    value: [
      {
        id: "498ca673-6939-4cb1-b03a-d866e3d7fa84",
        date: "2020-06-02",
        name: "Purchased Item",
        amount: "10.00",
        isMoneyIncrease: false,
      },
      {
        id: "3ab15ed7-a314-4c0b-a3f3-37bedee7a316",
        date: "2020-09-02",
        name: "Car Loan Payment",
        amount: "25.00",
        isMoneyIncrease: false,
      },
      {
        id: "5762840f-bab9-408c-bac3-c2ec43163903",
        date: "2019-11-02",
        name: "Payroll",
        amount: "511.00",
        isMoneyIncrease: true,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItem: (state, action) => {
      const index = state.value.findIndex(
        (entry) => entry.id === action.payload.id
      );
      if (index > -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const listReducer = listSlice.reducer;

export const { addItem, deleteItem } = listSlice.actions;
*/