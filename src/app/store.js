import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../Redux/Features/Api/apiSlice';
import sliderSlice from '../Redux/Features/Slider/sliderSlice';


const store = configureStore({
    reducer: { [apiSlice.reducerPath]: apiSlice.reducer, slider: sliderSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;