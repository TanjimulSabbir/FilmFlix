import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    watchListMovies: []
}

const watchListSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        setWatchListMovies: (state, action) => {
            state.watchListMovies.push(action.payload);
            localStorage.setItem("watchlist", JSON.stringify(state.watchListMovies))
        }
    }
})

export const { setWatchListMovies } = watchListSlice.actions;
export default watchListSlice.reducer;