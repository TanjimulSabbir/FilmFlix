import { useGetMovieVideosQuery } from "../../Redux/Features/Api/movieApi";
import Loading from "../accessories/Loading";

function Trailer({ id, handleTrailer }) {
    const { data: movieVideos, isLoading, isError } = useGetMovieVideosQuery({ id, type: "movie" });

    let content;

    if (isLoading) {
        content = <Loading />;
    } else if (isError) {
        content = <p>Error Occurred while fetching the trailer.</p>;
    } else {
        const trailerVideo = movieVideos?.results?.find(video => video.type === 'Trailer');
        const videoKeyId = trailerVideo ? trailerVideo.key : null;

        if (videoKeyId) {
            content = (
                <iframe
                    id="player"
                    width="70%"
                    height="80%"
                    src={`https://www.youtube.com/embed/${videoKeyId}?autoplay=1&modestbranding=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        } else {
            content = <p>No trailer found for this movie.</p>;
        }
    }

    return (
        <div onClick={handleTrailer} className={`fixed inset-0 w-screen h-screen bg-black bg-opacity-30 flex items-center justify-center`} title="Close Trailer">
            {content}
        </div>
    );
}

export default Trailer;
