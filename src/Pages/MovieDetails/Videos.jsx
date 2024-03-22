import { useGetMovieVideosQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../../components/accessories/Loading"

export default function Videos({ id, howMuch }) {
    const { data: videos, isLoading, isError } = useGetMovieVideosQuery(id)
    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && !isError) content = <p>Error occured</p>;

    if (!isLoading && !isError) {
        const video = videos.results?.find(item => {
            if (item.type === "Trailer") {
                return item.key
            }
        })
        console.log(video, "video")
        content = howMuch === "1" ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : ""
    }
    console.log(content)
    return (
        <div>
            {content}
        </div>
    )
}
