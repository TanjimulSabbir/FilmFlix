import toast from "react-hot-toast";

function Trailer({ id, handleTrailer, openTrailer }) {
    return (
        <div className={`fixed inset-0 w-screen h-screen bg-black flex items-center justify-center`}>
            <iframe
                id="player"
                width="70%"
                height="80%"
                src={`https://www.youtube.com/embed/DTBcGQWmQ1c?autoplay=1&modestbranding=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            {/* <button onClick={() => handlePauseVideo()} className="mt-4 bg-green-500 p-3 rounded-md">Pause</button> */}
        </div>
    )
}

export default Trailer;