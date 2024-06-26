import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

import { BsFillBookmarkPlusFill } from "react-icons/bs";

import style from "../../../style/navbar.module.css";
import logo from "../../../assets/Logo/logo.png";
import "../../../style/animation.css"
import SinglePath from "./SinglePath";
import useScrollPosition from "../../accessories/useScrollPosition";
import SearchModal from "./SearchModal";
import { IoSearchSharp } from "react-icons/io5";
import "../../../style/animation.css"



function Navbar() {
    const [openSearchModal, setOpenSearchModal] = useState(false);

    const scrollY = useScrollPosition();
    const CurrentPath = useLocation().pathname;

    const handleSearchBtn = () => {
        setOpenSearchModal(!openSearchModal)
    }

    const allPathLinks = [{ title: "Movies", path: "/movie" }, { title: "TV Shows", path: "/tv" }, { title: "Genres", path: "/genres" }]
    return (
        <div className={`h-20 w-full z-40 flex items-center justify-center ${CurrentPath === "/" ? "fixed top-0" : `sticky top-0`} ${scrollY ? `${style.positionedBg}` : `${style.positionedBgTranspa}`}`}>

            <div className={`w-full z-50`}
            >
                <div className="flex items-center justify-between container mx-auto">
                    <div className="flex items-center space-x-10">
                        <Link exact to="/" className={style.logo}>
                            <img src={logo} alt="search" width={80} height={80} />
                        </Link>

                        {allPathLinks.map(item => <SinglePath key={item.title} link={item} />)}
                    </div>
                    <div className="flex items-center space-x-10">

                        {/* Auth buttons */}
                        <button className="rightSlider hover:text-yellow-500 duration-300 flex items-center space-x-1 text-yellow-600">
                            <BsFillBookmarkPlusFill />
                            <span>Watchlist</span>
                        </button>
                        <button className={`downSlider ${style.activeLink}`}>Sign in</button>
                        <button className={`leftSlider ${style.SearchBtn}`} onClick={handleSearchBtn}><IoSearchSharp className="text-2xl" /></button>
                    </div>
                </div>
            </div>
            <SearchModal handleSearchBtn={handleSearchBtn} openSearchModal={openSearchModal} />
        </div>
    );
}

export default Navbar;

