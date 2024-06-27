import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const localData = JSON.parse(localStorage.getItem("watchlist"));
const initialState = {
    watchListMovies: []
};

const watchListSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        setWatchListMovies: (state, action) => {
            const alreadyAdded = state.watchListMovies?.some(movie => movie.id === action.payload.id);
            console.log(state.watchListMovies);

            if (!alreadyAdded) {
                state.watchListMovies.push(action.payload);
                localStorage.setItem("watchlist", JSON.stringify(state.watchListMovies));
                toast.success(`${action.payload?.title} added to watchlist!`);
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
