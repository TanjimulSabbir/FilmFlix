import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useGetMoviesQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";
import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { TopBannerSliderSettings } from "../Tools/SliderSettings";


function SlickSlider() {
    const { data: Movies = [], isLoading, isError, error } = useGetMoviesQuery('now_playing', { refetchOnFocus: false, refetchOnMountOrArgChange: false, });
    const [imageSrc, setImageSrc] = useState("")

    const sliderState = useSelector(state => state.slider.sliderPlay);
    let content;

    if (isLoading) {
        content = <Loading />
    }
    if (isError) {
        content = "Data fetching error"
    }

    if (!isLoading && !isError) {
        content = Movies.results.map(movie => {
            return (
                <div key={movie.id} className="relative">
                    <Banner id={movie.id} />
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" srcSet="" />
                    </div>
                </div>
            )
        });
    }

    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    useEffect(() => {
        if (sliderState) {
            play()
        } else {
            pause()
        }
    }, [sliderState])

    console.log(sliderRef,"slideRef")

    return (
        <div className="slider-container">
            <Slider ref={slider => (sliderRef = slider)} {...TopBannerSliderSettings}>
                {content}
            </Slider>
        </div>
    );
}

export default SlickSlider;
