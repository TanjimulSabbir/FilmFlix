/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";
import style from "../../../style/navbar.module.css"
import toast from "react-hot-toast";

export default function SinglePath({ link }) {
    const path = useLocation().pathname;
    if (link.title === "Genres") {
        return <div className="btnContainer ">
            <button className={`${style.activeLink}`}>Genres</button>
            <div className="absoluteContainer">
                <Genres />
            </div>
        </div>
    }
    toast(`${path}${link.path.split("s")[0]}`)
    return (
        <Link to={link.path} className={path.includes(link.path.split("s")[0]) && `${style.active}`}>{link.title}</Link>
    )
}
