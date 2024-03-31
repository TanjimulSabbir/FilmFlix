import { useLocation, useParams } from "react-router-dom"
import useGetData from "../../components/Tools/useGetData"
import { useGetDiscoverMoviesQuery } from "../../Redux/Features/Api/movieApi"

export default function Movies() {
    const pathId = useParams().genreId
    const movies = useGetDiscoverMoviesQuery({ type: "movie", path: "with_genres=28,12&page=2" });
    console.log("movies", movies)
    return (
        <div>

        </div>
    )
}
