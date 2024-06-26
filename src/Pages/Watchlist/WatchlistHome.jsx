import { PiDotBold } from "react-icons/pi";

export default function WatchlistHome() {
    return (
        <div>
            <h1>Your Watchlist</h1>
            <div className="flex items-center">
                <p>by <span>Tanjimul Islam Sabbir</span></p>
                <PiDotBold />
                <p>Created <span>2</span> years ago</p>
                <PiDotBold />
                <p>Modified <span>3 hours ago</span></p>
            </div>
        </div>
    )
}
