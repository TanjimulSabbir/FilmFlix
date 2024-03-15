import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "95735e862c8d7543ceee5364740d5db4";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.themoviedb.org/3?api_key=${API_KEY}`,
        // prepareHeaders(headers) {
        //     // Add your API key to the headers
        //     headers.set("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTczNWU4NjJjOGQ3NTQzY2VlZTUzNjQ3NDBkNWRiNCIsInN1YiI6IjY1NWI2OTYxZDRmZTA0MDBjNDI1MTJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JsI5fulRuyIsdLw4ngiBKEbWtUGPAyd_42qiZgaHVb8");
        //     return headers;
        //   },
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
});

// baseUrl: import.meta.env.REACT_APP_PRIMARY_BASE_URL + "?apiKey=" + import.meta.env.REACT_APP_API_KEY