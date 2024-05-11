import { IoIosStar } from "react-icons/io";
import { TextRuntime, getReleaseDate } from "../../../components/Tools/Others";

/* eslint-disable react/prop-types */
export default function LastEpisod({ last_episode_to_air }) {
    const { air_date, episode_number, episode_type, id, name, overview, production_code, runtime, season_number, show_id, still_path, vote_average, vote_count } = last_episode_to_air;

    return (
        <div className="">
            <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-center shadow-2xl rounded-2xl '>
                <div className='w-1/2'>
                    <img className=' rounded-lg' src={`https://image.tmdb.org/t/p/original${still_path}`} alt={name} />

                </div>
                <div className='relative w-full px-2 py-7'>
                    <p className="text-3xl font-extrabold">{name}</p>

                    <p className="my-5 text-sm">{overview}</p>

                    <div className='mb-5'>
                        <p className="flex items-center">
                            <span className='w-1/3 '>Status</span>
                            <span >{episode_type}</span>
                        </p>
                        <p className='flex items-center'>
                            <span className='w-1/3 '>Runtime</span>
                            <p className='flex items-center'>{TextRuntime(runtime)}
                            </p>
                        </p>

                        <p className="flex items-center">
                            <span className='w-1/3 '>Release on</span>
                            <span >{getReleaseDate(air_date)}</span>
                        </p>
                        <p className="flex items-center">
                            <span className='w-1/3 '>Episod Number</span>
                            <span>{episode_number}</span>
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
                        <p className='text-xs text-green-600 mt-5'>
                            <span>Season Number</span>
                            <span>{season_number}</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
