import BannerText from "./BannerText";
import BannerImage from "./BannerImage";


function Banner({movie}) {
    console.log(movie, "from banner")
    return (
        <div className="relative">
            <BannerText movie={movie} />
            <BannerImage movie={movie} />
        </div>
    );
}

export default Banner;
