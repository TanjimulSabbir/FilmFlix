import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    watchListMovies: JSON.parse(localStorage.getItem("watchlist")) || []
};

const watchListSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        setWatchListMovies: (state, action) => {
            const alreadyAdded = state.watchListMovies.some(movie => movie.id === action.payload.id);

            if (!alreadyAdded) {
                state.watchListMovies.push(action.payload);
                localStorage.setItem("watchlist", JSON.stringify(state.watchListMovies));
                toast.success("Movie added to watchlist!");
            } else {
                toast.error("You have already added this movie!");
            }
        },
        removeWatchListMovie: (state, action) => {
            state.watchListMovies = state.watchListMovies.filter(movie => movie.id !== action.payload.id);
            localStorage.setItem("watchlist", JSON.stringify(state.watchListMovies));
            toast.success("Movie removed from watchlist!");
        }
    }
});

export const { setWatchListMovies, removeWatchListMovie } = watchListSlice.actions;
export default watchListSlice.reducer;
