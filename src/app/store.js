import { configureStore } from '@reduxjs/toolkit'
import itemReducer from '../features/item/ItemSlice'

export const store = configureStore({
    reducer: {
        item: itemReducer,
    },
})