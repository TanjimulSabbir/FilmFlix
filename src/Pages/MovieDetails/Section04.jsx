import { MdOutlineArrowForwardIos } from "react-icons/md";
import useGetData from "../../components/Tools/useGetData";
import Slider from "react-slick";
import { imagesSliderSettings } from "../../components/Tools/SliderSettings";
import Videos from "./Videos";

export default function Section04({ id }) {
    const imagesData = useGetData({ type: "movie", id, keyword: "images" })

    const titleText = (text) => {
        return <h2 className="border-l-4 border-l-yellow-500 py-3 text-3xl pl-3 flex items-center">
            <span className="mr-4">{text}</span>
            <MdOutlineArrowForwardIos className="font-bold" />
        </h2>
    }

    const imagesSlider = () => {
        return imagesData?.posters?.map((poster, index) => {
            return <div key={index}>
                <img className="px-3" src={`https://image.tmdb.org/t/p/original${poster.file_path}`} alt="" srcSet="" />
            </div>
        })
    }

    console.log(imagesData, "imagesData")

    return (
        <div className="container mx-auto py-11">
            {titleText("Photos")}
            <div className="slider-container mt-9">
                <Slider {...imagesSliderSettings}>
                    {imagesData?.posters?.length > 0 && imagesSlider()}
                </Slider>
            </div>

            {/* <div className="my-9">
                {titleText("Videos")}
            </div>
            <Videos id={id} howMuch={"multi"} /> */}

        </div>
    )
}
