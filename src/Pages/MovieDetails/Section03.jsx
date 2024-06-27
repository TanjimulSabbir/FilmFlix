import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { PiDotBold } from "react-icons/pi";

export default function Section03() {
    const crewsData = useSelector(state => state.movieData?.castData[0]?.crew);

    const getCrewInfo = (workType) => {
        if (!crewsData || crewsData.length === 0) return null;

        return crewsData
            ?.filter(crew => crew.known_for_department === workType)
            .map((crew, index) => (
                <p key={crew.credit_id} className="flex items-center flex-wrap">
                    {index !== 0 && <PiDotBold />}
                    <Link to={`/creadits/${crew.credit_id}`}>
                        <span className=" text-blue-700">{crew.original_name}</span>
                    </Link>
                </p>
            ));
    }

    return (
        <div className="w-full pb-7 text-sm">
            <div className="flex space-x-5 py-4 border-y border-gray-600">
                <span className="text-lg font-bold">Director</span>
                <p className="flex flex-wrap items-center">{getCrewInfo("Directing")}</p>
            </div>
            <div className="flex space-x-5 py-4 border-b border-gray-600">
                <span className="text-lg font-bold">Production</span>
                <p className="flex flex-wrap items-center">{getCrewInfo("Production")}</p>
            </div>
            <div className="flex space-x-5 py-4 border-b border-gray-600">
                <span className="text-lg font-bold">Stars</span>
                <p className="flex flex-wrap items-center gap-2">{getCrewInfo("Acting")}</p>
            </div>
        </div>
    );
}
