import Slider from "react-slick";
import { useGetCastsQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import { castSliderSettings } from "../../components/Tools/SliderSettings";
import style from "../../style/cast.module.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addCastData } from "../../Redux/Features/movies/moviesSlice";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

function Cast({ id }) {
    const pathType = useLocation().pathname.split("/")[1]
    const { data: castsData, isLoading, isError } = useGetCastsQuery({ type: pathType, id }, { skip: !id });
    let content;

    const dispatch = useDispatch();

    if (isLoading) content = <Loading />
    if (isError) content = "Data fetching error";

    useEffect(() => {
        if (!isLoading && !isError && castsData.id) {
            dispatch(addCastData({ ...castsData }))
        }
    }, [castsData])


    console.log(castsData)

    if (!isLoading && !isError && castsData.id) {
        content = castsData.cast.map(item => {
            return (
                <div key={item.id} onClick={() => toast.error("Currently, Cast details is not available. We are working on it. Thank you.")}>
                    <div className={`${style.castContainer} flex items-center space-x-2 justify-center`}>
                        <img className={`${style.castImage} w-16 h-24 lg:w-24 lg:h-32 rounded-full p-[1px]`} src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="" srcSet="" />
                        <p className={`${style.CastText} flex flex-col`}>
                            <span className="lg:text-xl">{item.original_name}</span>
                            <span className="text-gray-500 text-sm">{item.character}</span>
                        </p>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="slider-container mb-10">
            <Slider {...castSliderSettings}>
                {content}
            </Slider>
        </div>
    )
}

export default Cast;