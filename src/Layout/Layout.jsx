import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/header/Navbar";

function Layout() {
    return (
        <div className="relative">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;