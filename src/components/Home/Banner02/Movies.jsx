import { useSelector } from "react-redux";
import { useGetDiscoverMoviesQuery } from "../../../Redux/Features/Api/movieApi";
import Loading from "../../accessories/Loading";
import MovieItem from "./MovieItem";
import Slider from "react-slick";
import { treandingSliderSettings } from "../../Tools/SliderSettings";
import Error from "../../accessories/Error";

function Movies({ defaultValue, isSlider }) {
    const queryStateKeyword = useSelector(state => state.movieData.items);
    const queryKeyword = queryStateKeyword.length > 0 ? queryStateKeyword[0] : defaultValue[0]
    const { data: movies, isLoading, isError, error } = useGetDiscoverMoviesQuery({ ...queryKeyword });

    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <Error error={error} />;

    if (!isLoading && !isError && movies?.results?.length > 0) {
        content = movies.results.map(movie => <MovieItem key={movie.id} movie={movie} isSlider={isSlider} />)
    }
    const renderSlider = !isError && !isLoading && Movies?.results?.length > 0;
    return (
        !isSlider ? <div className="grid grid-cols-5 gap-y-10 items-center justify-center">
            {content}
        </div> :
            <div className={"slider-container"}>
                <Slider {...treandingSliderSettings}>
                    {content}
                </Slider>
            </div>
    )
}

export default Movies;