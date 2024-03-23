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

    if (certifationData) certification = certifationData?.results[0].release_dates[0]?.certification;

    console.log(certifationData, "certifationData")

    return (
        <div className='container mx-auto mb-10 mt-20'>
            <div>
                <h1>{original_title}</h1>
                <p className="flex items-center space-x-2">
                    <span>{getYear(release_date)}</span>
                    <span className={`${style.dot}`}></span>
                    <span >{certification}</span>
                    <span className={`${style.dot}`}></span>
                    <span>{TextRuntime(runtime)}</span>
                </p>


            </div>
            <div className="flex w-full h-full items-center justify-center space-x-3">
                <div>
                    <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} srcSet="" />
                </div>
                <Videos id={id} howMuch="1" />
                <div>
                    {/* <p>{images?.length}</p>
                    <p>{videos?.length}</p> */}
                </div>
            </div>

        </div>
    )
}

export default Section01;