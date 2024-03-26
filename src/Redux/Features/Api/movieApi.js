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
        }),
        getAllDataSlash: builder.query({
            query: ({ type, id, keyword }) => {
                let url;
                if (!id) {
                    url = `/${type}/${keyword}?${API_KEY}`;
                    console.log(url)
                } else {
                    url = `/${type}/${id}/${keyword}?${API_KEY}`;
                }
                return { url };
            }
        })
    })
})

export const { useGetMoviesQuery, useGetMovieDetailsQuery, useGetMovieVideosQuery, useGetDiscoverMoviesQuery, useGetCastsQuery, useGetAllDataSlashQuery } = movieApi;