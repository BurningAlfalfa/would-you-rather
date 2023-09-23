import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';
import middleware from '../middleware/index'; 

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

export default store;
