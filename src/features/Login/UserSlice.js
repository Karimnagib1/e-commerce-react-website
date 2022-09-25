import { createSlice } from "@reduxjs/toolkit";



const user = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        data: {}
    },
    reducers: {
        authUser: (state, {payload}) =>{
            state.isAuthenticated = true;
            state.data = payload;

        },
        logout: (state, {payload}) => {
            state.isAuthenticated = false;
            state.data = {};
        }
    }
})
export const selectUser = state => {
    return state.user.data;
}
export const selectIsAuthenticated = state => {
    return state.user.isAuthenticated;
}


export const {authUser, logout} = user.actions;
export default user.reducer; 
