import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../Pages/auth/Login";
import Design from "./Design";
import MovDetailsHome from "../Pages/MovieDetails/MovDetailsHome";

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
                path: "/login",
                element: <Login />
            },
            {
                path: "/design",
                element: <Design />
            },
            {
                path: "/movie/:movieId",
                element: <MovDetailsHome />
            }
        ]
    }
]);

export default router;