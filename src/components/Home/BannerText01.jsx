import style from "../../style/bannerText.module.css";
import { CiBookmark } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { TextRuntime, getYear } from "../Tools/Others";
import toast from "react-hot-toast";

function BannerText01({ movie }) {
  const { original_title, overview, release_date, runtime, genres } = movie || {};

  const handleShowToast = (message) => {
    toast.error(message)
  };

  return (
    <div className="leftSlider w-1/2 text-white select-text">
      <h2 className={`${style.movieTitle} text-3xl mb-4`}>{original_title}</h2>

      {/* title details */}
      <div className="flex items-center justify-start space-x-2 mb-5">
        <p className="">{getYear(release_date)} |</p>
        <p className="bg-green-600 p-1 rounded">15+ </p>
        <p className="">| {TextRuntime(runtime)} </p>
        {/* <p className="">| {genres[0]?.name}</p> */}
      </div>

      <p className="mb-12">{overview}</p>

      <div className="space-x-4 flex">

        <button className={`${style.btn} ${style.brdr} flex items-center space-x-1`} onClick={() => handleShowToast('We are working for this feature. Thank you!')}>
          <CiBookmark />
          <span>Buy ticket</span>
        </button>

        <button className={`${style.btn} flex items-center space-x-1 bg-green-600 border-none`} onClick={() => handleShowToast('We are working for this feature. Thank you!')}>
          <GoPlus />
          <span>Add Watchlist</span>
        </button>
      </div>
    </div>
  )
}

export default BannerText01;