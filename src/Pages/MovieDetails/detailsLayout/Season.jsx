/* eslint-disable react/prop-types */
import { getReleaseDate } from "../../../components/Tools/Others";
import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import "../../../style/animation.css"

export default function Season({isOpen}) {
    const movie = useSelector(state => state.movieData.clickedMovieDetails);
    const { seasons } = movie || {};

    return (
        <div className={`topSlider space-y-7 mt-7`}>
            {seasons && seasons.map(season => {
                const { air_date, episode_count, id, name, overview, poster_path, season_number, vote_average } = season;
                return (
                    <div key={id} className='flex items-center gap-5 md:gap-10'>
                        <div className=''>
                            <img className='w-48 rounded-xl' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={name} />

                        </div>
                        <div className='px-2 md:w-1/2'>
                            <div>
                                <p className="text-3xl font-extrabold">{name}</p>
                                <p className="flex items-center text-green-600 text-lg">
                                    <p>
                                        Season: <span className="font-bold ">{season_number}</span>
                                    </p>
                                    <BsDot />
                                    <p>
                                        <span >Episodes:</span>
                                        <span className="font-bold"> {episode_count}</span>
                                    </p>
                                </p>
                            </div>
                            <p className="my-5 text-sm text-justify">{overview}</p>
                            <div className='mb-5'>
                                <p className="flex items-center">
                                    <span className='w-1/3 font-bold'>Release on</span>
                                    <span >{getReleaseDate(air_date)}</span>
                                </p>
                                <p className='flex items-center'>
                                    <span className='w-1/3 font-bold'>Rating</span>
                                    <span className="flex items-center space-x-1">
                                        <IoIosStar className="text-yellow-500" />
                                        <span>
                                            <span className="font-bold"> {vote_average?.toFixed(1)}</span>
                                            <span className="text-xs"> /10</span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
