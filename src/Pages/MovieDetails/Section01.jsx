import { IoIosStar } from "react-icons/io";
import { TextRuntime, getYear } from "../../components/Tools/Others";
import Videos from "./Videos";
import style from "../../style/movieDetails.module.css";
import VoteCount from "../../components/accessories/VoteCount";
import Popularity from "../../components/accessories/Popularity";
import { useSelector } from "react-redux";
import "../../style/animation.css";

function Section01() {
    const movie = useSelector(state => state.movieData.clickedMovieDetails)
    const { id, genres, original_title, popularity, poster_path, release_date, runtime, spoken_languages, vote_average, vote_count
    } = movie || {};

    return (
        <div className='topSliderSlow mb-10'>
            <div className="mb-4 flex items-center justify-between">
                <div className="topSlider">
                    <h2 className="text-4xl inline-block">{original_title}</h2>
                    <p className="flex items-center space-x-2">
                        <span>{getYear(release_date)}</span>
                        <span className={`${style.dot}`}></span>
                        <span>{spoken_languages[0]?.name}</span>
                        <span className={`${style.dot}`}></span>
                        <span>{TextRuntime(runtime)}</span>
                    </p>
                </div>

                <div className="topSlider flex space-x-7 justify-center">
                    <div>
                        <p>IMDb RATING</p>
                        <p>
                            <span className="fade-in-slow flex items-center space-x-1">
                                <IoIosStar className="text-yellow-500" />
                                <span>
                                    <span className="font-bold"> {vote_average?.toFixed(1)}</span>
                                    <span className="text-xs"> /10</span>
                                </span>
                            </span>
                        </p>
                    </div>

                    <div>
                        <p className="fade-in-slow uppercase">Total Vote</p>
                        <VoteCount vote_count={vote_count} />
                    </div>
                    <Popularity popularity={popularity} />
                </div>
            </div>
            <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-3">
                <img className="leftSliderSlow w-1/3" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} srcSet="" />

                <div className="fade-in-slow w-full min-h-fit">
                    <Videos id={id} howMuch={"1"} title={original_title} />
                </div>
            </div>

            <div className="fade-in-slow space-x-5 mt-5">
                {genres?.map(item => <button key={item.id} className="border border-gray-100 px-4 py-1 rounded-2xl">{item?.name}</button>)}
            </div>
        </div>
    )
}

export default Section01;