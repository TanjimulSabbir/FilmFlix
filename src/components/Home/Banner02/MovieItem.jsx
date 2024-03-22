import { IoIosStar } from "react-icons/io";
import playBtn from "../../../assets/images/play-btn.gif"

function MovieItem({ movie }) {
    const { original_title, release_date, vote_average, adult, poster_path } = movie;

    return (
        <div className="relative">
            <div className="relative">
                <img className="rounded-md mb-2 px-2" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center text-white opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer">
                    {/* <p>{original_title}</p> */}
                    <img src={playBtn} className="cursor-pointer" alt="" srcSet="" />
                </div>
            </div>
            <div className="flex items-center justify-between px-3">
                <p className="overflow-hidden text-nowrap text-ellipsis text-lg">
                    {original_title}
                </p>
                <span className="mr-2">{release_date.split("-")[0]}</span>
                <p>
                    <span className="flex items-center space-x-1">
                        <IoIosStar className="text-yellow-500" />
                        <span>{vote_average.toFixed(1)}</span>
                    </span>
                </p>
            </div>
            <p className="absolute top-0 left-2 bg-red-600 inline-block px-5 backdrop-brightness-0">{adult ? "Adult" : "PG"}</p>
        </div>
    );
}

export default MovieItem;