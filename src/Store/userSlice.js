const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
    name: 'User',
    initialState:"",
    reducers: {
        User(state, action) {
            state = action.payload;
        },
    },
});

export const { User } = userSlice.actions;
export default userSlice.reducer;