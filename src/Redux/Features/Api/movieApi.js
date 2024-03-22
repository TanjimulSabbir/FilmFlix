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
        }),
        getMovieVideos: builder.query({
            query: (id) => ({
                url: `/movie/${id}/videos?${API_KEY}`
            })
        }),
        getDiscoverMovies: builder.query({
            query: ({ type, releaseKewword }) => ({
                url: `/discover/${type}?${API_KEY}&${releaseKewword}`
            })
        })
    })
})

export const { useGetMoviesQuery, useGetMovieDetailsQuery, useGetMovieVideosQuery, useGetDiscoverMoviesQuery } = movieApi;