import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice, singleProductSlice } from "./slicers";


export const store = configureStore({
    reducer: {
        product: ProductSlice,
        singleProduct: singleProductSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch