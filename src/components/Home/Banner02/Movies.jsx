import { useSelector } from "react-redux";
import { useGetDiscoverMoviesQuery } from "../../../Redux/Features/Api/movieApi";
import Loading from "../../accessories/Loading";
import Movie from "./Movie";

function Movies({ defaultValue }) {
    const queryStateKeyword = useSelector(state => state.keywords.items);
    const queryKeyword = queryStateKeyword.length > 0 ? queryStateKeyword[0] : defaultValue[0]
    const { data: movies, isLoading, isError } = useGetDiscoverMoviesQuery({ ...queryKeyword });

    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = "Error occured";

    if (!isLoading && !isError && movies.results.length > 0) {
        content = movies.results.map(movie => <Movie key={movie.id} movie={movie} />)
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Movies;