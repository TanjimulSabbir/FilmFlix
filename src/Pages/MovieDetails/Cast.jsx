import Slider from "react-slick";
import { useGetCastsQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import { castSliderSettings } from "../../components/Tools/SliderSettings";
import style from "../../style/cast.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useMemo, useState, useCallback } from "react";
import { addCastData } from "../../Redux/Features/movies/moviesSlice";
import { useLocation } from "react-router-dom";
import { showFancyToast } from "../../utils/CustomeNotification";

function Cast({ id }) {
  const pathType = useLocation().pathname.split("/")[1];
  const dispatch = useDispatch();
  const {
    data: castsData,
    isLoading,
    isError,
  } = useGetCastsQuery({ type: pathType, id }, { skip: !id });

  // Default placeholder image
  const defaultImage = "https://via.placeholder.com/150?text=No+Image";
  const [shownToasts, setShownToasts] = useState(new Set()); // Prevent multiple toast notifications

  useEffect(() => {
    if (!isLoading && !isError && castsData?.id) {
      dispatch(addCastData({ ...castsData }));
    }
  }, [castsData?.id, isLoading, isError, dispatch]); // ✅ Only update if castsData.id changes

  // Handle Missing Cast Details Toast (Prevents re-triggering)
  const handleCastClick = useCallback(() => {
    if (!shownToasts.has("cast-details")) {
      showFancyToast("Oops! Cast details are unavailable.");
      setShownToasts((prev) => new Set(prev).add("cast-details"));
    }
  }, [shownToasts]);

  // Memoized content rendering to prevent unnecessary re-renders
  const content = useMemo(() => {
    if (isLoading) return <Loading />;
    if (isError)
      return (
        <p className="text-red-500 text-center">Failed to load cast details.</p>
      );

    if (castsData?.cast?.length) {
      return castsData.cast.map((item) => (
        <div key={item.id} className="cursor-pointer" onClick={handleCastClick}>
          <div
            className={`${style.castContainer} flex items-center space-x-2 justify-center`}
          >
            <img
              className={`${style.castImage} w-16 h-auto lg:w-24 lg:h-auto rounded-full p-[1px] border border-gray-300 shadow-md transition-all duration-300 ease-in-out hover:scale-105`}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                  : defaultImage
              }
              alt={item.original_name}
            />
            <p className={`${style.CastText} flex flex-col`}>
              <span className="lg:text-lg font-medium">
                {item.original_name}
              </span>
              <span className="text-gray-500 text-xs md:text-sm">
                {item.character || "Unknown Role"}
              </span>
            </p>
          </div>
        </div>
      ));
    }

    return (
      <p className="text-center text-gray-400">
        No cast information available.
      </p>
    );
  }, [isLoading, isError, castsData, handleCastClick]);

  return (
    <div className="slider-container mb-10">
      <Slider {...castSliderSettings}>{content}</Slider>
    </div>
  );
}

export default Cast;
