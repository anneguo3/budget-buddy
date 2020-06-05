import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../components/EntryList/reducer';

export default configureStore({
  reducer: {
    list: listReducer,
  },
});
