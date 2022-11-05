import {configureStore} from '@reduxjs/toolkit'
import authSlice from "../slices/authSlice";
// import {createStore, applyMiddleware} from 'redux';
// import {authReducer} from './reducers/authReducer';

const store = configureStore({
    reducer: {
        auth: authSlice
    },
});

export default store;
