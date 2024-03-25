import { useLocation, useParams } from "react-router-dom";
import { useGetAllDataSlashQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import MovieItem from "../../components/Home/Banner02/MovieItem";
import Slider from "react-slick";
import { treandingSliderSettings } from "../../components/Tools/SliderSettings";
import { titleText } from "../../components/accessories/TextTitle";
import { useState } from "react";

export default function Similar() {
    const id = useParams().movieId;
    const { data: movies, isLoading, isError } = useGetAllDataSlashQuery({ type: "movie", id, keyword: "similar" });

    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = "Error occured";

    if (!isLoading && !isError && movies.results.length > 0) {
        content = movies.results.map(movie => <MovieItem key={movie.id} movie={movie} />)
    }

    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="py-11" onClick={() => setSelectedMovie(true)}>
            {titleText("More like this")}
            <div className="slider-container mt-9">
                <Slider {...treandingSliderSettings}>
                    {content}
                </Slider>
            </div>
            {selectedMovie && (
                <div onClick={handleCloseModal} className="fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-40 cursor-pointer">
                    <div className="relative">
                        {/* <BannerText01 movie={movie} /> */}
                        <p className="text-white">This is modal movie details</p>
                    </div>
                </div>
            )}
        </div>
    )
}
