import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./movieDetails.module.css";

export default function Section03() {
    const crewsData = useSelector(state => state.movieData?.castData[0]?.crew);

    const getCrewInfo = (workType) => {
        if (!crewsData || crewsData.length === 0) return null;

        return crewsData
            .filter(crew => crew.known_for_department === workType)
            .map((crew, index) => (
                <p key={crew.credit_id} className="space-x-2">
                    {index !== 0 && <span className={`${style.dot}`}></span>}
                    <Link to={`/creadits/${crew.credit_id}`}>
                        <span className="text-blue-700">{crew.original_name}</span>
                    </Link>
                </p>
            ));
    }

    return (
        <div className="container mx-auto pb-7">
            <div className="flex items-center space-x-5 py-4 border-y border-gray-600">
                <span className="text-lg font-bold">Director</span>
                <p className="flex items-center space-x-2">{getCrewInfo("Directing")}</p>
            </div>
            <div className="flex items-center space-x-5 py-4 border-b border-gray-600">
                <span className="text-lg font-bold">Production</span>
                <p className="flex items-center space-x-2">{getCrewInfo("Production")}</p>
            </div>
            <div className="flex items-center space-x-5 py-4 border-b border-gray-600">
                <span className="text-lg font-bold">Stars</span>
                <p className="flex items-center space-x-2">{getCrewInfo("Acting")}</p>
            </div>
        </div>
    );
}
