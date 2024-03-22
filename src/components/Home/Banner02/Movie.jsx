function Movie({ movie }) {
    console.log(movie, "from movie")
    return (
        <div>
            <p>{movie.original_title}</p>
        </div>
    )
}

export default Movie;