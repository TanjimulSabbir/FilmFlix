import { useState } from "react";
import ModalDetails from "../../../Pages/MovieDetails/ModalDetails";
import { useGetKeywordSearchQuery } from "../../../Redux/Features/Api/movieApi";
import LoadingInline from "../../accessories/InlineLoading";
import NotFoundError from "../../accessories/NotFoundError";
import toast from "react-hot-toast";
import moment from "moment";

export default function SearchedSuggestions({ inputText, handleSearchBtn }) {
    const { data: keyWords, isLoading, isError, } = useGetKeywordSearchQuery(inputText);
    const [openModalDetails, setOpenModalDetails] = useState(false);
    const [detailsMovie, setDetailsMovie] = useState(null);

    const findKeywordTitle = (movie) => {
        if (movie.media_type === "tv") {
            return movie.original_name
        } else if (movie.media_type === "movie") {
            return movie.original_title
        }
    }

    const handleModal = (movie) => {
        if(movie.media_type==="person"){
            return toast.success("Currently, cast details is unavailable. Working on person details.")
        }
        handleCloseModal()
        setDetailsMovie(movie)
    }
    const handleCloseModal = (showDetails) => {
        setOpenModalDetails(!openModalDetails)
        if (showDetails === "showDetails") {
            handleSearchBtn()
        }
    }
    
    let content;
    if (isLoading) {
        content = <LoadingInline />
    } else if (!isLoading && keyWords?.results.length === 0 || isError) {
        content = <NotFoundError message="keyword" />
    } else {
        content =
            keyWords?.results.map(movie => (
                <div key={movie.id}>
                    <div className="topSlider border-y bg-[#000000dc] py-2 px-3 cursor-pointer flex items-center gap-x-3" onClick={() => handleModal(movie)}>
                        <img className="w-10 h-10 rounded-full" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />

                        <span className="text-green-600">{findKeywordTitle(movie)} </span> in <span className="font-bold">{movie.media_type.toUpperCase()}</span>
                    </div>

                </div>
            ))
    }
    console.log(keyWords, "searchedModal")
    return (
        <div className="h-screen overflow-y-scroll rounded-lg">
            {content}
            {openModalDetails && <ModalDetails movie={detailsMovie} handleCloseModal={handleCloseModal} />}
        </div>
    );
}
