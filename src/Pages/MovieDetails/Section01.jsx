import { TextRuntime, getYear } from "../../components/Tools/Others";
import useGetData from "../../components/Tools/useGetData";
import Videos from "./Videos";
import style from "./movieDetails.module.css";

function Section01({ movie }) {
    const { id, adult, backdrop_path, belongs_to_collection, budget, genres, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
    } = movie;
    let certification;
    const certifationData = useGetData({ type: "movie", id, keyword: "release_dates" })
    // const images = useGetData({ type: "movie", id, keyword: "images" });
    // const videos = useGetData({ type: "movie", id, keyword: "videos" });

    if (certifationData) certification = certifationData.results?.length > 0 && certifationData?.results[0]?.release_dates[0]?.certification;
    console.log(genres)
    return (
        <div className='container mx-auto mb-10 pt-24'>
            <div className="mb-4">
                <h2 className="text-4xl inline-block">{original_title}</h2>
                <p className="flex items-center space-x-2">
                    <span>{getYear(release_date)}</span>
                    <span className={`${style.dot}`}></span>
                    <span >{certification}</span>
                    <span className={`${style.dot}`}></span>
                    <span>{TextRuntime(runtime)}</span>
                </p>
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