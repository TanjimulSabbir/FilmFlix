import { Link, useLocation } from "react-router-dom"


export default function Links({ path }) {
    const { title, pathName } = path
    const isPathMatched = useLocation().pathname.split("/").includes(pathName)

    return (
        <div className={`${"border-b-4 pb-1 border-orange-700 font-bold" }`}>
            <Link to={pathName}>{title}</Link>
        </div>
    )
}
