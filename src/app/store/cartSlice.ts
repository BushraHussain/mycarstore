import { createSlice } from "@reduxjs/toolkit";
//import { PayloadAction } from "@reduxjs/toolkit";

export interface IProductCount {
    productCount: number;
}

const initialState:IProductCount = {
    productCount: 0,
}

export const cartSlice = createSlice({
    name: "productCount",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if(action.payload){
                state.productCount += action.payload;
            } else {  
                state.productCount += 1;
            }
            
        },
        removeFromCart: (state, action) => {
            if(action.payload){
                state.productCount -= action.payload;
            } else {
                state.productCount -= 1;
            }
            
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
