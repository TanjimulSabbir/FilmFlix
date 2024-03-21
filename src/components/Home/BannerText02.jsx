import { CiPlay1 } from "react-icons/ci";
import moment from "moment";
import Trailer from "./Trailer";
import { useState, useEffect } from "react";
import style from "../../style/bannerText.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getSliderValue } from "../../Redux/Features/Slider/sliderSlice";

function BannerText02({ movie }) {
    const [openTrailer, setOpenTrailer] = useState(false);
    const monthName = moment(movie?.release_date).format('MMMM');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(openTrailer, "from Banner");
    }, [openTrailer]);

    const handleTrailer = () => {
        const newTrailerState = !openTrailer;
        setOpenTrailer(newTrailerState);
        dispatch(getSliderValue(newTrailerState));
        toast.success(newTrailerState ? "Trailer opened" : "Trailer closed");
    };

    return (
        <div className="w-1/2 flex items-center justify-end">
            <div>
                <h1 className={`${style.theatePlayDate} leading-none flex flex-col items-center justify-center`}>
                   <div>
                   <span className="mr-5 tracking-wider">on</span>
                    <span>{moment(movie?.release_date).format('Do')}</span>
                    <br />
                    <span className="tracking-widest">{monthName}</span>
                   </div>
                </h1>

                <div className="mt-10 flex items-center justify-center">
                    <button className={`flex items-center space-x-2`} onClick={handleTrailer}>
                        <CiPlay1 className="text-3xl text-green-600" />
                        <span className="text-lg">
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
