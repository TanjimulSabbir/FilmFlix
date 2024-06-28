export default function TvSeries({ content }) {
    return (
        <div className="lg:p-5 flex-1 mt-3">
            <h1 className="mb-3 text-xl sm:text-3xl md:text-4xl">Discover the Ultimate Movie Experience</h1>
            <p className="mb-11 text-gray-400 text-sm md:text-base">Elevate your movie nights with ease! Ever found yourself settling down, only to struggle finding a good movie? It's a common dilemma. But fret not! We've got you covered with a selection of top-notch films, right at your fingertips.</p>
            <div className="flex-1 grid grid-cols-3 gap-y-5 md:grid-cols-4 lg:grid-cols-5 items-center sm:gap-x-1 sm:gap-y-5 bg-black">
                {content}
            </div>
        </div>
    )
}
