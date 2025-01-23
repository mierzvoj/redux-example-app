import counterReducer from './counter'
import authReducer from './auth'
import { configureStore } from '@reduxjs/toolkit';

export const INCREMENT = 'increment'
const store = configureStore({

    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
}
);



export default store;
