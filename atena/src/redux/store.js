import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import modal from './ducks/modal';

const store = configureStore({
  reducer: {
    modal
  },
  middleware: [thunkMiddleware],
  devTools: true
});

export default store;