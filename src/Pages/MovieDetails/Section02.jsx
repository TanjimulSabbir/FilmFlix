import Cast from "./Cast";

function Section02({ movie }) {
  const { adult, backdrop_path, belongs_to_collection, budget, genres, homepage, id, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count
  } = movie;

  return (
    <div className="container mx-auto">
      <h2 className="mb-2 text-3xl">Story-Line</h2>
      <p className="mb-10">{overview}</p>
      <h2 className="text-3xl mb-7">Top Cast</h2>
      <Cast id={id} />
    </div>
  )
}

export default Section02;