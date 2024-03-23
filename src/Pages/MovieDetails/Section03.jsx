import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./movieDetails.module.css";

export default function Section03() {
    const crewsData = useSelector(state => state.movieData?.castData[0]?.crew)

    const getCrewInfo = (workType) => {
        if (crewsData.length > 0) {
            return crewsData.map(crew=> {
                if (crew.known_for_department === workType) {
                    return (
                        <p key={crew.credit_id} >
                            <Link to={`/creadits/${crew.credit_id}`} className="space-x-2">
                                <span className={`${style.dot}`}></span>
                                <span className="text-blue-700">{crew.original_name}</span>
                            </Link>
                        </p>
                    )
                }
                return null; // Ensure you return something in all cases
            })
        }
        return null; // Ensure you return something in all cases
    }

    return (
        <div className="container divide-y mx-auto">
            <div className="flex items-center space-x-5 text-lg">
                <span className="font-bold">Director</span>
                <p className="flex items-center space-x-2">{getCrewInfo("Directing")}</p>
            </div>
        </div>
    )
}
