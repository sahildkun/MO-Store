import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cartFeatures/cartSlice";


export const store = configureStore({
    reducer: {
     cart: cartReducer
    }
  })

