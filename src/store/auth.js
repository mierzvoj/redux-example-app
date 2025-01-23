import {createSlice} from "@reduxjs/toolkit"


const initialAuthState = {isAuthenticated: false}
const isAuthenticatedSlice = createSlice({
    name:"isAuthenticated",
    initialState: initialAuthState,
    reducers:{
        login(state){ state.isAuthenticated = true},
        logout(state){ state.isAuthenticated = false}
    }
})


export const authActions = isAuthenticatedSlice.actions

export default isAuthenticatedSlice.reducer