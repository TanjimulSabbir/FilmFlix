import { Link } from "react-router-dom"


export default function Links({ items, hashPath }) {
    const { title, pathName } = items


    return (
        <div className={`${pathName === hashPath ? "border-b-4 pb-1 border-orange-700 font-bold" : ""}`}>
            <Link to={pathName}>{title}</Link>
        </div>
    )
}
