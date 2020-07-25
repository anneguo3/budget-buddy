import { handleDelete } from "./aggregateAction";

export const addToCat = transaction => ({
      type: 'ADD_TO_CATEG',
      payload: transaction
})

export const handleDelete = transaction => ({
      type: 'HANDLE_DELETE',
      payload: transaction
})