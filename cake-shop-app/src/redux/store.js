import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import profileSlice from "../slices/profileSlice";
import authSlice from "../slices/authSlice";

export const store = configureStore( {
    reducer: {
        cart:cartSlice,
        profile:profileSlice,
        auth:authSlice,
    }
} );

