import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartProduct {
    title: string,
    price: number,
    quantity: number,
    id: string,
    image: string
}

interface ICartState {
    cartProducts: ICartProduct[];
}

const initialState: ICartState = {
    cartProducts: []
}

export const cartProductSlice = createSlice({
    name: "cartProducts",
    initialState, 
    reducers: {
        addProductToCart: (state, action:PayloadAction<ICartProduct>) => {
            const productToAdd = action.payload;
            const existingProduct = state.cartProducts.find(product => product.id === productToAdd.id);
            if(existingProduct){
                existingProduct.quantity += productToAdd.quantity;
            } else {
                state.cartProducts.push(productToAdd);
            }

        },

        deleteProductFromCart: (state, action: PayloadAction<string>) => {
            const productIdToRemove = action.payload;
            state.cartProducts = state.cartProducts.filter(product => product.id !== productIdToRemove)
        }

    }

})

export const {addProductToCart, deleteProductFromCart } = cartProductSlice.actions;
export default cartProductSlice.reducer;

