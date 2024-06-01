import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: String(localStorage.getItem("theme"))
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        changeTheme: (state, action) =>{
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload)
        }
    }
})

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer