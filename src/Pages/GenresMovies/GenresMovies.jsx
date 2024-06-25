import { useLocation, useParams } from "react-router-dom";
import { useGetDiscoverMoviesQuery } from "../../Redux/Features/Api/movieApi";
import LoadingInline from "../../components/accessories/InlineLoading";
import GenreMovie from "./GenreMovie";

export default function GenresMovies() {
    const urlPath = useLocation().pathname;
    const genreId = useParams().genreId;
    const { data: genresData, isLoading, isError, } = useGetDiscoverMoviesQuery({ type: "movie", path: `&with_genres=${genreId}` });

    let content;
    if (isLoading) content = <LoadingInline />
    if (!isLoading && !isError && genresData?.results.length > 0) {
        content = genresData?.results.map(movie => <GenreMovie key={movie.id} movie={movie} type="movie" />)
    }

    return (
        <div className="container mx-auto space-y-10">
            {content}
        </div>
    )
}
