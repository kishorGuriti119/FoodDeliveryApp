import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './Slices/CartReducer'
import OrdersReducer from './Slices/OrdersReducer'

export const store = configureStore({
    reducer:{
        cart:CartReducer,
        orderStatus:OrdersReducer
    }
})