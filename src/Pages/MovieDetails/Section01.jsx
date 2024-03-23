import { IoIosStar } from "react-icons/io";
import { TextRuntime, getYear } from "../../components/Tools/Others";
import useGetData from "../../components/Tools/useGetData";
import Videos from "./Videos";
import style from "./movieDetails.module.css";
import VoteCount from "../../components/accessories/VoteCount";
import Popularity from "../../components/accessories/Popularity";

function Section01({ movie }) {
    const { id, adult, backdrop_path, belongs_to_collection, budget, genres, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
    } = movie;
    console.log({ vote_average, vote_count, popularity });
    
    return (
        <div className='container mx-auto mb-10 pt-24'>
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h2 className="text-4xl inline-block">{original_title}</h2>
                    <p className="flex items-center space-x-2">
                        <span>{getYear(release_date)}</span>
                        <span className={`${style.dot}`}></span>
                        <span>{spoken_languages[0].english_name}</span>
                        <span className={`${style.dot}`}></span>
                        <span>{TextRuntime(runtime)}</span>
                    </p>
                </div>

                <div className="flex space-x-7 justify-center">
                    <div>
                        <p>IMDb RATING</p>
                        <p>
                            <span className="flex items-center space-x-1">
                                <IoIosStar className="text-yellow-500" />
                                <span>
                                    <span className="font-bold"> {vote_average.toFixed(1)}</span>
                                    <span className="text-xs"> /10</span>
                                </span>
                            </span>
                        </p>
                    </div>

                    <div>
                        <p className="uppercase">Total Vote</p>
                        <VoteCount vote_count={vote_count} />
                    </div>
                    <Popularity popularity={popularity} />
                </div>
            </div>
            <div className="flex space-x-3">
                <div className="w-1/3 h-full">
                    <img className="" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} srcSet="" />
                </div>
                <Videos id={id} howMuch={"1"} />
            </div>
            <div className="space-x-5 mt-5">
                {genres.map(item => <button key={item.id} className="border border-gray-100 px-4 py-1 rounded-2xl">{item.name}</button>)}
            </div>
        </div>
    )
}

export default Section01;