import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import style from "../../../style/navbar.module.css"
import logo from "../../../assets/Logo/logo.svg"
function Navbar() {
    const handleChoice = () => {

    }

    return (
        // <div className="relative">
            <nav className={`${style.navbarContainter} w-full bg-black absolute top-0 z-40`}>
                <div className="navbar-container flex items-center container mx-auto">
                    <div className="flex space-x-10 items-center w-full">
                        <Link to="/">
                            <img src={logo} alt="search" width={80} height={80} />
                        </Link>
                        <button onClick={() => handleChoice("movies")}>Movies</button>
                        <button onClick={() => handleChoice("tvshows")}>TV Shows</button>
                        <button onClick={() => handleChoice("genres")}>Genres</button>
                        <button onClick={() => handleChoice("more")}>More</button>
                    </div>
                    {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
                    <div className="w-full flex items-center justify-end space-x-10">
                        <button className="">Login</button>
                        <button className="">Join Us</button>
                        <button className={style.SearchBtn}> <IoSearchSharp className="text-2xl" /></button>
                    </div>
                </div>
            </nav>
        // </div>
    )
}

export default Navbar;