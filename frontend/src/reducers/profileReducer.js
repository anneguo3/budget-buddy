// const initialState = {
//   incomeCategories: [],
//   expenseCategories: [],
// };

// export default function profileReducer(state = initialState, action) {
//   switch (action.type) {
//     case "CATEGORIES_GET_SUCCESS":
//       const payload = JSON.parse(action.payload);
//       return {
//         ...state,
//         incomeCategories: payload["incomeCategories"],
//         expenseCategories: payload["expenseCategories"],
//       };
//     case "ADD_INCOME_CATEGORY":
//       return {
//         ...state,
//       };
//     case "ADD_EXPENSE_CATEGORY":
//       return {
//         ...state,
//       };
//     case "DELETE_INCOME_CATEGORY":
//       return {
//         ...state,
//       };
//     case "DELETE_EXPENSE_CATEGORY":
//       return {
//         ...state,
//       };
//   }
// }
