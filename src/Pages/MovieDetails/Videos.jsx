import { useGetMovieVideosQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading";

export default function Videos({ id, howMuch }) {
    const { data: videos, isLoading, isError } = useGetMovieVideosQuery(id);
    let content;

    if (isLoading) {
        content = <Loading />;
    } else if (isError) {
        content = <p>Error occurred</p>;
    } else {
        const trailerVideo = videos.results?.find(item => item.type === "Trailer");
        if (trailerVideo && howMuch === "1") {
            const { key } = trailerVideo;
            content = (
                <div className="w-full">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${key}?controls=0&rel=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            );
        } else {
            content = (
                <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 items-center p-5 h-[500px] w-full overflow-scroll">
                    {videos.results.map(item => (
                        <iframe
                            key={item.key}
                            width="400"
                            height="315"
                            src={`https://www.youtube.com/embed/${item.key}?controls=0&rel=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy" // Lazy load the iframe
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
