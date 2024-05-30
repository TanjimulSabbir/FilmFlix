/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";
import style from "../../../style/navbar.module.css"

export default function SinglePath({ link }) {
    const path = useLocation().pathname.split("/")[1];
    if (link.title === "Genres") {
        return <div className="btnContainer ">
            <button className={`${style.activeLink}`}>Genres</button>
            <div className="absoluteContainer">
                <Genres />
            </div>
        </div>
    }
    return (
        <Link to={link.path} className={(link.path).includes(path) && `${style.active}`}>{link.title}</Link>
    )
}
