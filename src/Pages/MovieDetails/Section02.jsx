import { useSelector } from "react-redux";
import Cast from "./Cast";

function Section02() {
  const movie = useSelector(state => state.movieData.clickedMovieDetails)
  const { id, overview } = movie || {};

  return (
    <div className="pb-3">
      <h2 className="mb-2 text-3xl">Story-Line</h2>
      <p className="mb-14">{overview}</p>
      <h2 className="text-3xl mb-5">Top Cast</h2>
      <Cast id={id} />
    </div>
  )
}

export default Section02;