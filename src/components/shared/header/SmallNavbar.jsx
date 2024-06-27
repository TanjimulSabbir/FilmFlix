import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { IoClose, IoMenuSharp, IoSearchSharp } from "react-icons/io5";

import style from "../../../style/navbar.module.css";
import "../../../style/animation.css"

import { MdLocalMovies } from "react-icons/md";
import { CgTv } from "react-icons/cg";
import { PiFilmSlateThin } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

import SinglePath from "./SinglePath";
import useScrollPosition from "../../accessories/useScrollPosition";
import SearchModal from "./SearchModal";
import logo from "../../../assets/Logo/logo.png"


function SmallNavbar() {
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const scrollY = useScrollPosition();
    const CurrentPath = useLocation().pathname;

    const handleSearchBtn = () => {
        setOpenSearchModal(!openSearchModal)
    }

    const allPathLinks = [{ title: "Movies", path: "/movie", icon: <MdLocalMovies className=" w-7 h-7" /> }, { title: "TV Shows", path: "/tv", icon: <CgTv className="w-7 h-7" /> }, { title: "Genres", path: "/genres", icon: <PiFilmSlateThin className=" w-7 h-7" /> }]
    return (
        <div className={`${drawerOpen ? "rightSlider" : "downSlider"} relative z-50`}>
            {
                !drawerOpen && <IoMenuSharp onClick={toggleDrawer} className="absolute left-7 top-1 h-7 w-7 cursor-pointer z-50" />
            }

            {drawerOpen && <div className={`${drawerOpen ? "rightSlider" : "fade-in"} fixed h-screen w-[250px] bg-[#000000ed] space-y-5 pl-7 pt-14`}>
                <Link exact to="/" className={style.logo}>
                    <img src={logo} alt="search" width={80} height={80} />
                </Link>
                {allPathLinks.map(item => <SinglePath key={item.title} link={item} />)}
                <p className="hover:text-yellow-500 duration-300 flex items-center space-x-3 text-yellow-600">
                    <BsFillBookmarkPlusFill className="w-7 h-7" />
                    <span>Watchlist</span>
                </p>
                <p className={`lg:${style.activeLink} flex items-center space-x-3`}> <FiUser className="w-7 h-7" /> <span>
                    Sign in</span>
                </p>

                <p className={`${style.SearchBtn} flex items-center space-x-3 cursor-pointer`} onClick={handleSearchBtn}><IoSearchSharp className="w-7 h-7" /><span className="text-lg">Search</span></p>

                <SearchModal handleSearchBtn={handleSearchBtn} openSearchModal={openSearchModal} />
                {drawerOpen && <IoClose onClick={toggleDrawer} className="absolute right-3 -top-3 h-7 w-7 cursor-pointer z-50" />}
            </div>}
        </div>
    );
}

export default SmallNavbar;
