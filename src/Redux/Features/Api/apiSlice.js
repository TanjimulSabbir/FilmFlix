import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_KEY = "api_key=95735e862c8d7543ceee5364740d5db4";
const PRIMARY_BASE_URL = "https://api.themoviedb.org/3"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: PRIMARY_BASE_URL,
        // prepareHeaders(headers) {
        //     // Add your API key to the headers
        //     headers.set("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTczNWU4NjJjOGQ3NTQzY2VlZTUzNjQ3NDBkNWRiNCIsInN1YiI6IjY1NWI2OTYxZDRmZTA0MDBjNDI1MTJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JsI5fulRuyIsdLw4ngiBKEbWtUGPAyd_42qiZgaHVb8");
        //     return headers;
        //   },
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
});

// process.env.REACT_APP_PRIMARY_BASE_URL
