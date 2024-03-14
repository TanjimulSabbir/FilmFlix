import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../Pages/auth/Login";

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
            }
        ]
    }
]);

export default router;