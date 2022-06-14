import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: []
}
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.item = action.payload
        },

    },
    extraReducers: {

    }
})

// export const basketAmount = (basket) => {

//     basket?.reduce((amount, item) => {

//         return amount + item.price
//     }, 0);
// }

export const { addItem } = basketSlice.actions

export default basketSlice.reducer

