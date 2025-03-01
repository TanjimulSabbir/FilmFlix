import { useSelector } from "react-redux";
import Slider from "react-slick";

import "../../../style/animation.css";
import Error from "../../accessories/Error";
import LoadingInline from "../../accessories/InlineLoading";

import { useGetDiscoverMoviesQuery } from "../../../Redux/Features/Api/movieApi";
import { treandingSliderSettings } from "../../Tools/SliderSettings";
import MovieItem from "./MovieItem";

function Movies({ defaultValue, isSlider, path }) {
  const queryKeyword = useSelector((state) => state.movieData.items?.[0]);

  const {
    data: movies,
    isLoading,
    isError,
  } = useGetDiscoverMoviesQuery({
    type: "movie",
    path: path?path : `sort_by=${queryKeyword?.keyword || defaultValue}`,
  });
    console.log(defaultValue, path, queryKeyword?.keyword)
  if (isLoading) return <LoadingInline />;
  if (isError || !movies?.results?.length)
    return <Error message="No movies found!" />;

  const content = movies.results.map((movie) => (
    <MovieItem key={movie.id} movie={movie} isSlider={isSlider} type="movie" />
  ));

  return isSlider ? (
    <div className="slider-container">
      <Slider {...treandingSliderSettings}>{content}</Slider>
    </div>
  ) : (
    <div className="leftSlider grid grid-cols-3 lg:grid-cols-5 gap-y-10 items-center justify-center overflow-scroll">
      {content}
    </div>
  );
}

export default Movies;
