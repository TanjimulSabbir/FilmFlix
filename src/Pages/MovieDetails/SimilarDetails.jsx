import React from 'react';
import { TextRuntime, getReleaseDate, getYear } from '../../components/Tools/Others'; // Assuming these are your custom utility functions
import { IoIosStar } from 'react-icons/io';

export default function SimilarDetails({ movie }) {
    const { original_title, release_date, overview, genres, runtime, backdrop_path, vote_average, spoken_languages } = movie || {};

    return (
        <div className='relative w-full'>
            {/* title details */}
            <div className="w-full md:w-2/3 fixed mx-auto inset-0 flex items-center justify-center bg-[#000000b6]">
                <div className='w-2/3 shadow-2xl rounded-2xl bg-gray-400 flex space-x-10 justify-center'>
                    <div>
                        <img className='h-full rounded-md' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={original_title} />
                    </div>
                    <div className='p-2'>
                        <p className='my-3'>{genres?.map(item => `${item.map},`)}</p>
                        <p className="text-3xl">{original_title}</p>
                        <p className="my-5 text-sm">{overview}</p>

                        <div className='mb-3'>
                            <p className='flex items-center'>
                                <span className='w-1/2 border border-red-400'>Language</span>
                                <span>{spoken_languages[0]?.name}</span>
                            </p>

                            <p className="flex border">
                                <span className='w-1/2 border border-red-400'>Release on</span>
                                <span >{getReleaseDate(release_date)}</span>
                            </p>
                            <p className="flex items-center border">
                                <span className='w-1/2 border border-red-400'>Runtime</span>
                                <span>{TextRuntime(runtime)}</span>
                            </p>
                            <p className='flex items-center'>
                                <span className='w-1/2 border border-red-400'>Rating</span>
                                <span className="flex items-center space-x-1">
                                    <IoIosStar className="text-yellow-500" />
                                    <span>
                                        <span className="font-bold"> {vote_average?.toFixed(1)}</span>
                                        <span className="text-xs"> /10</span>
                                    </span>
                                </span>
                            </p>
                        </div>
                        <button className='py-2 px-6 border-gray-500 rounded-2xl'>Watch Trailer</button>
                    </div>
                </div>
            </div>
        </div >
    );
}
