import "../../style/loading.css";
import loadingIO from "../../assets/videos/FlimFlex.gif"
function Loading() {
    return (
        <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black z-50">
            <img src={loadingIO} alt="" srcSet="" />
        </div>
    )
}

export default Loading;