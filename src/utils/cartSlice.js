import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        // action
        addItem:(state,action)=>{
            // this is reducer function
            // modify the state using action
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            // logic should be written
            state.items.pop();
        },
        clearCart:(state)=>{
            // state.items.length = 0;
            return {items:[]}; //replacing the original state
        }
    }
});

export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;