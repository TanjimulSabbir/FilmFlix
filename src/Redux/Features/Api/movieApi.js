import { API_KEY, apiSlice } from "./apiSlice";

export const movieApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => ({
                url: `/movie/now_playing?${API_KEY}`,
            })
        }),
        getMovieDetails: builder.query({
            query: ({ id, type }) => ({
                url: `/${type}/${id}?${API_KEY}`
            })
        }),
        getMovieVideos: builder.query({
            query: ({ id, type }) => ({
                url: `/${type}/${id}/videos?${API_KEY}`
            })
        }),
        getDiscoverMovies: builder.query({
            query: ({ type, path }) => {
                console.log(path, "from getDiscoverMovies");

                if (path && path.includes("sort_by")) {
                    const keywordKey = path.split("=")[1];
                    return { url: `/${type}/${keywordKey}?${API_KEY}` };
                }

                if (path) {
                    return { url: `/discover/${type}?${API_KEY}&${path}&sort_by=primary_release_date.desc` };
                }

                return { url: `/discover/${type}?${API_KEY}&sort_by=popularity.desc` };
            }
        }),
        getCasts: builder.query({
            query: ({ type, id }) => ({
                url: `/${type}/${id}/credits?${API_KEY}`
            })
        }),
        getAllDataSlash: builder.query({
            query: ({ type, id, keyword }) => {
                let url;
                if (!id) {
                    url = `/${type}/${keyword}?${API_KEY}`;
                } else {
                    url = `/${type}/${id}/${keyword}?${API_KEY}`;
                }
                return { url };
            }
        }),
        getKeywordSearch: builder.query({
            query: (queryText) => ({
                url: `/search/multi?${API_KEY}&query=${queryText}`
            })
        }),
    })
});

export const {
    useGetMoviesQuery,
    useGetMovieDetailsQuery,
    useGetMovieVideosQuery,
    useGetDiscoverMoviesQuery,
    useGetCastsQuery,
    useGetAllDataSlashQuery,
    useGetKeywordSearchQuery
} = movieApi;
