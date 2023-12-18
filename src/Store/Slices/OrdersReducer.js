import { createSlice } from '@reduxjs/toolkit'

export const orderStatusSlice = createSlice({
    name: "orderStatus",
    initialState: {
        orderStatus: 'Pending',
        orders: []
    },
    reducers: {
        currentOrderStatus: (state, action) => {
            state.orderStatus = action.payload
        },
        addOrder:(state,action)=>{
            state.orders.push({orderItems:[...action.payload],orderId:1,statusOfOrder:'Pending'})
        }
    }
})
export const { currentOrderStatus,addOrder } = orderStatusSlice.actions

export default orderStatusSlice.reducer