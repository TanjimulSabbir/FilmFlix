import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_KEY = "api_key=95735e862c8d7543ceee5364740d5db4";
const PRIMARY_BASE_URL = "https://api.themoviedb.org/3"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: PRIMARY_BASE_URL,
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
});

