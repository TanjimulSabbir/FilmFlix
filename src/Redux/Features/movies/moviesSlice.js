import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    castData: []
}

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        addQueryKeywords: (state, action) => {
            state.items = [action.payload];
        },
        addCastData: (state, action) => {
            state.castData = [action.payload];
        }
    }
})

export const { addQueryKeywords, addCastData } = moviesSlice.actions;
export default moviesSlice.reducer;