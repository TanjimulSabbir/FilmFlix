import { useSelector } from "react-redux";
import { useGetDiscoverMoviesQuery } from "../../../Redux/Features/Api/movieApi";

function Movies() {
    const queryKeyword = useSelector(state => state.keywords.items);
    const { data: movies, isLoading, isError } = useGetDiscoverMoviesQuery({ ...queryKeyword });
    console.log(movies, "from movies container")
    return (
        <div>
            This is movies container
        </div>
    )
}

export default Movies;