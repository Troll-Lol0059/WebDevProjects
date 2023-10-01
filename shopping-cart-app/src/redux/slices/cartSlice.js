import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name: "cart",
    initialState: [],
    reducers:{
        addItem:()=> {},
        removeItem:()=>{},
    }
} );

export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;
