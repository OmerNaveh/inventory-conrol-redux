import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from '../reducers/employeeReducer';
import { inventoryReducer } from '../reducers/inventoryReducer';
export const store = configureStore({
  reducer: {
   employeeReducer, inventoryReducer
  }
});

