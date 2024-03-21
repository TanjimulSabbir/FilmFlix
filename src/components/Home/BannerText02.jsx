import { CiPlay1 } from "react-icons/ci";
import moment from "moment";
import Trailer from "./Trailer";
import { useEffect, useState } from "react";
import style from "../../style/bannerText.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getSliderValue } from "../../Redux/Features/Slider/sliderSlice";

function BannerText02({ movie }) {
    const [openTrailer, setOpenTrailer] = useState(false);
    const monthName = moment().month(parseInt(movie?.release_date?.split('-')[1]) - 1).format('MMMM');
    const dispatch = useDispatch();

    const handleTrailer = () => {
        setOpenTrailer(!openTrailer)
        dispatch(getSliderValue(openTrailer))
        toast.success(openTrailer ? "Trailer opened" : "Trailer closed");
    };


    console.log(openTrailer, "from Banner");
    return (
        <div className="w-1/2 flex justify-end">
            <div>
                <h1 className={`${style.theatePlayDate} leading-none`}>
                    <span className="mr-5">on</span>
                    <span>
                        <span>{movie?.release_date?.split('-')[2]}</span>
                        <span className="-ml-1 lowercase">th</span>
                    </span>
                    <br />
                    <span className="tracking-widest">{monthName}</span>
                </h1>

                <div className="mt-10">
                    <button className={`flex items-center space-x-2`} onClick={handleTrailer}>
                        <CiPlay1 className="text-4xl text-green-600" />
                        <span>
                            {openTrailer ? "Close Trailer" : "Watch Trailer"}
                        </span>
                    </button>
                </div>
            </div>
            {openTrailer && <Trailer id={movie?.id} openTrailer={openTrailer} handleTrailer={handleTrailer} />}
        </div>
    );
}

export default BannerText02;
