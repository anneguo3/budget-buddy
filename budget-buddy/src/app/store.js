import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../components/MyData/EntryList/reducer';

export default configureStore({
  reducer: {
    list: listReducer,
  },
});
