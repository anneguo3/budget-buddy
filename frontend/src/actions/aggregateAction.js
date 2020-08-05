export const initializeTotals = transaction => ({
      type: 'INIT_TOTALS',
      payload: transaction
})

export const increaseInflow = amount => ({
      type: 'INCREASE_INFLOW',
      amount
})

export const increaseOutflow = amount => ({
      type: 'INCREASE_OUTFLOW',
      amount
})

export const handleDelete = transaction => ({
      type: 'HANDLE_DELETE',
      payload: transaction
})

export const createSpendGoal = amount => ({
      type: 'CREATE_SPEND_GOAL',
      amount
})

export const createSaveGoal = amount => ({
      type: 'CREATE_SAVE_GOAL',
      amount
})