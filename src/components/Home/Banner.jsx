import BannerText from "./BannerText";
import BannerImage from "./BannerImage";


function Banner({ movie }) {
    console.log(movie, "from banner")
    return (
        <div className="container mx-auto">
            <div className="w-full absolute top-40 z-20">
                <BannerText movie={movie} />
            </div>
        </div>
    );
}

export default Banner;
