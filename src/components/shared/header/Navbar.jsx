import { useLocation, Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import style from "../../../style/navbar.module.css";
import logo from "../../../assets/Logo/logo.svg";
import "../../../style/animation.css"
import SinglePath from "./singlePath";

function Navbar() {
    const location = useLocation();

    const allPathLinks = [{ title: "Movies", path: "/movies" }, { title: "TV Shows", path: "/tvshows" }, { title: "Genres", path: "" }, { title: "More", path: "/more" }]

    return (
        <div className={`rightSlider ${style.navbarContainter} ${location.pathname === "/" ? "bg-transparent" : "bg-black"} w-full fixed top-0 z-[40]`}>
            <div className="navbar-container flex items-center justify-between container mx-auto">
                <div className="flex items-center space-x-10">
                    <Link exact to="/" className={style.logo}>
                        <img src={logo} alt="search" width={80} height={80} />
                    </Link>

                    {allPathLinks.map(item => <SinglePath key={item.title} link={item} />)}
                </div>
                <div className="flex items-center space-x-10">

                    {/* Auth buttons */}
                    <button className={`${style.activeLink}`}>Login</button>
                    <button className={`${style.activeLink}`}>Join Us</button>
                    <button className={style.SearchBtn}><IoSearchSharp className="text-2xl" /></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
