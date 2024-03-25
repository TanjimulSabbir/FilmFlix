import { useLocation, useParams } from "react-router-dom";
import { useGetAllDataSlashQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import MovieItem from "../../components/Home/Banner02/MovieItem";
import Slider from "react-slick";
import { treandingSliderSettings } from "../../components/Tools/SliderSettings";
import { titleText } from "../../components/accessories/TextTitle";
import { useState } from "react";
import BannerText01 from "../../components/Home/BannerText01";
import SimilarDetails from "./SimilarDetails";

export default function Similar() {
    const [movieDetails, setMovieDetails] = useState({});
    const [selectedMovie, setSelectedMovie] = useState(null);

    const id = useParams().movieId;
    const { data: movies, isLoading, isError } = useGetAllDataSlashQuery({ type: "movie", id, keyword: "similar" });


    const ClickedMovieDetails = (movie) => {
        setMovieDetails(movie);
        setSelectedMovie(!selectedMovie)
    }

    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = "Error occured";

    if (!isLoading && !isError && movies?.results?.length > 0) {
        content = movies.results.map(movie => <MovieItem key={movie.id} movie={movie} ClickedMovieDetails={ClickedMovieDetails} />)
    }

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    console.log(movieDetails, "from Similar")

    return (
        <div className="py-11">
            {titleText("More like this")}
            <div className="slider-container mt-9">
                <Slider {...treandingSliderSettings}>
                    {content}
                </Slider>
            </div>
            {selectedMovie && (
                <div onClick={handleCloseModal} className="fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-40 cursor-pointer">
                    <div className="relative">
                        {movieDetails.id && <SimilarDetails movie={movieDetails} />}
                        <p className="text-white">This is modal movie details</p>
                    </div>
                </div>
            )}
        </div>
    )
}
