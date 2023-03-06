import { configureStore } from "@reduxjs/toolkit"
import filterSliceReducer from './redux/filterSlice'

export const store = configureStore({
    reducer: {
        bookFilter: filterSliceReducer,
    }
})