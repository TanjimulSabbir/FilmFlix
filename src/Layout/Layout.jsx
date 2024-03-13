import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav className="text-green-500 text-3xl text-center pt-5">
                <p>I'm Header</p>
            </nav>
            <Outlet />
            <footer className="text-green-500 text-3xl text-center pb-5">
                <p>I'm Footer!</p>
            </footer>
        </div>
    )
}

export default Layout;