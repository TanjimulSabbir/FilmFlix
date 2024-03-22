import { BsPlayCircle } from "react-icons/bs";
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
        <div className="w-1/2 flex items-start justify-end text-white">
            <div>
                <h1 className={`${style.theatePlayDate} leading-none`}>
                    <span className="mr-5 tracking-wider">on</span>
                    <span>{moment(movie?.release_date).format('Do')}</span>
                    <br />
                    <span className="tracking-widest">{monthName}</span>
                </h1>

                <div className="mt-5">
                    <button className={`${style.trailerBtn} flex items-center space-x-2`} onClick={handleTrailer}>
                        <BsPlayCircle className=" text-3xl text-green-600" />
                        <span className="">
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
