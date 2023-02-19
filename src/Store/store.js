import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from "./userSlice"
import PriceSlice from './PriceSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user:userReducer,
        price:PriceSlice,
    },
});

export default store;
