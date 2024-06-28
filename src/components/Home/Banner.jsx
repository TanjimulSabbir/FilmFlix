import BannerText from "./BannerText";
import { useGetMovieDetailsQuery } from "../../Redux/Features/Api/movieApi";
import InitialLoading from "../../UI/WelcomeText";
import Error from "../accessories/Error";


function Banner({ id }) {
    const { data: MovieDetails, isLoading, isError, error } = useGetMovieDetailsQuery({ id, type: "movie" });
    console.log(id)
    let content;
    if (isLoading) {
        content = <InitialLoading />
    }
    if (!isLoading && isError) {
        content = <Error message="no movie found!" />
    }
    if (!isLoading && !isError && MovieDetails) {
        content = <BannerText movie={MovieDetails} />
    }
    return (
        <div className="w-full absolute top-0 flex items-center justify-center z-20 bg-[#000000c1] h-screen md:h-full bg-blend-multiply">
            <div className="container -mt-40 lg:-mt-10">
                {content}
            </div>
        </div>
    );
}

export default Banner;