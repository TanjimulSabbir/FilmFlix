import { Link } from "react-router-dom";

export default function Links({ items, hashPath }) {
    // const hashPath = window.location.hash;
    console.log(hashPath)
    const { title, pathName } = items;

    return (
        <div className={`${pathName === hashPath || (hashPath === "" && pathName === "#episods") ? "border-b-4 pb-1 border-orange-700 font-bold" : ""}`}>
            <Link to={pathName}>{title}</Link>
        </div>
    );
}
