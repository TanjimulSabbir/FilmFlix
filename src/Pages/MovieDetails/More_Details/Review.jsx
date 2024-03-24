/* eslint-disable react/prop-types */

import moment from "moment";
import { IoIosStar } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

/* eslint-disable no-unused-vars */
export default function Review({ review }) {
    const { author, author_details: { avatar_path, name, rating }, content, created_at, id, updated_at, url } = review;


    return (
        <div className="mt-7">
            <div>
                <div className="flex items-center gap-x-5 mb-3">
                    <img className="w-16 h-16 rounded-full" src={`https://image.tmdb.org/t/p/original${avatar_path}`} alt="" srcSet="" />

                    <div>
                        <h2 className="text-xl mb-0">
                            {name || "Name not found"}
                        </h2>
                        <span className="text-gray-500 text-xs -mt-1">
                            <span className="font-bold">{moment(updated_at).format('DD-MM-YYYY')}</span>
                        </span>

                        <span className="flex items-center space-x-1">
                            <IoIosStar className="text-yellow-500" />
                            <span>
                                <span className="font-bold"> {rating?.toFixed(1)}</span>
                                <span className="text-xs"> /10</span>
                            </span>
                        </span>
                    </div>
                </div>
                <p>{content}</p>
            </div>
            <div className="flex items-center space-x-5 mt-5">
                <button className="flex items-center space-x-1 border border-gray-100 px-4 py-1 rounded-2xl">
                    <SlLike />
                    <span> Helpful</span>
                </button>
                <button className="flex items-center space-x-1 border border-gray-100 px-4 py-1 rounded-2xl">
                    <SlDislike />
                    <span>Unhelpful</span>
                </button>
            </div>
        </div>
    )
}
