import BannerText from "./BannerText";
import BannerImage from "./BannerImage";


function Banner({ movie }) {
    console.log(movie, "from banner")
    return (
        <div className="container mx-auto">
            <div className="absolute top-40 z-20">
                <div className="flex justify-between items-center">
                    <BannerText movie={movie} />
                    <BannerImage movie={movie} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
