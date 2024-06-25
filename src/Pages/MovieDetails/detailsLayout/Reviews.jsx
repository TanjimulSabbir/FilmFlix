import { useSelector } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import useGetData from "../../../components/Tools/useGetData";
import { PiArrowRight, PiDotBold } from "react-icons/pi";
import { TextRuntime, getYear } from "../../../components/Tools/Others";
import Review from "./Review";
import "../../../style/animation.css"
import NotFoundError from "../../../components/accessories/NotFoundError";
import TitleText from "../../../components/accessories/TextTitle";

export default function Reviews() {
  const movie = useSelector(state => state.movieData.clickedMovieDetails);
  const [loadMore, setLoadMore] = useState(4);

  const { id, adult, backdrop_path, belongs_to_collection, budget, genres, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
  } = movie || {};

  const pathType = useLocation().pathname.split("/")[1]
  const intialReviewsData = useGetData({ type: pathType, id, keyword: "reviews" });

  const handleLoadMoreData = () => {
    const remainingReviews = Math.max(intialReviewsData?.results?.length - loadMore, 0);
    const nextLoad = Math.min(remainingReviews, 4);
    setLoadMore((prevLoadMore) => prevLoadMore + nextLoad);
  }

  const reviewsData = intialReviewsData?.results?.slice(0, loadMore);

  return (
    <div>
      <div className="topSlider flex items-center space-x-5">
        <img className="w-20 h-20 rounded-2xl" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" srcSet="" />

        <div>
          <h2 className="text-3xl inline-block">{original_title}</h2>
          <p className="flex items-center">
            <span>{getYear(release_date)}</span>
            <PiDotBold className="text-lg" />
            <span>{genres.map((item, index) => `${index > 0 ? "/" : ""}${item.name}`)}</span>
            <PiDotBold className="text-lg" />
            <span>{TextRuntime(runtime)}</span>
          </p>
        </div>
      </div>
      <h2 className="mt-7 text-3xl rightSliderSlow">{TitleText("User Reviews")}</h2>

      {
        reviewsData?.length > 0 ? reviewsData?.map(review => <Review key={review.id} review={review} />) : <NotFoundError message="reviews" />
      }

      <p
        className={`${intialReviewsData?.total_results > loadMore ? 'cursor-pointer' : 'hidden'} flex items-center justify-center w-1/2 mx-auto space-x-1 bg-gray-700 rounded-3xl px-10 py-2 text-xl mt-9`}
        onClick={handleLoadMoreData}
      >
        <span>More audience reviews</span>
        <PiArrowRight />
      </p>
    </div>
  )
}
