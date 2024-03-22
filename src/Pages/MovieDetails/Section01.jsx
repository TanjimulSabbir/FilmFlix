import Videos from "./Videos"

function Section01({ movie }) {
    const { id, adult, backdrop_path, belongs_to_collection, budget, genres, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
    } = movie;

    return (
        <div className='relative'>

            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={original_title} srcSet="" />
            <Videos id={id} howMuch="1" />
        </div>
    )
}

export default Section01;