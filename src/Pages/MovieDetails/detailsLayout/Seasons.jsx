import { useState } from "react";
import { useSelector } from "react-redux";
import LastEpisod from "./LastEpisod";
import Season from "./Season";

import "../../../style/animation.css"
export default function Episods() {
    const movie = useSelector(state => state.movieData.clickedMovieDetails)
    const { id, seasons, last_episode_to_air } = movie || {};

    const [isOpen, setIsOpen] = useState(false);

    const toggleSeasons = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fade-in">
            <LastEpisod last_episode_to_air={last_episode_to_air} />

            <div className="mt-11">
                <button open={isOpen} onClick={toggleSeasons} className="topSlider py-2 px-5 bg-green-600 border border-green-500 rounded-lg cursor-pointer">View all seasons</button>

                {isOpen && <Season isOpen={isOpen} />}
            </div>
        </div>
    )
}
