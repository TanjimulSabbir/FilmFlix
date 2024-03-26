import { useParams } from "react-router-dom";
import { useGetAllDataSlashQuery, useGetMovieDetailsQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import MovieItem from "../../components/Home/Banner02/MovieItem";
import Slider from "react-slick";
import { treandingSliderSettings } from "../../components/Tools/SliderSettings";
import { titleText } from "../../components/accessories/TextTitle";
import { useState } from "react";
import SimilarDetails from "./SimilarDetails";

export default function Similar() {
    const [movieId, setMovieId] = useState({});
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { data: movie, isLoading: detailsLoading, isError: detailsError } = useGetMovieDetailsQuery(movieId, { skip: !movieId });

    const id = useParams().movieId;
    const { data: movies, isLoading, isError } = useGetAllDataSlashQuery({ type: "movie", id, keyword: "similar" });


    const ClickedMovieDetails = (id) => {
        setMovieId(id);
        setSelectedMovie(!selectedMovie)
    }

    let content;
    if (isLoading || detailsLoading) content = <Loading />
    if (!isLoading && isError) content = "Error occured";

    if (!isLoading && !isError && movies?.results?.length > 0) {
        content = movies.results.map(movie => <MovieItem key={movie.id} movie={movie} ClickedMovieDetails={ClickedMovieDetails} />)
    }

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    console.log(movie, "from Similar")

    return (
        <div className="py-11">
            {titleText("More like this")}
            <div className="slider-container mt-9">
                <Slider {...treandingSliderSettings}>
                    {content}
                </Slider>
            </div>
            {selectedMovie && (
                <div className="fixed inset-0 w-full h-full flex justify-center items-center z-40 bg-[#080808c6]">
                    <div className="relative flex items-center justify-center">
                        {!detailsError && <SimilarDetails movie={movie} handleCloseModal={handleCloseModal}/>}
                    </div>
                </div>
            )}
        </div>
    )
}
