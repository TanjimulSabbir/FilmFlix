import style from "../../style/bannerText.module.css";
import "../../style/genreMovies.css"

import { CiBookmark } from "react-icons/ci";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

import { TextRuntime, getYear } from "../Tools/Others";
import { setWatchListMovies } from "../../Redux/Features/Watchlist/watchListSlice.js"
import toast from "react-hot-toast";

import { useDispatch } from 'react-redux';

function BannerText01({ movie }) {
  const { original_title, overview, release_date, runtime, genres } = movie || {};

  const handleShowToast = (message) => {
    toast.success(message)
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
        <p onClick={() => handleWatchList(movie)} className='wishListBtnHome leftSliderSlow min-w-fit flex items-center space-x-3 py-2 px-3 rounded-lg border border-white'>
          <BsFillBookmarkPlusFill />
          <span>Add to Watchlist</span>
        </p>

        <button className={`ticketBtnHome flex items-center space-x-1 py-2 px-3 md:px-7 text-[#04e4bf] border border-[#04e4bf] rounded-lg`} onClick={() => handleShowToast(`Currently, the Buy Ticket feature is experiencing issues.
        Thank you for your patience.`)}>
          <CiBookmark />
          <span>Buy ticket</span>
        </button>
      </div>
    </div>
  )
}

export default BannerText01;