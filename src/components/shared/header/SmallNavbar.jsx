import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { IoClose, IoMenuSharp, IoSearchSharp } from "react-icons/io5";

import style from "../../../style/navbar.module.css";
import "../../../style/animation.css"

import { MdLocalMovies } from "react-icons/md";
import { CgTv } from "react-icons/cg";
import { PiFilmSlateThin } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

import SinglePath from "./SinglePath";
import SearchModal from "./SearchModal";
import logo from "../../../assets/Logo/logo.png"


function SmallNavbar() {
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const movies = useSelector(state => state.watchListMovies.watchListMovies)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleSearchBtn = () => {
        setOpenSearchModal(!openSearchModal)
        toggleDrawer()
    }
    const hoverEffect = "transition-colors duration-500 hover:text-green-600"

    const allPathLinks = [{ title: "Movies", path: "/movie", icon: <MdLocalMovies className=" w-7 h-7" /> }, { title: "TV Shows", path: "/tv", icon: <CgTv className="w-7 h-7" /> }, { title: "Genres", path: "/genres", icon: <PiFilmSlateThin className="w-7 h-7" /> }]
    return (
        <div className={`lg:hidden sticky top-0 bg-black z-[999] ${drawerOpen ? "rightSlider" : "downSlider"}`}>
            <div className="flex items-center justify-between px-3 h-14">
                {
                    !drawerOpen && <IoMenuSharp onClick={toggleDrawer} className="h-7 w-7 cursor-pointer z-50" />
                }
                {!drawerOpen && <Link exact to="/" className={style.logo}>
                    <img src={logo} alt="search" width={80} height={80} />
                </Link>}
            </div>

            {drawerOpen && <div className={`${drawerOpen ? "rightSlider" : "fade-in"} fixed h-screen w-[250px] space-y-5 pl-7 pt-11 bg-black`}>
                <Link exact to="/" className={style.logo}>
                    <img src={logo} alt="search" width={80} height={80} />
                </Link>
                {allPathLinks.map(item => <SinglePath toggleDrawer={toggleDrawer} key={item.title} link={item} hoverEffect={hoverEffect} sm="sm" />)}
                <p onClick={toggleDrawer} className={`text-yellow-600 transition-colors duration-500 hover:text-yellow-500 flex items-center space-x-3 cursor-pointer`}>
                    <BsFillBookmarkPlusFill className="w-7 h-7" />
                    <span>Watchlist ({movies?.length || 0})</span>
                </p>
                <p onClick={toggleDrawer} className={`${hoverEffect} flex items-center space-x-3 cursor-pointer `}> <FiUser className="w-7 h-7" /> <span>
                    Sign in</span>
                </p>

                <p onClick={handleSearchBtn} className={`${hoverEffect} ${style.SearchBtn} flex items-center space-x-3 cursor-pointer`} ><IoSearchSharp className="w-7 h-7" /><span className="text-lg -mt-1">Search</span></p>

                <SearchModal handleSearchBtn={handleSearchBtn} openSearchModal={openSearchModal} />
                {drawerOpen && <IoClose onClick={toggleDrawer} className="absolute right-3 -top-3 h-7 w-7 cursor-pointer z-40" />}
            </div>}
        </div >
    );
}

export default SmallNavbar;
