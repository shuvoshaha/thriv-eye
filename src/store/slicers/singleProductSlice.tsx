import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

export interface stateType {
    color: string,
    size: string | number,
    count: number
}

const initialState: stateType = {
    color: "",
    size: "",
    count: 0
}

export const singleProductSlice = createSlice({
    name: "single-product",
    initialState,
    reducers: {
        addColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        },

        addSize: (state, action: PayloadAction<string>) => {
            state.size = action.payload
        },

        increaseCart: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        },

    }
})

export const { addColor, increaseCart, addSize } = singleProductSlice.actions;
export default singleProductSlice.reducer