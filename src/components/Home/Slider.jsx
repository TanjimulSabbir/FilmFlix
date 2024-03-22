import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useGetMoviesQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";
import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";


function SlickSlider() {
    const { data: Movies, isLoading, isError, error } = useGetMoviesQuery('now_playing', { refetchOnFocus: false, refetchOnMountOrArgChange: false, });

    const sliderState = useSelector(state => state.slider.sliderPlay);
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: true,
    }

    let content;
    if (isLoading) {
        content = <Loading />
    }
    if (isError) {
        content = "Data fetching error"
    }

    if (!isLoading && !isError) {
        content = Movies.results.map(movie => (
            <div key={movie.id} className="relative">
                <Banner id={movie.id} />
                <div>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" srcSet="" />
                </div>
            </div>
        ));
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

    console.log(sliderState, "from slider")

    return (
        <div className="slider-container">
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                {content}
            </Slider>
        </div>
    );
}

export default SlickSlider;
