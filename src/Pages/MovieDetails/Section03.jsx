import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./movieDetails.module.css";

export default function Section03() {
    const crewsData = useSelector(state => state.movieData?.castData[0]?.crew)

    const getCrewInfo = (workType) => {
        if (crewsData.length > 0) {
            crewsData.map(crew => {
                if (crew.known_for_department === workType) {
                    return (
                        <div key={crew.credit_id} className="after:content-['_↗']">
                            <Link to={`/creadits/${crew.credit_id}`}>
                                <span>{crew.original_name}</span>
                                {/* <span className={`${style.dot}`}></span> */}
                            </Link>
                        </div>
                    )
                }
            })
        }
    }

    return (
        <div className="divide-y">
            <div className="flex items-center">
                <span>Director</span>
                <p className="flex items-center space-x-2">{getCrewInfo("Directing")}</p>
            </div>
        </div>
    )
}
