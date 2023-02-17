import { createSlice } from "@reduxjs/toolkit";

const namePokeSlice =createSlice({
    name:'namePoke',
    initialState:null,
    reducers:{
        setNameSlice:(state, action)=>action.payload
    }
})
export const {setNameSlice}=namePokeSlice.actions
export default namePokeSlice.reducer