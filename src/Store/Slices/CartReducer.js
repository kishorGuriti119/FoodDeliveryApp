import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemInCart = state.cart.find((item)=> item.menuItemId == action.payload.menuItemId);
            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
        incrementQunatity:(state,action)=>{
            const itemInCart = state.cart.find((item)=> item.menuItemId == action.payload.menuItemId);
            itemInCart.quantity++
        },
        decrementQuantity:(state,action)=>{
            const itemInCart = state.cart.find((item)=> item.menuItemId == action.payload.menuItemId);
            if(itemInCart.quantity==1){
                const removeFromCart = state.cart.filter((item)=>item.menuItemId!==action.payload.menuItemId)
                state.cart = removeFromCart;
            }
            else{
                itemInCart.quantity--
            }
        },
        replaceItem:(state,action)=>{
            state.cart =[ { ...action.payload, quantity: 1 }];
        }
    }
})
export const {addToCart,incrementQunatity,decrementQuantity,replaceItem} = cartSlice.actions

export default cartSlice.reducer