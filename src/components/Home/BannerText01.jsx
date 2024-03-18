import moment from "moment";
import style from "../../style/bannerText.module.css";
import { CiBookmark } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

function BannerText01({ movie }) {
  const { original_title, release_date, adult, runtime, genres } = movie || {};
  const releaseDate = moment(release_date).format("YYYY");
  const duration = moment.duration(runtime, 'minutes');
  const formattedRuntime = `${duration.hours()}h ${duration.minutes()}min`;


  return (
    <div className="w-1/2">
      <h2 className="text-3xl text-slate-100 mb-4">{original_title}</h2>
      {/* title details */}

      <div className="flex items-center justify-start space-x-2 mb-5">
        <p className="">{releaseDate} |</p>
        <p className="bg-green-600 p-1 rounded">15+ </p>
        <p className="">| {formattedRuntime} </p>
        <p className="">| {genres[0].name}</p>
      </div>

      <p className="mb-12">{movie.overview}</p>

      <div className="space-x-4 flex">
        <button className={`${style.btn} ${style.brdr} flex items-center space-x-1`}>
          <CiBookmark />
          <span>Buy ticket</span>
        </button>
        <button className={`${style.btn} flex items-center space-x-1 bg-green-600 border-none`}>
          <GoPlus />
          <span>Add Watchlist</span>
        </button>
      </div>
    </div>
  )
}

export default BannerText01;