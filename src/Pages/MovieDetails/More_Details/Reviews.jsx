import { useSelector } from "react-redux"
import useGetData from "../../../components/Tools/useGetData";
import { PiArrowRight, PiDotBold } from "react-icons/pi";
import { TextRuntime, getYear } from "../../../components/Tools/Others";
import Review from "./Review";
import { titleText } from "../../../components/accessories/TextTitle";
import { useEffect, useState } from "react";

export default function Reviews() {
  const movie = useSelector(state => state.movieData.clickedMovieDetails);
  const [loadMore, setLoadMore] = useState(4);

  const { id, adult, backdrop_path, belongs_to_collection, budget, genres, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
  } = movie || {};

  const intialReviewsData = useGetData({ type: "movie", id, keyword: "reviews" });

  // const handleLoadMoreData = () => {
  //   const initialLength = intialReviewsData?.results?.length >= loadMore + 4;

  //   setLoadMore((previous) => initialLength ? previous + 4 : previous)
  // }

  // const reviewsData = intialReviewsData?.results?.slice(0, loadMore);
  const remainingReviews = Math.max(intialReviewsData?.results?.length - loadMore, 0);
  const nextLoad = Math.min(remainingReviews, 4); // Load next 4 reviews or less if there are fewer remaining
  setLoadMore((prevLoadMore) => prevLoadMore + nextLoad); // Increment loadMore state
  

  console.log(reviewsData, "reviewsData")
  useEffect(() => { }, [loadMore])

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
      <h2 className="mt-7 text-3xl">{titleText("User Reviews")}</h2>

      {
        reviewsData?.length > 0 ? reviewsData?.map(review => <Review key={review.id} review={review} />) : "No reviews found"
      }

      <p
        className="flex items-center justify-center w-1/2 mx-auto space-x-1 bg-gray-500 rounded-3xl px-10 py-2 text-xl mt-9 cursor-pointer"
        onClick={() => handleLoadMoreData()}
      >
        <span>More audience reviews</span>
        <PiArrowRight />
      </p>
    </div>
  )
}
