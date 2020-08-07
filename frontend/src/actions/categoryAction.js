export const initExpense = category => ({
      type: 'INIT_EXPENSE',
      payload: category
})

export const initIncome = category => ({
      type: 'INIT_INCOME',
      payload: category
})

export const resetCategories = () => ({
      type: 'RESET_CATEGORIES'
})
