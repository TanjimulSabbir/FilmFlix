import { useState } from "react";

import Slider from "react-slick";
import { imagesSliderSettings } from "../../components/Tools/SliderSettings";
import { ImCross } from "react-icons/im";
import { useGetAllDataSlashQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import NotFoundError from "../../components/accessories/NotFoundError";
import TitleText from "../../components/accessories/TextTitle";

export default function Section04({ id, type }) {
    // const imagesData = useGetData({ type: type, id, });
    const { data: imagesData, isLoading, isError } = useGetAllDataSlashQuery({ type, id, keyword: "images" });
    const [selectedImage, setSelectedImage] = useState(null);



    if (isLoading) {
        return <Loading />
    }
    if (isError || imagesData?.posters?.length === 0) {
        return <NotFoundError message="images" />
    }
    console.log(imagesData, "Images Data")

    const handleImageClick = (photoPath) => {
        setSelectedImage(photoPath);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="py-11">
            <TitleText text="Photos" />
            {imagesData.posters?.length > 0 ? <div className="slider-container mt-9">
                <Slider {...imagesSliderSettings}>
                    {imagesData?.posters?.map((poster, index) => {
                        const photoPath = `https://image.tmdb.org/t/p/original${poster.file_path}`;
                        return (
                            <div key={index} onClick={() => handleImageClick(photoPath)}>
                                <img className="px-3" src={photoPath} alt="" />
                            </div>
                        );
                    })}
                </Slider>
            </div> : <NotFoundError message="images" />}

            {/* Modal for displaying the selected image */}
            {selectedImage && (
                <div onClick={handleCloseModal} className="topSlider fixed inset-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-40 cursor-pointer">
                    <div className="relative">
                        <ImCross onClick={handleCloseModal} className="fixed text-3xl right-10 top-5 text-red-500 cursor-pointer z-50" />
                        <img className="w-[70%] h-[80%] mx-auto" src={selectedImage} alt="" />
                    </div>
                </div>
            )}

        </div>
    );
}
