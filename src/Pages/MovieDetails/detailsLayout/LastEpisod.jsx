import { IoIosStar } from "react-icons/io";
import { TextRuntime, getReleaseDate, getYear } from "../../../components/Tools/Others";
import { BsDot } from "react-icons/bs";

/* eslint-disable react/prop-types */
export default function LastEpisod({ last_episode_to_air }) {
    const { air_date, episode_number, episode_type, name, overview, runtime, season_number, still_path, vote_average, vote_count } = last_episode_to_air;

    return (
        <div className="rightSlider">
            <h1 className="text-3xl mb-7 font-extrabold">Last Episod <span className="text-gray-400 text-sm flex items-center">(Episod: {episode_number}  <BsDot /> Season: {season_number})</span></h1>
            <div className='w-full h-full flex flex-col md:flex-row gap-10 '>
                <div className='w-1/2'>
                    <img className='h-full rounded-lg' src={`https://image.tmdb.org/t/p/original${still_path}`} alt={name} />

                </div>
                <div className='downSlider relative w-full px-2'>
                    <div>
                        <p className="text-3xl font-extrabold">{name}</p>
                        <p className="flex items-center text-green-600 text-lg">
                            <p>
                                Season: <span className="font-bold ">{season_number}</span>
                            </p>
                            <BsDot />
                            <p>
                                <span >Episodes:</span>
                                <span className="font-bold"> {episode_number}</span>
                            </p>
                        </p>


                        <p className="flex items-center space-x-2">
                            <span>{getYear(air_date)}</span>
                            <BsDot />
                            <span>{vote_count}</span>
                            <BsDot />
                            <span>{TextRuntime(runtime)}</span>
                        </p>

                    </div>

                    <p className="my-5 text-sm">{overview}</p>

                    <div className='leftSlider mb-5'>
                        <p className="flex items-center">
                            <span className='w-1/3 '>Status</span>
                            <span >{episode_type}</span>
                        </p>

                        <p className="flex items-center">
                            <span className='w-1/3 '>Release on</span>
                            <span >{getReleaseDate(air_date)}</span>
                        </p>
                        <p className='flex items-center'>
                            <span className='w-1/3'>Rating</span>
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
        </div>
    )
}
