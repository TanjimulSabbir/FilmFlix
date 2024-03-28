import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../Pages/auth/Login";
import MovDetailsHome from "../Pages/MovieDetails/MovDetailsHome";
import MovieHome from "../Pages/Movies/MovieHome";
import TvHome from "../Pages/TvSeries/TvHome";
import More from "../Pages/More/More";

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
                path: "/tvshows",
                element: <TvHome />
            },
            {
                path: "/movies",
                element: <MovieHome />
            },
            {
                path: "/movies/:genreId",
                element: <MovieHome />
            },
            {
                path: "/more",
                element: <More />
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
                path: "/movie/:movieId",
                element: <MovDetailsHome />
            }
        ]
    }
]);

export default router;