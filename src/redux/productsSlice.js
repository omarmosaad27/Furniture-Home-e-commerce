import { createSlice } from "@reduxjs/toolkit"; //,createAsyncThunk
import products from "../products";
// const url = "https://course-api.com/react-store-products"

// export const getProducts = createAsyncThunk('products/getProducts', () => {
//     return fetch(url)
//         .then(resp => resp.json())
//         .catch((err)=> console.log(err))
// })

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: products,
        cart: [],
        amount: 0,
        total: 0,
        isLoading: false,
        
    },
    reducers: {
        filterProducts: (state, action) => {
            state.products = state.products.filter((product)=> product.name.includes(action.payload))
        },
        addToCart: (state, action) => {
            if (state.cart.find((item) => item.id === action.payload)) {
                console.log("item added to cart");
            } else {
                let item = state.products.find((product)=> product.id === action.payload)
                state.cart.push(item)
                item.amount = item.amount + 1; 
            }
        },
        removeFromCart: (state, action) => {
            let item = state.products.find((item) => item.id === action.payload)
            item.amount = 0;
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
        },
        increaseAmount: (state, action) => {
            const cartItem = state.cart.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount + 1; 
        },
        decreaseAmount: (state, action) => {
            const cartItem = state.cart.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount - 1; 
            if (cartItem.amount === 0) {
                state.cart = state.cart.filter((item)=>item.id !== action.payload)
            }
            
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cart.filter((item) => {
                amount += item.amount
                total += item.amount * item.price
                total = parseFloat(total.toFixed(0))
            });
            state.amount = amount;
            state.total =  total
        },
        refresh: (state) => {
            state.products = products
        }
    },
    // extraReducers: {
    //     [getProducts.pending]: (state) => {
    //         state.isLoading = true
    //     },
    //     [getProducts.fulfilled]: (state, action) => {
    //         state.products = action.payload
    //         state.isLoading = false
    //     },
    //     [getProducts.rejected]: (state) => {
    //         state.isLoading = true
    //     },
    // }

})
export const { filterProducts, addToCart,removeFromCart,increaseAmount,decreaseAmount,calculateTotals,refresh } = productsSlice.actions;
export default productsSlice.reducer;