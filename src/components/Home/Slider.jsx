import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useGetMoviesQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";
import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { TopBannerSliderSettings } from "../Tools/SliderSettings";
import "../../style/animation.css"
import NotFoundError from "../accessories/NotFoundError";
import WelComeText from "../../UI/WelcomeText";


function SlickSlider() {
    const { data: Movies = [], isLoading, isError, error } = useGetMoviesQuery('now_playing', { refetchOnFocus: false, refetchOnMountOrArgChange: false, });

    const sliderState = useSelector(state => state?.slider?.sliderPlay);
    let content;

    if (isLoading) {
        content = <WelComeText />;
    }

    if (isError) {
        content = <NotFoundError message="Movies" />;
    } else if (!isLoading && !isError && Movies?.results?.length > 0) {
        content = Movies.results.map(movie => (
            <div key={movie.id} className="relative h-screen w-full">
                <Banner id={movie.id} />
                <div className="downSlider h-screen lg:h-full">
                    <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} srcSet="" />
                </div>
            </div>
        ));
    } else {
        content = <NotFoundError message="Movies" />;
    }


    let sliderRef = useRef(null);
    const renderSlider = !isError && !isLoading && Movies?.results?.length > 0;
    const play = () => {
        renderSlider &&
            sliderRef.slickPlay();
    };
    const pause = () => {
        renderSlider &&
            sliderRef.slickPause();
    };

    useEffect(() => {
        if (sliderState) {
            play()
        } else {
            pause()
        }
    }, [sliderState])

    return (
        <>
            {renderSlider ? <div className="slider-container">
                <Slider ref={slider => (sliderRef = slider)} {...TopBannerSliderSettings}>
                    {content}
                </Slider>
            </div> : content}
        </>
    );
}

export default SlickSlider;