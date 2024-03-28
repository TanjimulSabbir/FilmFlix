import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    castData: [],
    clickedMovieDetails: {},
    genresData: []
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
        },
        addGenresData: (state, action) => {
            state.genresData = action.payload;
        }
    }
})

export const { addQueryKeywords, addCastData, addClickedMovieDetailsData, addGenresData } = moviesSlice.actions;
export default moviesSlice.reducer;