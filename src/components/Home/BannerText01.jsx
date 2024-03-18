import moment from "moment";
import style from "../../style/bannerText01.module.css";
import { CiBookmark } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

function BannerText01({ movie }) {
  const { original_title, release_date, adult } = movie || {};
  const date = moment(release_date);
  const year = date.format('YYYY');
  return (
    <div className="w-1/2">
      <h2 className="text-3xl text-slate-100 mb-4">{original_title}</h2>
      <div className="flex items-center justify-start space-x-2 mb-5">

        <p className="">{year} |</p>
        <p className="bg-green-600 p-1 rounded">15+ </p>
        <p className="">| 02 hours 20min </p>
        <p className="">| Mystrious</p>
      </div>

      <p className="mb-12">{movie.overview}</p>

      <div className="space-x-4 flex">
        <button className={`${style.btn} flex items-center space-x-1`}>
          <CiBookmark />
          <span>Buy ticket</span>
        </button>
        <button className={`${style.btn} flex items-center space-x-1`}>
          <GoPlus />
          <span>Add Watchlist</span>
        </button>
      </div>
    </div>
  )
}

export default BannerText01;