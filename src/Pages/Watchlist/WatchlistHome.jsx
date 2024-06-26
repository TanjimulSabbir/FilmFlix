import { PiDotBold } from "react-icons/pi";

export default function WatchlistHome() {
    return (
        <div>
            <h1>Your Watchlist</h1>
            <div className="flex items-center">
                <p>by <span className="curspor-pointer text-green-600">Tanjimul Islam Sabbir</span></p>
                <PiDotBold />
                <p>Created <span>2</span> years ago</p>
                <PiDotBold />
                <p>Modified <span>3 hours ago</span></p>
            </div>
            <p>Your Watchlist is the place to track the titles you want to watch. You can sort your Watchlist by the IMDb rating, popularity score and arrange your titles in the order you want to see them.
            </p>
        </div>
    )
}
