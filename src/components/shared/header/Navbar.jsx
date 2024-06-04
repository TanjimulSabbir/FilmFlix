import { useLocation, Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import style from "../../../style/navbar.module.css";
import logo from "../../../assets/Logo/logo.png";
import "../../../style/animation.css"
import SinglePath from "./singlePath";
import { useEffect, useState } from "react";

function Navbar() {

    const location = useLocation();

    const allPathLinks = [{ title: "Movies", path: "/movies" }, { title: "TV Shows", path: "/tvshows" }, { title: "Genres", path: "" }]
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const maxScroll = 300; // Adjust this value based on when you want full opacity
    const opacity = Math.min(scrollY / maxScroll, 1);
    return (
        <div className={`rightSlider ${style.navbarContainter} w-full fixed top-0 z-[40] bg-transparent}`} style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
        >
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

