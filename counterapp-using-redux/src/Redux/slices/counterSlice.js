import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice( {
    // slice name
    name:"counter",

    // initial state object
    initialState: {
        // initial value set to 0
        value:0,
    },

    // functionalities
    reducers:{
    
        increment: (state)=> {
            state.value+=1;
        },

        decrement: (state)=> {
            state.value-=1;
        },

        reset: (state)=> {
            state.value = 0;
        }
    }
} );


// Action creators are generated for each case reducer function
// Export the generated slice reducer and action creators
export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;