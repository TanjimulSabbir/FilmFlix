import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getReleaseDate } from "../../../components/Tools/Others";
import { PiDotBold } from "react-icons/pi";

export default function Others() {
  const movie = useSelector(state => state.movieData.clickedMovieDetails)
  const { id, adult, backdrop_path, belongs_to_collection, budget, genres, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
  } = movie || {};

  const getArrayInfo = ({ ArrayData, type }) => {
    if (!ArrayData || ArrayData?.length === 0) return null;
    console.log({ ArrayData, type }, "Arguments")

    return ArrayData.map((item, index) => (
      <p key={item.credit_id} className="flex items-center text-nowrap space-x-2">
        {index > 0 && < PiDotBold />}
        <span className="text-sky-500">{item[type]}</span>
      </p>
    ));
  }

  return (
    <div className="w-full pb-7">
      <div className="flex space-x-5 py-4 border-y border-gray-600">
        <span className="text-lg font-bold">Tagline</span>
        <p className="text-sky-500">{tagline}</p>
      </div>
      <div className="flex space-x-5 py-4 border-y border-gray-600">
        <span className="text-lg font-bold">Release Date</span>
        <p className="text-sky-500">{getReleaseDate(release_date)}</p>
      </div>
      <div className="flex space-x-5 py-4 border-b border-gray-600">
        <span className="text-lg font-bold">Countries Of Origin</span>
        <p className="flex flex-wrap items-center gap-2">{getArrayInfo({ ArrayData: production_countries, type: "name" })}</p>
      </div>
      <div className="flex space-x-5 py-4 border-b border-gray-600">
        <span className="text-lg font-bold">Official Sites</span>
        <p className="flex flex-wrap items-center gap-2 ">
          <Link to={homepage} className="text-sky-500">Homepage</Link>
          <PiDotBold />
          <Link to={`https://www.imdb.com/title/${imdb_id}`} className="text-sky-500">IMDb Title</Link>
        </p>

      </div>
      <div className="flex space-x-5 py-4 border-b border-gray-600">
        <span className="text-lg font-bold">Languages</span>
        <p className="flex flex-wrap items-center gap-2">{getArrayInfo({ ArrayData: spoken_languages, type: "name" })}</p>
      </div>
      <div className="flex space-x-5 py-4 border-b border-gray-600">
        <span className="text-lg font-bold">Production Companies</span>
        <p className="flex flex-wrap items-center gap-2">{getArrayInfo({ ArrayData: production_companies, type: "name" })}</p>
      </div>
    </div>
  );
}
