import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/header/Navbar";
import { Toaster } from "react-hot-toast";

function Layout() {
    return (
        <div className="relative bg-black text-white">
            <Navbar />
            <Outlet />
            <Toaster position="top-center" />
        </div>
    )
}

export default Layout;