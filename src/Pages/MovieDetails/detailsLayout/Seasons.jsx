import { useSelector } from "react-redux"
import LastEpisod from "./LastEpisod";
export default function Episods() {
    const movie = useSelector(state => state.movieData.clickedMovieDetails)
    const { id, seasons, last_episode_to_air } = movie || {};

    return (
        <div className="">
            <h1 className="mb-7 font-bold bitter">Current Episod</h1>
            <LastEpisod last_episode_to_air={last_episode_to_air} />
        </div>
    )
}
