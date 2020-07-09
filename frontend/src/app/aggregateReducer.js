// ======================= DEPRECATED ========================

/*
import { createSlice } from '@reduxjs/toolkit';

export const aggregate = createSlice({
      name: 'aggregate',
      initialState: {
            value: { 
                  name: "Placeholder", 
                  totalInflow: 0, 
                  totalOutflow: 0,
            },
      },
      reducers: {
            updateTotalInflow: (state, action) => {
                  state.value.totalInflow += Number(action.payload);
            },
            updateTotalOutflow: (state, action) => {
                  state.value.totalOutflow += Number(action.payload);
            },
      },
});

export const aggregateReducer = aggregate.reducer;

export const { updateTotalInflow, updateTotalOutflow } = aggregate.actions;
*/ 