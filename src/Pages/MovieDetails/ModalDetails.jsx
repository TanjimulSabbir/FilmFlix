import { PiDotBold, PiPlayCircleFill } from 'react-icons/pi';
import { TextRuntime, getReleaseDate } from '../../components/Tools/Others';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { scrollToTop } from '../../components/Tools/ScrollTop';
import { useState } from 'react';
import Videos from './Videos';
import "../../style/animation.css"

export default function ModalDetails({ movie, handleCloseModal }) {
    const [openTrailer, setOpenTrailer] = useState(false);

    const { id, original_title, original_name, release_date, overview, genres, runtime, poster_path, backdrop_path, vote_average, tagline, spoken_languages, status } = movie || {};

    return (
        <div className="topSlider w-full md:w-2/3 fixed mx-auto inset-0 flex items-center justify-center z-[60]">
            <div className='flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 justify-center shadow-2xl rounded-2xl bg-[#2e2e2e]'>
                <div className='w-full'>
                    {!openTrailer ? <img className='leftSlider h-full rounded-lg' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={original_title || original_name} /> : <Videos id={id} howMuch={"1"} title={original_title || original_name} />}

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
                            <span >{status}</span>
                        </p>
                        <p className='fade-in flex items-center'>
                            <span className='w-1/3 '>Languages</span>
                            <p className='flex items-center'>{spoken_languages?.map((item, index) => (
                                <>
                                    {index > 0 && <PiDotBold />}
                                    <span>{item.name}</span>
                                </>
                            ))}
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
                    <MdClose className='leftSlider absolute top-5 right-5 tex-2xl cursor-pointer transition-all duration-500 delay-300 hover:scale-150' onClick={handleCloseModal} />
                </div>
            </div>
        </div>
    );
}
