import { TextRuntime } from '../../components/Tools/Others';
import { CiBookmark } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';
import style from "../../style/bannerText.module.css";

function Section01({ movie }) {
    const { adult, backdrop_path, belongs_to_collection, budget, genres, homepage, id, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
    } = movie;

    return (
        <div className='relative'>
            <div className='absolute inset-0 flex items-center bg-black'>
                <div className='container mx-auto'>
                    <h2 className={`${style.movieTitle} text-3xl mb-4`}>{original_title}</h2>

                    {/* title details */}
                    <div className="flex items-center justify-start space-x-2 mb-5">
                        {/* <p className="">{releaseDate} |</p> */}
                        <p className="bg-green-600 p-1 rounded">15+ </p>
                        <p>| {TextRuntime(runtime)} </p>
                        <p>| {genres[0].name}</p>
                    </div>
                    <div className="space-x-4 flex">

                        <button className={`${style.btn} ${style.brdr} flex items-center space-x-1`}>
                            <CiBookmark />
                            <span>Continue watching</span>
                        </button>

                        <button className={`${style.btn} flex items-center space-x-1 bg-green-600 border-none`}>
                            <GoPlus />
                            <span>Add Watchlist</span>
                        </button>
                    </div>
                </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={original_title} srcSet="" />
        </div>
    )
}

export default Section01;