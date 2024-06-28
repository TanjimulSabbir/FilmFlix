import { useSelector } from "react-redux";
import Slider from "react-slick";

import "../../../style/animation.css"
import NotFoundError from "../../accessories/NotFoundError";
import LoadingInline from "../../accessories/InlineLoading";

import { useGetDiscoverMoviesQuery } from "../../../Redux/Features/Api/movieApi";
import MovieItem from "./MovieItem";
import { treandingSliderSettings } from "../../Tools/SliderSettings";
import Error from "../../accessories/Error";



function Movies({ defaultValue, isSlider, path }) {
    const queryStateKeyword = useSelector(state => state.movieData.items);
    const queryKeyword = queryStateKeyword?.length > 0 && queryStateKeyword[0];

    const { data: movies, isLoading, isError, } = useGetDiscoverMoviesQuery({ type: "movie", path: !path ? `sort_by=${queryKeyword.keyword || defaultValue}` : queryKeyword.path });

    let content;
    if (isLoading) content = <LoadingInline />
    if (!isLoading && isError) content = <Error message="No movies found!" />;

    if (!isLoading && !isError && movies?.results?.length > 0) {
        content = movies.results?.map(movie => <MovieItem key={movie.id} movie={movie} isSlider={isSlider} type="movie" />)
    }

    return (
        !isSlider && !isError ? <div className="leftSlider grid grid-cols-3 lg:grid-cols-5 gap-y-10 items-center justify-center overflow-scroll">
            {content}
        </div> :
            <>
                {!isError ? <div className="slider-container">
                    <Slider {...treandingSliderSettings}>
                        {content}
                    </Slider>
                </div> : <NotFoundError message="movie" />}
            </>
    )
}

export default Movies;