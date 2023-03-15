import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import infoSlice from '../slice/infoSlice';

const rootReducer = combineReducers({
  infoState: infoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
