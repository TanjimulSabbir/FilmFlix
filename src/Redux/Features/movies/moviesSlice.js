import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        addQueryKeywords: (state, action) => {
            state.items = [action.payload];
        }
    }
})

export const { addQueryKeywords } = moviesSlice.actions;
export default moviesSlice.reducer;