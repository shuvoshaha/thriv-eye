import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

export interface stateType {
    name: string
}

const initialState: stateType = {
    name: "Shuvo"
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addCart: (state, action?: PayloadAction<string>) => {
            state.name = "shuvo shaha"
        }
    }
})

export const { addCart } = productSlice.actions;
export default productSlice.reducer