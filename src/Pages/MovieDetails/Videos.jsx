import { useLocation } from "react-router-dom";
import { useGetMovieVideosQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";
import "../../style/animation.css"
import NotFoundError from "../../components/accessories/NotFoundError";
import LoadingInline from "../../components/accessories/InlineLoading";

export default function Videos({ id, howMuch, title, type }) {
    const pathType = useLocation().pathname.split("/")[1]

    const { data: videos, isLoading, isError } = useGetMovieVideosQuery({ id, type: type || pathType });
    console.log(videos, id, title, "video");
    let content;
    if (videos) {
        content = <LoadingInline />;
    } else if (isError) {
        content = <NotFoundError message="Trailer" />;
    } else {
        const trailerVideo = videos?.results?.find(item => item.type === "Trailer");
        if (!trailerVideo) {
            return <NotFoundError message="trailer" />
        }
        if (trailerVideo && howMuch === "1") {
            const { key } = trailerVideo;
            content = (
                <div className="rightSlider w-full h-full min-h-full">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${key}?controls=0&rel=0`}
                        title={title || "untitled"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            );
        } else {
            content = (
                <div className="leftSlider flex items-center gap-5 h-[400px] w-full overflow-x-scroll">
                    {videos.results.map(item => (
                        <iframe
                            key={item.key}
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${item.key}?controls=0&rel=0`}
                            title={title || "untitled"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    ))}
                </div>
            );
        }
    }

    return (
        <>
            {content}
        </>
    );
}
