import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tableOrder:[]
}

export const slice = createSlice({
    name:'orderMate',
    initialState,
    reducers:{
        cartItems:(state,action)=>{
            state.item = action.payload
            console.log(state.item);
        }
    }
})

export const {cartItems} = slice.actions
export default slice.reducer