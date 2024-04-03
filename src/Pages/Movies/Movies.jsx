import { useLocation, useParams } from "react-router-dom"
import useGetData from "../../components/Tools/useGetData"
import { useGetDiscoverMoviesQuery } from "../../Redux/Features/Api/movieApi"
import Loading from "../../components/accessories/Loading";
import MovieItem from "../../components/Home/Banner02/MovieItem";

export default function Movies() {
    const pathId = useParams().genreId
    const { data: movies, isLoading, isError } = useGetDiscoverMoviesQuery({ type: "movie", path: "with_genres=28,12" });
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <p>Error Occured</p>

    if (!isLoading && !isError && movies?.results.length > 0) {
        content = movies.results.map(movie => <MovieItem key={movie.id} movie={movie} />)
    }

    console.log(movies)

    return (
        <div className="p-5 flex-1">
            <h1 className="mb-3 text-xl sm:text-3xl md:text-4xl">Discover the Ultimate Movie Experience</h1>
            <p className="mb-11 text-gray-500">Elevate your movie nights with ease! Ever found yourself settling down, only to struggle finding a good movie? It's a common dilemma. But fret not! We've got you covered with a selection of top-notch films, right at your fingertips.</p>
            <div className="flex-1 grid grid-col-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 items-center sm:gap-x-1 sm:gap-y-5">
                {content}
            </div>
        </div>
    )
}
