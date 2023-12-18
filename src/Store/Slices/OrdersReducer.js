import { createSlice } from '@reduxjs/toolkit'

export const orderStatusSlice = createSlice({
    name: "orderStatus",
    initialState: {
        orderStatus: 'Pending'
    },
    reducers: {
        currentOrderStatus: (state, action) => {
            state.orderStatus = action.payload
        },
    }
})
export const { currentOrderStatus } = orderStatusSlice.actions

export default orderStatusSlice.reducer