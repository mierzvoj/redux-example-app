import { createStore } from "redux";
import {createSlice, configureStore} from "@reduxjs/toolkit"

export const INCREMENT = 'increment'
const initialCounterState = { counter: 0, showCounter: true};
const initialAuthState = {isAuthenticated: false}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){ state.counter--},
        increase(state, action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

const isAuthenticatedSlice = createSlice({
    name:"isAuthenticated",
    initialState: initialAuthState,
    reducers:{
        login(state){ state.isAuthenticated = true},
        logout(state){ state.isAuthenticated = false}
    }
})


const store = configureStore({

    reducer: {
        counter: counterSlice.reducer,
        auth: isAuthenticatedSlice.reducer
    }
}
);

export const counterActions = counterSlice.actions
export const authActions = isAuthenticatedSlice.actions
export default store;
