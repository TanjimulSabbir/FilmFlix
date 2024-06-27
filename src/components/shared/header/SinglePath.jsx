/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";
import style from "../../../style/navbar.module.css"

export default function SinglePath({ link, hoverEffect }) {
    const path = useLocation().pathname;
    if (link.title === "Genres") {
        return <div className="btnContainer">
            <button className={`${hoverEffect} lg:${style.activeLink} lg:${path.includes(link.path) ? style.active : ''} flex items-center space-x-3`}>
                {link.icon}
                <span>
                    Genres
                </span>
            </button>
            <div className="absoluteContainer">
                <Genres />
            </div>
        </div>
    }
    return (
        <Link
            to={link.path}
            className={`${hoverEffect} lg:${style.activeLink} lg:${path.includes(link.path) ? style.active : ''} flex flex-col lg:flex-row`}
        >

            <p className="flex items-center">
                {link.icon}
                <span className="ml-3"> {link.title}</span>
            </p>

        </Link>
    )
}
