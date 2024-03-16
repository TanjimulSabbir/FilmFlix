import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useGetMoviesQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "./Loading";
import Banner from "../Home/Banner";

function SlickSlider() {
    const { data: Movies, isLoading, isError, erro } = useGetMoviesQuery('now_playing')

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    let content;

    if (isLoading) {
        content = <Loading />
    }
    if (isError && erro) {
        content = "Data fetching error"
    }
    console.log(Movies)
    if (Movies?.results && Movies?.results.length > 0) Movies.map(movie => <Banner key={movie.id} data={movie} />)

    return (
        <div className="slider-container">
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                {content}

            </Slider>

            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >

                {content}
            </Slider>
        </div>
    );
}

export default SlickSlider;
