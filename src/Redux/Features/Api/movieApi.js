import { API_KEY, apiSlice } from "./apiSlice";

export const movieApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (type) => ({
                url: `/movie/now_playing?${API_KEY}`,
            })
        }),
        getMovieDetails: builder.query({
            query: (id) => ({
                url: `/movie/${id}?${API_KEY}`
            })
        })
    })
})

export const { useGetMoviesQuery, useGetMovieDetailsQuery } = movieApi;