import style from "../../style/bannerText.module.css";

import { CiBookmark } from "react-icons/ci";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

import { TextRuntime, getYear } from "../Tools/Others";
import { setWatchListMovies } from "../../Redux/Features/Watchlist/watchListSlice.js"
import toast from "react-hot-toast";

import { useDispatch } from 'react-redux';

function BannerText01({ movie }) {
  const { original_title, overview, release_date, runtime, genres } = movie || {};


  const handleShowToast = (message) => {
    toast.error(message)
  };

  const dispatch = useDispatch();

  const handleWatchList = (movie) => {
    dispatch(setWatchListMovies(movie))
  }

  return (
    <div className="leftSlider px-5 lg:px-0 lg:w-1/2 text-white select-text">
      <h2 className={`${style.movieTitle} text-3xl mb-4`}>{original_title}</h2>

      {/* title details */}
      <div className="flex items-center justify-start space-x-2 mb-5">
        <p className="">{getYear(release_date)} |</p>
        <p className="bg-green-600 p-1 rounded">15+ </p>
        <p className="">| {TextRuntime(runtime)} </p>
        {/* <p className="">| {genres[0]?.name}</p> */}
      </div>

      <p className="mb-12 text-sm">{overview}</p>

      <div className="space-x-4 flex">
        <p onClick={() => handleWatchList(movie)} className='wishListBtn leftSliderSlow min-w-fit flex items-center space-x-3 py-2 px-3 rounded-lg text-yellow-500 border border-yellow-500'>
          <BsFillBookmarkPlusFill className="" />
          <span>Add to Watchlist</span>
        </p>

        <button className={`${style.smBtn} lg:${style.lgBtn} ${style.brdr} flex items-center space-x-1`} onClick={() => handleShowToast('We are working for this feature. Thank you!')}>
          <CiBookmark />
          <span>Buy ticket</span>
        </button>
      </div>
    </div>
  )
}

export default BannerText01;