import style from "../../style/bannerText.module.css"
import { CiPlay1 } from "react-icons/ci";

function BannerText02() {
    return (
        <div className="w-1/2 flex justify-end">
            <div>
                <h1 className="text-5xl mb-14">27 April 2024</h1>

                <button className={`flex items-center space-x-2`}>
                    <CiPlay1 className="text-4xl text-green-600" />
                    <span>
                        Watch Trailer
                    </span>
                </button>
            </div>
        </div>
    )
}

export default BannerText02;