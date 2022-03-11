import {configureStore} from '@reduxjs/toolkit'
import { reducer } from './todoSlice'


const store = configureStore({
    reducer: reducer
})

export default store;