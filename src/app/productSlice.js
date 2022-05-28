import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart: []
}


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productAdded: {
            reducer(state, action) {
                state.cart.push(action.payload)
            }
        },
       
    },
})

export const { productAdded } = productSlice.actions

export default productSlice.reducer