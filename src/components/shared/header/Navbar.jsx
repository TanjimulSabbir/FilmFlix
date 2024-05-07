import { NavLink, useLocation,Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import style from "../../../style/navbar.module.css";
import logo from "../../../assets/Logo/logo.svg";
import Genres from "./Genres";
import { useState } from "react";
import "../../../style/animation.css"

function Navbar() {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("");

    const handleChoice = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className={`rightSlider87 ${style.navbarContainter} ${location.pathname === "/" ? "bg-transparent" : "bg-black"} w-full fixed top-0 z-50`}>
            <div className="navbar-container flex items-center justify-between container mx-auto">
                <div className="flex items-center space-x-10">
                    <Link exact to="/" className={style.logo}>
                        <img src={logo} alt="search" width={80} height={80} />
                    </Link>
                    <NavLink to="/movies" className="active-link">
                        Movies
                    </NavLink>
                    <NavLink to="/tvshows" className="active-link">
                        TV Shows
                    </NavLink>

                    <div className="btnContainer ">
                        <button className={`${style.navLink} active-link`}>Genres</button>
                        <div className="absoluteContainer">
                            <Genres />
                        </div>
                    </div>

                    <NavLink to="/more" className={"active-link"}>
                        More
                    </NavLink>
                </div>
                <div className="flex items-center space-x-10">

                    {/* Auth buttons */}
                    <button className={`active-link`}>Login</button>
                    <button className={`active-link`}>Join Us</button>
                    <button className={style.SearchBtn}><IoSearchSharp className="text-2xl" /></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
