import useGetData from "../../components/Tools/useGetData";
import Slider from "react-slick";
import { imagesSliderSettings } from "../../components/Tools/SliderSettings";
import Videos from "./Videos";
import { titleText } from "../../components/accessories/TextTitle";
import { Gallery } from "react-grid-gallery";

export default function Section04({ id }) {
    const imagesData = useGetData({ type: "movie", id, keyword: "images" })

    const imagesSlider = () => {
        const images = imagesData?.posters?.map((poster, index) => {
            // Generate random height and width values within a range
            const randomHeight = Math.floor(Math.random() * (400 - 200 + 1)) + 200; // Random height between 200 and 400
            const randomWidth = Math.floor(Math.random() * (300 - 150 + 1)) + 150; // Random width between 150 and 300
    
            return {
                src: `https://image.tmdb.org/t/p/original${poster.file_path}`,
                caption: "After Rain (Jeshu John - designerspics.com)",
                height: `${randomHeight}px`, // Set random height
                width: `${randomWidth}px` // Set random width
            }
        });
    
        return <Gallery images={images} />;
    }
    

    console.log(imagesData, "imagesData")

    return (
        <div className="py-11">
            {titleText("Photos")}
            <div className="mt-9">

                {imagesData?.posters?.length > 0 && imagesSlider()}

            </div>

            {/* <div className="my-9">
                {titleText("Videos")}
            </div>
            <Videos id={id} howMuch={"multi"} /> */}

        </div>
    )
}
