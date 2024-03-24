import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    castData: [],
    clickedMovieDetails: {}
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
        },
        addClickedMovieDetailsData: (state, action) => {
            state.clickedMovieDetails = action.payload;
        }
    }
})

export const { addQueryKeywords, addCastData, addClickedMovieDetailsData } = moviesSlice.actions;
export default moviesSlice.reducer;