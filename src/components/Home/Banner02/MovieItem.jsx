import { IoIosStar } from "react-icons/io";
import playBtn from "../../../assets/images/play-btn.gif";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getYear } from "../../Tools/Others";
import { useState } from "react";

function MovieItem({ movie, ClickedMovieDetails, type }) {
  const { pathname } = useLocation();
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { id, original_title, release_date, vote_average, adult, poster_path } =
    movie || {};

  const handleDetails = () => {
    if (paramsId) {
      ClickedMovieDetails?.(id);
    } else {
      navigate(`/${type}/${id}`);
    }
  };

  return (
    <div className="relative itemContainter p-2">
      {/* Movie Poster with Hover Play Button */}
      <div
        className="relative cursor-pointer overflow-hidden rounded-lg"
        onClick={handleDetails}
      >
        {isLoading && (
          <div className="w-full h-[350px] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse rounded-lg"></div>
        )}
        <img
          className={`rounded-lg mb-2 px-1 lg:px-2 transition-opacity duration-500 ease-in-out ${
            isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
          onLoad={() => setIsLoading(false)}
        />
        {!isLoading && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white opacity-0 transition-opacity duration-500 hover:opacity-100">
            <img src={playBtn} className="rounded-lg" alt="Play" />
          </div>
        )}
      </div>

      {/* Movie Details */}
      <div className="flex items-center justify-between px-3">
        {isLoading ? (
          <div className="h-5 w-32 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse rounded"></div>
        ) : (
          <p className="overflow-hidden text-nowrap text-ellipsis text-lg font-semibold">
            {original_title}
          </p>
        )}
        {isLoading ? (
          <div className="h-5 w-10 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse rounded"></div>
        ) : (
          <span className="mr-2 text-sm text-gray-400">
            {getYear(release_date)}
          </span>
        )}
        <div className="flex items-center space-x-1">
          <IoIosStar className="text-yellow-500" />
          {isLoading ? (
            <div className="h-5 w-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse rounded"></div>
          ) : (
            <span className="text-sm font-medium">
              {vote_average?.toFixed(1)}
            </span>
          )}
        </div>
      </div>

      {/* Age Restriction Badge */}
      {!isLoading && (
        <p className="absolute top-2 left-2 bg-red-600 px-4 py-1 text-white text-xs font-bold rounded-md shadow-lg">
          {adult ? "Adult" : "PG"}
        </p>
      )}
    </div>
  );
}

export default MovieItem;
