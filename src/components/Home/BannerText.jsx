import BannerText01 from "./BannerText01";
import BannerText02 from "./BannerText02";

function BannerText({movie}) {
    return (
        <div className="w-full flex items-center">
            <BannerText01 movie={movie} />
            <BannerText02 movie={movie} />
        </div>
    )
}

export default BannerText;