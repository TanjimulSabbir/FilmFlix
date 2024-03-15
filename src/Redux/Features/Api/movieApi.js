import { apiSlice } from "./apiSlice";

export const movieApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (type) => ({
                url: `/movie/now_playing`,
            })
        })
    })
})

export const { useGetMoviesQuery } = movieApi;