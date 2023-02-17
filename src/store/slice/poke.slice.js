import { createSlice } from "@reduxjs/toolkit";



const datapokeSlice =createSlice({
    name:'pokeslice',
    initialState:1,
    reducers:{
        setPokeSlice:(state, action)=>action.payload
    }
})
export const {setPokeSlice}=datapokeSlice.actions
export default datapokeSlice.reducer