import BannerText01 from "./BannerText01";
import BannerText02 from "./BannerText02";
import "../../style/animation.css"

function BannerText({movie}) {
    return (
        <div className="w-full flex lg:items-center">
            <BannerText01 movie={movie} />
            <BannerText02 movie={movie} />
        </div>
    )
}

export default BannerText;