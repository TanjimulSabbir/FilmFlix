import { useSelector } from "react-redux";
import Slider from "react-slick";
import "../../../style/animation.css";
import Error from "../../accessories/Error";
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
    path: path ? path : `sort_by=${queryKeyword?.keyword || defaultValue}`,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-60">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
        <p className="mt-3 text-gray-500 text-sm font-semibold animate-pulse">
          Loading...
        </p>

        {/* Skeleton UI for movie placeholders */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full px-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 rounded-lg animate-pulse h-44"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (isError || !movies?.results?.length) {
    return <Error message="No movies found!" />;
  }

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
