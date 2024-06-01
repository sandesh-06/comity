import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
//apis
import { userApiSlice } from "./apiSlices/users/userApiSlice";

//states
import themeReducer from "./stateSlices/themeSlice";
import authReducer from "./stateSlices/authSlice"

const store = configureStore({
  reducer: {
    //apis
    [userApiSlice.reducerPath]: userApiSlice.reducer,

    //states
    theme: themeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});

setupListeners(store.dispatch);

export default store