import { useSelector } from "react-redux";

import { IoIosStar } from "react-icons/io";
import { PiDotBold } from "react-icons/pi";

import "../../style/animation.css";

import { TextRuntime, getYear } from "../../components/Tools/Others";
import Videos from "./Videos";
import VoteCount from "../../components/accessories/VoteCount";
import Popularity from "../../components/accessories/Popularity";




function Section01() {
    const movie = useSelector(state => state.movieData.clickedMovieDetails)
    const { id, genres, original_title, popularity, poster_path, release_date, runtime, spoken_languages, vote_average, vote_count
    } = movie || {};

    return (
        <div className='topSliderSlow mb-10 mt-5 lg:mt-0'>
            <div className="mb-4 lg:flex items-center justify-between">
                <div className="topSlider">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl inline-block">{original_title}</h2>
                    <p className="text-base flex items-center pt-1 lg:pt-0 text-slate-200">
                        <span>{spoken_languages[0]?.name}</span>
                        <PiDotBold />
                        <span>{getYear(release_date)}</span>
                        <PiDotBold />
                        <span>{TextRuntime(runtime)}</span>
                    </p>
                </div>

                <div className="hidden topSlider lg:flex items-center justify-between lg:space-x-7 lg:justify-center mt-1 md:mt-0">
                    <div>
                        <p className="lg:uppercase text-[#279bf9]">IMDb Rating</p>
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
                        <p className="fade-in-slow lg:uppercase text-[#279bf9]">Total Vote</p>
                        <VoteCount vote_count={vote_count} />
                    </div>
                    <Popularity popularity={popularity} />
                </div>

            </div>
            <div className="lg:flex flex-col lg:flex-row lg:space-x-3">
                <img className="leftSliderSlow hidden lg:block lg:w-1/3" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} srcSet="" />

                <div className="fade-in-slow w-full min-h-fit">
                    <Videos id={id} howMuch={"1"} title={original_title} />
                </div>
            </div>

            <div className="fade-in-slow flex gap-3 flex-wrap mt-5 text-sm md:text-base">
                {genres?.map(item => <button key={item.id} className="border border-gray-100 px-2 lg:px-4 py-1 rounded-2xl">{item?.name}</button>)}
            </div>
        </div>
    )
}

export default Section01;