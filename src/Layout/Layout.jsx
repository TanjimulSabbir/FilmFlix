import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/header/Navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;