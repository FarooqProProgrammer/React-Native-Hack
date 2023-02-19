const { createSlice } = require('@reduxjs/toolkit');

const PriceSlice = createSlice({
    name: 'price',
    initialState: [],
    reducers: {
        addPrice(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addPrice, remove } = PriceSlice.actions;
export default PriceSlice.reducer;