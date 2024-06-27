import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/header/Navbar";
import { Toaster } from "react-hot-toast";
import Drawer from "../components/shared/header/Drawer";

function Layout() {
    return (
        <div>
            {/* <Drawer /> */}
            <Navbar />
            <Outlet />
            <Toaster position="top-center" />
        </div>
    )
}

export default Layout;