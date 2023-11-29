import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemInCart = state.cart.find((item)=> item.id == action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        }
    }
})
export const {addToCart} = cartSlice.actions

export default cartSlice.reducer