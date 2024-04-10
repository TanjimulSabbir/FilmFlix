import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/header/Navbar";
import { Toaster } from "react-hot-toast";

function Layout() {
    return (
        <div>
            <div className="mb-20">
                <Navbar />
            </div>
            <Outlet />
            <Toaster position="top-center" />
        </div>
    )
}

export default Layout;