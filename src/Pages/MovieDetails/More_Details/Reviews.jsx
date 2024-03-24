import { useSelector } from "react-redux"
import useGetData from "../../../components/Tools/useGetData";
import { PiDotBold } from "react-icons/pi";
import { TextRuntime, getYear } from "../../../components/Tools/Others";
import Review from "./Review";

export default function Reviews() {
  const movie = useSelector(state => state.movieData.clickedMovieDetails);
  const { id, adult, backdrop_path, belongs_to_collection, budget, genres, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
  } = movie || {};

  const reviewsData = useGetData({ type: "movie", id, keyword: "reviews" })



  console.log(genres, "reviewsData")

  return (
    <div className="">
      <div className="flex items-center gap-x-5">
        <img className="w-24 h-24 rounded-3xl" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" srcSet="" />
        <div>
          <h2 className="text-4xl inline-block">{original_title}</h2>
          <p className="flex items-center">
            <span>{getYear(release_date)}</span>
            <PiDotBold className="text-lg" />
            <span>{genres.map((item, index) => `${index > 0 ? "/" : ""}${item.name}`)}</span>
            <PiDotBold className="text-lg" />
            <span>{TextRuntime(runtime)}</span>
          </p>
        </div>
      </div>
      <h2 className="mt-5 text-3xl">User Reviews</h2>
      {
        reviewsData?.results?.length > 0 ? reviewsData?.results.map(review => <Review key={review.id} review={review} />) : "No reviews found"
      }

    </div>
  )
}
