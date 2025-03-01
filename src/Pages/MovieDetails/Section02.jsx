import { useSelector } from "react-redux";
import Cast from "./Cast";

function Section02() {
  const movie = useSelector(state => state.movieData.clickedMovieDetails)
  const { id, overview, poster_path, original_title } = movie || {};
  return (
    <div className="pb-3">
      <div className="lg:hidden pb-5 h-[200px] w-full">
        <img className="leftSliderSlow w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} srcSet="" />
      </div>

      <h2 className="mb-2 text-3xl">Story-Line</h2>
      <p className="mb-10 text-sm lg:text-base">{overview}</p>

      <h2 className="text-3xl mb-5">Top Cast</h2>
      <Cast id={id} />
    </div>
  )
}

export default Section02;