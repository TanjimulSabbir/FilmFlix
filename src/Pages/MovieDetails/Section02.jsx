import { useSelector } from "react-redux";
import Cast from "./Cast";

function Section02() {
  const movie = useSelector(state => state.movieData.clickedMovieDetails)
  const { id, overview, poster_path, original_title } = movie || {};
  console.log(poster_path);
  return (
    <div className="pb-3">
      <h2 className="mb-2 text-3xl">Story-Line</h2>
      <div className="flex flex-col gap-3">
        <div className="h-1/2 w-full overflow-hidden">
          <img className="leftSliderSlow lg:hidden w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title} srcSet="" />
        </div>
        <p className="mb-14 text-sm lg:text-base">{overview}</p>
      </div>
      <h2 className="text-3xl mb-5">Top Cast</h2>
      <Cast id={id} />
    </div>
  )
}

export default Section02;