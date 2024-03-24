import { useSelector } from "react-redux"
import useGetData from "../../../components/Tools/useGetData";
import { PiDotBold } from "react-icons/pi";
import { TextRuntime, getYear } from "../../../components/Tools/Others";

export default function Reviews() {
  const movie = useSelector(state => state.movieData.clickedMovieDetails);
  const { id, adult, backdrop_path, belongs_to_collection, budget, genres, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
  } = movie || {};

  const reviewsData = useGetData({ type: "movie", id, keyword: "reviews" })



  console.log(reviewsData, "reviewsData")

  return (
    <div className="mt-10">
      <div>
        <h2 className="text-4xl inline-block">{original_title}</h2>
        <p className="flex items-center">
          <span>{getYear(release_date)}</span>
          <PiDotBold className="text-lg" />
          <span>{spoken_languages[0].english_name}</span>
          <PiDotBold className="text-lg font-bold" />
          <span>{TextRuntime(runtime)}</span>
        </p>
      </div>

    </div>
  )
}
