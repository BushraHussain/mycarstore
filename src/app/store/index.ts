import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartProductSlice from "./productsSlice";

export const store = configureStore({
    reducer:{
        cartReducer: cartSlice,
        cartProductReducer: cartProductSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;