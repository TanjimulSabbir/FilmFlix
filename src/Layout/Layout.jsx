import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/header/Navbar";
import { Toaster } from "react-hot-toast";

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Toaster position="top-center" />
        </div>
    )
}

export default Layout;