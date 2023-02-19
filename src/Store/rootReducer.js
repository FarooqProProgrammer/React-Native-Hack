import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import PriceSlice from "./PriceSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
    reducer: {
        cart: cartSlice,
        user:userSlice,
        price:PriceSlice,
    }
})
 
 export default rootReducer