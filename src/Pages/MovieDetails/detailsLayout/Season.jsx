/* eslint-disable react/prop-types */
import { FiStar } from "react-icons/fi";
import { getYear } from "../../../components/Tools/Others";

export default function Season({ season }) {
    const { air_date, episode_count, id, name, overview, poster_path, season_number, vote_average } = season;
    return (
        <div className="flex items-center">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={name} srcSet="" />
            </div>
            <div>
                <h1>{name} ({season_number})</h1>
                <div>
                    <p className="py-1 px-2 rounded-2xl bg-sky-600">
                        <FiStar />
                        <span>{vote_average * 10}% </span>
                    </p>
                    <p>{getYear(air_date)}</p>
                    <p>{episode_count}</p>
                </div>
                <p>{overview}</p>
            </div>
        </div>
    )
}
