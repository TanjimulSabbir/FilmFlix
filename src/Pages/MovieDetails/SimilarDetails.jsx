import { TextRuntime, getYear } from '../../components/Tools/Others'

export default function SimilarDetails({ movie }) {
    const { id, original_title, release_date, vote_average, adult, poster_path, overview, genres, runtime } = movie;
    return (
        <div>
            {/* title details */}
            <div className="flex items-center justify-start space-x-2 mb-5">
                <p className="">{getYear(release_date)} |</p>
                <p className="bg-green-600 p-1 rounded">15+ </p>
                <p className="">| {TextRuntime(runtime)} </p>
                <p className="">| {genres[0]?.name}</p>
            </div>

            <p className="mb-12">{overview}</p>

        </div>
    )
}
