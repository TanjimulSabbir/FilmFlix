import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../Pages/auth/Login";
import MovDetailsHome from "../Pages/MovieDetails/MovDetailsHome";
import MoviesHome from "../Pages/Movies/MoviesHome";
import TvHome from "../Pages/TvSeries/TvHome";
import NotFound from "../components/accessories/NotFound";
import GenresMovies from "../Pages/Genres/GenresMovies";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/tv",
                element: <TvHome/>
            },
            {
                path: "/movie",
                element: <MoviesHome />
            },
            {
                path: "/genres/:genType/:genreId",
                element: <GenresMovies />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Login />
            },
            {
                path: "/movie/:id",
                element: <MovDetailsHome />
            },
            {
                path: "/tv/:id",
                element: <MovDetailsHome />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;