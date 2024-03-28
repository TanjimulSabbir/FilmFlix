import { Link, useLocation } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import style from "../../../style/navbar.module.css"
import logo from "../../../assets/Logo/logo.svg"
import Genres from "./Genres";
function Navbar() {
    const pathName = useLocation().pathname;
    const handleChoice = () => {

    }

    return (
        // <div className="relative">
        <div className={`${style.navbarContainter} ${pathName === "/" ? "bg-transparent" : "bg-black"} w-full absolute top-0 z-50`}>
            <div className="navbar-container w-full flex items-center container mx-auto ">
                <div className="flex space-x-10 items-center w-full">
                    <Link to="/">
                        <img src={logo} alt="search" width={80} height={80} />
                    </Link>
                    <div>
                        <button onClick={() => handleChoice("movies")}>Movies</button>
                    </div>
                    <div>
                        <button onClick={() => handleChoice("tvshows")}>TV Shows</button>
                    </div>
                    <div className="btnContainer">
                        <button className="">Genres</button>
                        <div className="absoluteContainer text-white ">
                            <Genres />
                        </div>
                    </div>

                    <div>
                        <button onClick={() => handleChoice("more")}>More</button>
                    </div>
                </div>
                {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
                <div className="w-full flex items-center justify-end space-x-10">
                    <button className="">Login</button>
                    <button className="">Join Us</button>
                    <button className={style.SearchBtn}> <IoSearchSharp className="text-2xl" /></button>
                </div>
            </div>

        </div>
        // </div>
    )
}

export default Navbar;