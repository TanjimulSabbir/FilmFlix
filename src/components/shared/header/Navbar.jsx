import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import style from "../../../style/navbar.module.css";
import logo from "../../../assets/Logo/logo.svg";
import Genres from "./Genres";
import { useState } from "react";

function Navbar() {
    const [activeMenu, setActiveMenu] = useState("");

    const handleChoice = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className={`${style.navbarContainter} w-full absolute top-0 z-50`}>
            <div className="navbar-container w-full flex items-center container mx-auto">
                <div className="flex space-x-10 items-center w-full">
                    <NavLink to="/" activeClassName="active">
                        <img src={logo} alt="search" width={80} height={80} />
                    </NavLink>
                    <div onMouseOver={() => setActiveMenu("movies")}
                        className={`${activeMenu === "movies" && "border-b-4 border-green-600"}`}>
                        <button onClick={() => handleChoice("movies")}>Movies</button>
                    </div>
                    <div onMouseOver={() => setActiveMenu("tvshows")}
                        className={`${activeMenu === "tvshows" && "border-b-4 border-green-600"}`}>
                        <button onClick={() => handleChoice("tvshows")}>TV Shows</button>
                    </div>
                    <div className="btnContainer">
                        <button className="">Genres</button>
                        <div className="absoluteContainer">
                            <Genres />
                        </div>
                    </div>
                    <div onMouseOver={() => setActiveMenu("more")}
                        className={`${activeMenu === "more" && "border-b-4 border-green-600"}`}>
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
    );
}

export default Navbar;
