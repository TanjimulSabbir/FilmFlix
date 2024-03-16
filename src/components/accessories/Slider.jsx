import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useGetMoviesQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "./Loading";
import Banner from "../Home/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider() {
    const { data: Movies, isLoading, isError, error } = useGetMoviesQuery('now_playing')

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
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
        content = Movies.results.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" srcSet="" />)
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {content}
            </Slider>

        </div>
    );
}

export default SlickSlider;
