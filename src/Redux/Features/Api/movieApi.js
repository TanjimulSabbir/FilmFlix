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
            query: ({ type, path }) => {
                console.log(type, path, "from the movieApi")
                return { url: `/discover/${type}?${API_KEY}&${path}` }
            }

        }),
        getCasts: builder.query({
            query: ({ type, id }) => {
                return { url: `/${type}/${id}/credits?${API_KEY}` }
            }

        })
    })
})

export const { useGetMoviesQuery, useGetMovieDetailsQuery, useGetMovieVideosQuery, useGetDiscoverMoviesQuery, useGetCastsQuery } = movieApi;