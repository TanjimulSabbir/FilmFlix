import { CiPlay1 } from "react-icons/ci";
import moment from "moment";
import Trailer from "./Trailer";
import { useState } from "react";

function BannerText02({ movie }) {
    const [openTrailer, setOpenTrailer] = useState(false)
    const monthName = moment().month(movie?.release_date?.split('-')[2]).format('MMMM');

    const handleTrailer = () => {
        // if (!openTrailer) {
        //     document.getElementById("player").
        // }
        setOpenTrailer(!openTrailer)
        
    }

    return (
        <div className="w-1/2 flex justify-end">
            <div>
                <h1 className="theatePlayDate mb-10 leading-none">
                    <span className="mr-5" data-text="on">on</span>
                    <span>
                        <span>{movie?.release_date?.split('-')[1]}</span>
                        <span className="-ml-1 lowercase">th</span>
                    </span>
                    <br />
                    <span className="tracking-widest">{monthName}</span>
                </h1>

                <button className={`flex items-center space-x-2`} onClick={() => handleTrailer()}>
                    <CiPlay1 className="text-4xl text-green-600" />
                    <span>
                        Watch Trailer
                    </span>
                </button>
            </div>
            {/* {openTrailer && <Trailer id={movie?.id} handleTrailer={handleTrailer} />} */}
        </div>
    )
}

export default BannerText02;