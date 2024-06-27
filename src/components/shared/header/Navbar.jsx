import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

import "../../../style/animation.css";
import style from "../../../style/navbar.module.css";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

import logo from "../../../assets/Logo/logo.png";
import SinglePath from "./SinglePath";
import useScrollPosition from "../../accessories/useScrollPosition";
import SearchModal from "./SearchModal";
import SmallNavbar from "./SmallNavbar";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";



function Navbar() {
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const movies = useSelector(state => state.watchListMovies.watchListMovies)

    const scrollY = useScrollPosition();
    const CurrentPath = useLocation().pathname;

    const handleSearchBtn = () => {
        setOpenSearchModal(!openSearchModal)
    }

    const allPathLinks = [{ title: "Movies", path: "/movie" }, { title: "TV Shows", path: "/tv" }, { title: "Genres", path: "/genres" }]
    return (
        <>
            <div className={`h-20 w-full z-40 lg:flex items-center justify-center ${CurrentPath === "/" ? "fixed top-0" : `sticky top-0`} ${scrollY ? `${style.positionedBg}` : `${style.positionedBgTranspa}`} hidden`}>

                <div className={`w-full z-50`}>
                    <div className="flex items-center justify-between container mx-auto">
                        <div className="flex items-center space-x-10">
                            <Link exact to="/" className={style.logo}>
                                <img src={logo} alt="search" width={80} height={80} />
                            </Link>

                            {allPathLinks.map(item => <SinglePath key={item.title} link={item} />)}
                        </div>
                        <div className="flex items-center space-x-10">

                            {/* Auth buttons */}
                            <button onClick={()=>toast.error("Currently, Watchlist details is not available. We are working for this. Thank you.")} className="rightSlider hover:text-yellow-500 duration-300 flex items-center space-x-1 text-yellow-600">
                                <BsFillBookmarkPlusFill />
                                <span className="relative">
                                    <span>Watchlist</span> <span className="">({movies?.length || 0})</span>
                                </span>
                            </button>
                            <button className={`downSlider ${style.activeLink}`}>Sign in</button>
                            <button className={`leftSlider ${style.SearchBtn}`} onClick={handleSearchBtn}><IoSearchSharp className="text-2xl" /></button>
                        </div>
                    </div>
                </div>
                <SearchModal handleSearchBtn={handleSearchBtn} openSearchModal={openSearchModal} />
            </div>
            <SmallNavbar />
        </>

    );
}

export default Navbar;

