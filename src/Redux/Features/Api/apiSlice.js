import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.PRIMARY_BASE_URL + "?apiKey=" + process.env.REACT_APP_API_KEY
    }),
    endpoints: (builder) => ({})
})