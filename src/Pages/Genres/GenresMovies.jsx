import { useParams } from "react-router-dom";

import { useGetDiscoverMoviesQuery } from "../../Redux/Features/Api/movieApi";
import GenreMovie from "./GenreMovie";
import TitleText from "../../components/accessories/TextTitle";
import NotFoundError from "../../components/accessories/NotFoundError";
import Loading from "../../components/accessories/Loading";


export default function GenresMovies() {
    const { genreId, genType } = useParams();
    const { data: genresData, isLoading, isError, } = useGetDiscoverMoviesQuery({ type: "movie", path: `&with_genres=${genreId}` });

    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <NotFoundError message="movies" />
    if (!isLoading && !isError && genresData?.results.length > 0) {
        content = genresData?.results.map(movie => <GenreMovie key={movie.id} movie={movie} type="movie" />)
    }

    return (
        <div className="container mx-auto space-y-10">
            <TitleText text={genType} />
            {content}
        </div>
    )
}
