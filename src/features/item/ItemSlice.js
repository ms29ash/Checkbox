import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [{
        "id": 1, "name": "Burger",
        "img": "burger.jpg",
        "price": 60
    },
    {
        "id": 2, "name": "Cheese Burger",
        "img": "cheese burger.jpg",
        "price": 80
    },
    {
        "id": 3, "name": "Pizza",
        "img": "pizza.jpg",
        "price": "150"
    },
    {
        "id": 4, "name": "Blue Donut",
        "img": "blue donut.jpg",
        "price": 80
    },
    {
        "id": 5, "name": "Pink Donut",
        "img": "pink donut.jpg",
        "price": 80
    },


    {
        "id": 6, "name": "Cookie",
        "img": "cookie.jpg",
        "price": 30
    },
    {
        "id": 7, "name": "Donut",
        "img": "donut.jpg",
        "price": 50
    },
    {
        "id": 8, "name": "Cofee",
        "img": "cofee.jpg",
        "price": 40
    },
    {
        "id": 9, "name": "Green Tea",
        "img": "green tea.jpg",
        "price": 50
    },
    {
        "id": 10, "name": "Mango Shake",
        "img": "mango shake.jpg",
        "price": 120
    },
    {
        "id": 11, "name": "Oreo Shake",
        "img": "oreo shake.jpg",
        "price": 140
    },
    {
        "id": 12, "name": "Strawberry Shake",
        "img": "strawberry shake.jpg",
        "price": 120
    },

    {
        "id": 13, "name": "Softy",
        "img": "softy.jpg",
        "price": 50
    },
    {
        "id": 14, "name": "Strawberry Bar",
        "img": "strawberry bar.jpg",
        "price": 40
    },],
    cart: [
    ],
    currentItem: {}
}

const getItemIndex = (state, idToFind) => {
    const ids = state.cart.map(item => item.item.id);
    return ids.indexOf(idToFind);
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemIndex = getItemIndex(state, action.payload.item.id);
            if (itemIndex < 0) {
                state.cart.push(action.payload);
            } else if (itemIndex > -1) {
                state.cart[itemIndex].quantity += action.payload.quantity;
            }
        },
        resetCart: (state, action) => {
            state.cart = [];
        },
        currentItem: (state, action) => {
            state.currentItem = action.payload
        },
    },
})

export const basketAmount = (state) => {

    state.cart?.reduce((amount, item) => {

        return amount + item.item.price
    }, 0);
}

export const { addItem, currentItem, resetCart } = itemSlice.actions

export default itemSlice.reducer










