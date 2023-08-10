import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';
import middleware from '../middleware/index'; 

const store = configureStore({
  reducer: rootReducer,
  middleware: (applyMiddleware) => applyMiddleware().concat(middleware)
});

export default store;
