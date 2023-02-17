import { configureStore } from "@reduxjs/toolkit";
import pokeslice from './slice/poke.slice'
import namePoke from './slice/namePoke.slice'

export default configureStore({
    reducer:{
        pokeslice:pokeslice,
        namePoke:namePoke
    }
})