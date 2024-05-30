import { useSelector } from "react-redux";
import { useGetDiscoverMoviesQuery } from "../../../Redux/Features/Api/movieApi";
import Loading from "../../accessories/Loading";
import MovieItem from "./MovieItem";
import Slider from "react-slick";
import { treandingSliderSettings } from "../../Tools/SliderSettings";
import Error from "../../accessories/Error";
import "../../../style/animation.css"
import NotFoundError from "../../accessories/NotFoundError";

function Movies({ defaultValue, isSlider }) {
    const queryStateKeyword = useSelector(state => state.movieData.items);
    const queryKeyword = queryStateKeyword.length > 0 ? queryStateKeyword[0] : defaultValue
    const { data: movies, isLoading, isError, } = useGetDiscoverMoviesQuery({ type: "movie", path: `sort_by=${queryKeyword}` });

    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <NotFoundError message="Movies" />;

    if (!isLoading && !isError && movies?.results?.length > 0) {
        content = movies.results.map(movie => <MovieItem key={movie.id} movie={movie} isSlider={isSlider} type="movie" />)
    }
   
    return (
        !isSlider ? <div className="leftSlider grid grid-cols-5 gap-y-10 items-center justify-center">
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