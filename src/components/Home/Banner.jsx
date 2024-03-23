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
    if (isError) {
        content = "Data not found"
    }
    if (!isLoading && !isError) {
        content = <BannerText movie={MovieDetails} />
    }
    return (
        <div className="w-full absolute top-0 flex items-center justify-center z-20 bg-black h-full bg-opacity-70 bg-blend-multiply">
            <div className="container -mt-10">
                {content}
            </div>
        </div>
    );
}

export default Banner;
