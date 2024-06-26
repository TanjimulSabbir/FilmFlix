import moment from "moment";
import { IoIosStar } from "react-icons/io";

export default function WatchList() {
    return (
        <div>
            <div className="flex items-center gap-x-5 mb-3">
                <img className="w-16 h-16 rounded-full" src={`https://image.tmdb.org/t/p/original${avatar_path}`} alt="" srcSet="" />

                <div>
                    <h2 className="text-xl mb-0">
                        {name || "Anonymous"}
                    </h2>
                    <p className="text-gray-500 text-xs">
                        <span className="font-bold">{moment(updated_at).format('MMMM DD, YYYY')}</span>
                    </p>

                    <span className="flex items-center space-x-1">
                        <IoIosStar className="text-yellow-500" />
                        <span>
                            <span className="font-bold"> {ratin?.toFixed(1) || "unrated"}</span>
                            <span className="text-xs"> /10</span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
