import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../Redux/Features/Api/apiSlice';
import sliderSlice from '../Redux/Features/Slider/sliderSlice';
import moviesSlice from '../Redux/Features/movies/moviesSlice';


const store = configureStore({
    reducer: { [apiSlice.reducerPath]: apiSlice.reducer, slider: sliderSlice, movieData: moviesSlice},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;