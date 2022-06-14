import { configureStore } from '@reduxjs/toolkit'
import itemReducer from '../features/item/ItemSlice'
import basketReducer from '../features/basket/basketSlice'

export const store = configureStore({
    reducer: {
        item: itemReducer,
        basket: basketReducer,
    },
})