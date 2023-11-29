import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './Slices/CartReducer'

export const store = configureStore({
    reducer:{
        cart:CartReducer
    }
})