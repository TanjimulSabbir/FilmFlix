import BannerText from "./BannerText";
import { useGetMovieDetailsQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";


function Banner({ id }) {
    const { data: MovieDetails, isLoading, isError, error } = useGetMovieDetailsQuery(id);
    console.log(id)
    let content;
    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && !isError) {
        content = <BannerText movie={MovieDetails} />
    }
    return (
        <div className="flex items-center justify-center">
            <div className="container w-full absolute top-48 z-20">
                {content}
            </div>
        </div>
    );
}

export default Banner;
