import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userData: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userData = action.payload;
        },
        logout: (state) => {
            state.userData = null;
        },
    },
});
export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
