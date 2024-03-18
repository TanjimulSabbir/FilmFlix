import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useGetMoviesQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";
import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider() {
    const { data: Movies, isLoading, isError, error } = useGetMoviesQuery('now_playing')

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
    };

    let content;

    if (isLoading) {
        content = <Loading />
    }
    if (isError) {
        content = "Data fetching error"
    }
    console.log(Movies?.results)
    if (!isLoading && !isError) {
        content = Movies.results.map(movie => <div key={movie.id} className="">
            <img className="opacity-20" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" srcSet="" />
        </div>)
    }

    return (
        <div className="slider-container relative">
            <Banner/>
            <Slider {...settings}>
                {content}
            </Slider>
        </div>
    );
}

export default SlickSlider;
