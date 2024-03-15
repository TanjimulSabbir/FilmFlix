import { apiSlice } from "./apiSlice";

export const movieApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (type) => `/movie/${type}`
        })
    })
})

export const { useGetMoviesQuery } = movieApi;