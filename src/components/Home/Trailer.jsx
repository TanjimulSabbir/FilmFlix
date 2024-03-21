import { useGetMovieVideosQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";

function Trailer({ id, handleTrailer }) {
    const { data: movieVideos, isLoading, isError } = useGetMovieVideosQuery(id);

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError) content = <p>Error Occured :(</p>
    const videoKeyId = movieVideos.results.filter(video => video.type === 'Trailer')[0].key;

    content = <iframe
        id="player"
        width="70%"
        height="80%"
        src={`https://www.youtube.com/embed/${videoKeyId}?autoplay=1&modestbranding=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
        allowFullScreen
    ></iframe>

    return (
        <div onClick={handleTrailer}
            className={`fixed inset-0 w-screen h-screen bg-black flex items-center justify-center`}>
            {content}
        </div>
    )
}

export default Trailer;