import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [{
        "name": "Burger",
        "img": "burger.jpg",
        "price": 60
    },
    {
        "name": "Cheese Burger",
        "img": "cheese burger.jpg",
        "price": 80
    },
    {
        "name": "Pizza",
        "img": "pizza.jpg",
        "price": "150"
    },
    {
        "name": "Blue Donut",
        "img": "blue donut.jpg",
        "price": 80
    },
    {
        "name": "Pink Donut",
        "img": "pink donut.jpg",
        "price": 80
    },


    {
        "name": "Cookie",
        "img": "cookie.jpg",
        "price": 30
    },
    {
        "name": "Donut",
        "img": "donut.jpg",
        "price": 50
    },
    {
        "name": "Cofee",
        "img": "cofee.jpg",
        "price": 40
    },
    {
        "name": "Green Tea",
        "img": "green tea.jpg",
        "price": 50
    },
    {
        "name": "Mango Shake",
        "img": "mango shake.jpg",
        "price": 120
    },
    {
        "name": "Oreo Shake",
        "img": "oreo shake.jpg",
        "price": 140
    },
    {
        "name": "Strawberry Shake",
        "img": "strawberry shake.jpg",
        "price": 120
    },

    {
        "name": "Softy",
        "img": "softy.jpg",
        "price": 50
    },
    {
        "name": "Strawberry Bar",
        "img": "strawberry bar.jpg",
        "price": 40
    },],
    cart: [
        // {
        //     item: {
        //         "name": "Donut",
        //         "img": "donut.jpg",
        //         "price": 50
        //     },
        //     quantity: 2
        // },
        // {
        //     item: {
        //         "name": "Cofee",
        //         "img": "cofee.jpg",
        //         "price": 40
        //     },
        //     quantity: 2
        // },
        // {
        //     item: {
        //         "name": "Green Tea",
        //         "img": "green tea.jpg",
        //         "price": 50
        //     },
        //     quantity: 2
        // },


    ],
    currentItem: {}
}

const getItemIndex = (state, idToFind) => {
    const ids = state.cart.map(item => item.item.name);
    return ids.indexOf(idToFind);
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemIndex = getItemIndex(state, action.payload.item.name);
            if (itemIndex && itemIndex < 0) {
                state.cart.push(action.payload);
            } else {
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









// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     item: {}
// }
// export const itemSlice = createSlice({
//     name: 'item',
//     initialState,
//     reducers: {
//         addItem: (state, action) => {
//             state.item = action.payload
//         }
//     },
// })

// export const { addItem } = itemSlice.actions

// export default itemSlice.reducer
