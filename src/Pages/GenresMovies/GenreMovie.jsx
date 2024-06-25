import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { PiDotBold, PiPlayCircleFill } from 'react-icons/pi';
import { IoIosStar } from 'react-icons/io';

import "../../style/animation.css"
import { scrollToTop } from '../../components/Tools/ScrollTop';
import { TextRuntime, getReleaseDate } from '../../components/Tools/Others';
import Videos from '../MovieDetails/Videos';

export default function GenreMovie({ movie }) {
    const [openTrailer, setOpenTrailer] = useState(false);
   
    const { id, original_title, original_name, release_date, overview, genres, runtime, poster_path, backdrop_path, vote_average, tagline, spoken_languages, original_language, status, first_air_date } = movie || {};


    const isReleaseDatePassed = (releaseDate) => {
        return moment().isAfter(releaseDate, 'YYYY-MM-DD');
    };
    return (
        <div className="topSlider">
            <div className='flex flex-col space-y-10 md:flex-row-reverse md:space-y-0 md:space-x-10 justify-center shadow-2xl rounded-xl bg-[#101010]'>
                <div className='w-full'>
                    {!openTrailer ? <img className='leftSlider h-full rounded-lg' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={original_title || original_name} /> : <Videos id={id} howMuch={"1"} title={original_title || original_name} type="movie" />}

                </div>
                <div className='relative w-full px-2 py-7'>
                    <p className="text-3xl font-extrabold">{original_title || original_name}</p>
                    <p className='my-3 flex items-center'>{genres?.map((item, index) => (
                        <>
                            {index > 0 && <PiDotBold />}
                            <span>{item.name}</span>
                        </>
                    ))}
                    </p>
                    <p className="my-5 text-sm">{overview}</p>

                    <div className='topSlider mb-5'>
                        <p className="flex items-center">
                            <span className='w-1/3 '>Status</span>
                            <span >{status || isReleaseDatePassed(release_date)?"Released":"Upcoming"}</span>
                        </p>
                        <p className='fade-in flex items-center'>
                            <span className='w-1/3 '>Languages</span>
                            <p className='flex items-center'>{spoken_languages?.map((item, index) => (
                                <>
                                    {index > 0 && <PiDotBold />}
                                    <span>{item.name}</span>
                                </>
                            )) || original_language}
                            </p>
                        </p>

                        <p className="flex items-center">
                            <span className='w-1/3 '>Release on</span>
                            <span >{getReleaseDate(release_date)}</span>
                        </p>
                        <p className="flex items-center">
                            <span className='w-1/3 '>Runtime</span>
                            <span>{TextRuntime(runtime)}</span>
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
                        <p className='text-xs text-green-600 mt-5'>{tagline}</p>
                    </div>
                    <div className='w-full flex flex-wrap items-center gap-5'>
                        <button onClick={() => setOpenTrailer(!openTrailer)}
                            className='leftSlider min-w-fit flex items-center space-x-1 py-2 px-3 md:px-6 border border-green-500 rounded-xl bg-green-500 transition-all duration-500 hover:bg-green-600 justify-center'

                        >
                            <PiPlayCircleFill />
                            <span> {openTrailer ? "Quit Trailer" : "Watch Trailer"}</span>
                        </button>
                        <Link to={`/movie/${id}`} onClick={() => { handleCloseModal("showDetails"); scrollToTop() }} className='fade-in-slow min-w-fit flex items-center space-x-1 py-2 px-5 md:px-9 rounded-xl border border-green-500 text-green-600 cursor-pointer transition-all duration-500 ease-linear hover:bg-green-600 hover:text-white justify-center'>
                            {/* <PiPlayCircleFill/> */}
                            <span>Show details</span>
                        </Link>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
