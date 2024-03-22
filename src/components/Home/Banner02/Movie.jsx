import { IoIosStar } from "react-icons/io";
function Movie({ movie, isSlider }) {
    const { original_title, release_date, adult, runtime, vote_average, backdrop_path, poster_path } = movie || {};

    return (
        // <div className={`${isSlider && "px-2"}`}>
            <div className={`relative`}>
                <div>
                    <img className="rounded-md mb-2 px-2" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" srcSet="" />
                    <div className="flex items-center justify-between px-1">
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
                </div>
                <p className="absolute top-0 left-2 bg-red-600 inline-block px-5 backdrop-brightness-0">{adult ? "Adult" : "PG"}</p>
            {/* </div> */}
        </div>
    )
}

export default Movie;