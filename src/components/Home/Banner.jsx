import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerText from "./BannerText";
import BannerImage from "./BannerImage";
import { useGetMoviesQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";

function Banner({data}) {
    // const { data, isLoading, isError, erro } = useGetMoviesQuery('now_playing')

    // if (isLoading) {
    //     return <Loading />
    // }
   

    return (
        <div className="relative">
            <BannerText />
            <BannerImage />
        </div>
    );
}

export default Banner;
