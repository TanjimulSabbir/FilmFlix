import { useLocation, useParams } from "react-router-dom";
import { useGetAllDataSlashQuery, useGetMovieDetailsQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import MovieItem from "../../components/Home/Banner02/MovieItem";
import Slider from "react-slick";
import { treandingSliderSettings } from "../../components/Tools/SliderSettings";
import { titleText } from "../../components/accessories/TextTitle";
import { useState } from "react";
import SimilarDetails from "./ModalDetails";
import Error from "../../components/accessories/Error";
import NotFoundError from "../../components/accessories/NotFoundError";

export default function Similar() {
    const [movieId, setMovieId] = useState({});
    const [selectedMovie, setSelectedMovie] = useState(null);

    const id = useParams().id;
    const pathType = useLocation().pathname.split("/")[1];

    const { data: movie, isLoading: detailsLoading, isError: detailsError, error: error01 } = useGetMovieDetailsQuery({ id: movieId, type: pathType }, { skip: !movieId });

    const { data: movies, isLoading, isError, error: error02 } = useGetAllDataSlashQuery({ type: pathType, id, keyword: "similar" });

    const ClickedMovieDetails = (id) => {
        setMovieId(id);
        setSelectedMovie(!selectedMovie)
    }

    let content;
    if (isLoading || detailsLoading) content = <Loading />
    if (!isLoading && isError) content = <NotFoundError message="movies" />;

    if (!isLoading && !isError && movies?.results?.length > 0) {
        content = movies.results.map(movie => <MovieItem key={movie.id} movie={movie}
            ClickedMovieDetails={ClickedMovieDetails} />)
    }

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    console.log(movies, "from Similar")

    return (
        <div className="py-11">
            {titleText("Playing similar on theaters")}
            {content ? <div className="slider-container mt-9">
                <Slider {...treandingSliderSettings}>
                    {content}
                </Slider>
            </div> : <NotFoundError message="similar movies"/>}
            {selectedMovie && (
                <div className="fixed inset-0 w-full h-full flex justify-center items-center z-40 bg-[#080808c6]">
                    <div className="relative flex items-center justify-center">
                        {!detailsError && <SimilarDetails movie={movie} handleCloseModal={handleCloseModal} />}
                    </div>
                </div>
            )}
        </div>
    )
}
